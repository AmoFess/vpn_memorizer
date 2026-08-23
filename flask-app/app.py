# -*- coding: utf-8 -*-
"""
Менеджер VPN-локаций — Flask + CSV (отладочный вариант БД).

Маршруты:
    GET  /                — список записей (сортировка: ?sort=<поле>&order=asc|desc)
    GET  /create          — форма создания
    POST /create          — сохранение новой записи
    GET  /edit/<int:id>   — форма редактирования
    POST /edit/<int:id>   — обновление записи
    POST /delete/<int:id> — удаление записи

Запуск:  python app.py   →  http://localhost:5000
"""

import os

from flask import (
    Flask,
    flash,
    redirect,
    render_template,
    request,
    url_for,
)
import validators

from csv_store import CsvStore, CsvCorruptedError

# --------------------------------------------------------------------- #
# Настройка приложения
# --------------------------------------------------------------------- #
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
CSV_PATH = os.environ.get(
    "CSV_PATH", os.path.join(BASE_DIR, "data", "vpn_locations.csv")
)

app = Flask(__name__)
app.secret_key = os.environ.get("SECRET_KEY", "change-me-in-production")

store = CsvStore(CSV_PATH)

# --------------------------------------------------------------------- #
# Справочники (хардкод для отладочной версии)
# --------------------------------------------------------------------- #
LOGIN_METHODS = ["Google", "ВКонтакте", "Телеграм"]

VPN_SYSTEMS = [
    "Remnawave panel",
    "Remnawave node",
    "3x-ui",
    "3x-ui pro",
    "Amnezia",
    "Wireguard",
]

PAYMENT_PERIODS = ["ежемесячно", "ежеквартально", "раз в полгода", "ежегодно"]

CURRENCIES = ["RUB", "USD", "EUR", "UAH", "BYN", "KZT", "UZS", "TRY", "AED", "THB", "CNY", "GBP"]

# (русское название, английское название, эмодзи-флаг)
COUNTRIES = [
    ("Россия", "Russia", "🇷🇺"),
    ("Германия", "Germany", "🇩🇪"),
    ("Нидерланды", "Netherlands", "🇳🇱"),
    ("США", "United States", "🇺🇸"),
    ("Великобритания", "United Kingdom", "🇬🇧"),
    ("Франция", "France", "🇫🇷"),
    ("Финляндия", "Finland", "🇫🇮"),
    ("Швеция", "Sweden", "🇸🇪"),
    ("Польша", "Poland", "🇵🇱"),
    ("Латвия", "Latvia", "🇱🇻"),
    ("Молдова", "Moldova", "🇲🇩"),
    ("Украина", "Ukraine", "🇺🇦"),
    ("Казахстан", "Kazakhstan", "🇰🇿"),
    ("Узбекистан", "Uzbekistan", "🇺🇿"),
    ("Грузия", "Georgia", "🇬🇪"),
    ("Турция", "Turkey", "🇹🇷"),
    ("ОАЭ", "United Arab Emirates", "🇦🇪"),
    ("Сингапур", "Singapore", "🇸🇬"),
    ("Япония", "Japan", "🇯🇵"),
    ("Канада", "Canada", "🇨🇦"),
]


def country_flag(name: str) -> str:
    """Возвращает эмодзи-флаг по русскому названию страны."""
    return next((flag for ru, _en, flag in COUNTRIES if ru == name), "")


# --------------------------------------------------------------------- #
# Сортировка (серверная, через query-параметры ?sort=...&order=...)
# --------------------------------------------------------------------- #
def _as_int(row, key):
    try:
        return int(float(row.get(key) or 0))
    except ValueError:
        return 0


def _as_float(row, key):
    try:
        return float(row.get(key) or 0)
    except ValueError:
        return 0.0


def _as_str(row, key):
    return (row.get(key) or "").strip().lower()


SORT_KEYS = {
    "id": lambda r: _as_int(r, "id"),
    "host_name": lambda r: _as_str(r, "host_name"),
    "country_name": lambda r: _as_str(r, "country_name"),
    "vpn_system": lambda r: _as_str(r, "vpn_system"),
    "payment_cost": lambda r: _as_float(r, "payment_cost"),
    "payment_day": lambda r: _as_int(r, "payment_day"),
}


# --------------------------------------------------------------------- #
# Валидация формы
# --------------------------------------------------------------------- #
def parse_form(form) -> dict:
    """Вытаскивает и нормализует поля из request.form."""

    def s(name: str) -> str:
        return (form.get(name) or "").strip()

    return {
        "host_name": s("host_name"),
        "login_url": s("login_url"),
        "login": s("login"),
        "login_method": s("login_method"),
        "vpn_system": s("vpn_system"),
        "country_name": s("country_name"),
        "country_flag": "",  # вычисляется по стране при сохранении
        "domain": s("domain"),
        "ip": s("ip"),
        "server_login": s("server_login"),
        "server_password": s("server_password"),
        "payment_period": s("payment_period"),
        "payment_cost": s("payment_cost").replace(",", "."),
        "payment_currency": s("payment_currency"),
        "payment_day": s("payment_day"),
    }


def validate(data: dict) -> dict:
    """Возвращает словарь ошибок {поле: сообщение}. Пустой — всё ок."""
    errors = {}

    if not data["host_name"]:
        errors["host_name"] = "Укажите название хостера"

    if not data["login_url"]:
        errors["login_url"] = "Укажите ссылку на страницу логина"
    elif validators.url(data["login_url"]) is not True:
        errors["login_url"] = "Это не похоже на корректный URL (пример: https://example.com/login)"

    if not data["country_name"]:
        errors["country_name"] = "Выберите страну"

    if data["vpn_system"] not in VPN_SYSTEMS:
        errors["vpn_system"] = "Выберите систему VPN из списка"

    if data["payment_cost"]:
        try:
            if float(data["payment_cost"]) < 0:
                raise ValueError
        except ValueError:
            errors["payment_cost"] = "Стоимость — неотрицательное число"

    if data["payment_day"]:
        try:
            day = int(data["payment_day"])
            if not 1 <= day <= 31:
                raise ValueError
        except ValueError:
            errors["payment_day"] = "День оплаты — целое число от 1 до 31"

    return errors


def normalize(data: dict) -> dict:
    """Приводит числовые поля к каноническому виду перед записью в CSV."""
    result = dict(data)
    try:
        cost = float(result["payment_cost"]) if result["payment_cost"] else None
        result["payment_cost"] = f"{cost:.2f}".rstrip("0").rstrip(".") if cost is not None else ""
    except ValueError:
        result["payment_cost"] = ""
    try:
        result["payment_day"] = str(int(result["payment_day"])) if result["payment_day"] else ""
    except ValueError:
        result["payment_day"] = ""
    return result


# --------------------------------------------------------------------- #
# Маршруты
# --------------------------------------------------------------------- #
@app.route("/")
def index():
    """Список всех VPN-локаций с серверной сортировкой."""
    sort = request.args.get("sort", "id")
    order = request.args.get("order", "asc")
    if sort not in SORT_KEYS:
        sort = "id"
    if order not in ("asc", "desc"):
        order = "asc"

    try:
        rows = store.read_all()
    except CsvCorruptedError:
        flash("CSV-файл повреждён и не может быть прочитан. Проверьте data/vpn_locations.csv", "danger")
        rows = []

    rows.sort(key=SORT_KEYS[sort], reverse=(order == "desc"))
    return render_template("list.html", rows=rows, sort=sort, order=order)


@app.route("/create", methods=["GET", "POST"])
def create():
    """Создание новой записи."""
    if request.method == "POST":
        data = parse_form(request.form)
        errors = validate(data)
        if errors:
            return render_template(
                "form.html",
                title="Новая VPN-локация",
                action=url_for("create"),
                data=data,
                errors=errors,
                countries=COUNTRIES,
                login_methods=LOGIN_METHODS,
                vpn_systems=VPN_SYSTEMS,
                payment_periods=PAYMENT_PERIODS,
                currencies=CURRENCIES,
            )
        data = normalize(data)
        data["country_flag"] = country_flag(data["country_name"])
        new_id = store.create(data)
        flash(f"Локация «{data['host_name']}» создана (ID {new_id})", "success")
        return redirect(url_for("index"))

    empty = {h: "" for h in
             ["host_name", "login_url", "login", "login_method", "vpn_system",
              "country_name", "country_flag", "domain", "ip", "server_login",
              "server_password", "payment_period", "payment_cost",
              "payment_currency", "payment_day"]}
    return render_template(
        "form.html",
        title="Новая VPN-локация",
        action=url_for("create"),
        data=empty,
        errors={},
        countries=COUNTRIES,
        login_methods=LOGIN_METHODS,
        vpn_systems=VPN_SYSTEMS,
        payment_periods=PAYMENT_PERIODS,
        currencies=CURRENCIES,
    )


@app.route("/edit/<int:item_id>", methods=["GET", "POST"])
def edit(item_id: int):
    """Редактирование существующей записи."""
    if request.method == "POST":
        data = parse_form(request.form)
        errors = validate(data)
        if errors:
            data["id"] = item_id
            return render_template(
                "form.html",
                title=f"Редактирование · ID {item_id}",
                action=url_for("edit", item_id=item_id),
                data=data,
                errors=errors,
                countries=COUNTRIES,
                login_methods=LOGIN_METHODS,
                vpn_systems=VPN_SYSTEMS,
                payment_periods=PAYMENT_PERIODS,
                currencies=CURRENCIES,
            )
        data = normalize(data)
        data["country_flag"] = country_flag(data["country_name"])
        updated = store.update(item_id, data)
        if updated is None:
            flash(f"Запись с ID {item_id} не найдена", "danger")
            return redirect(url_for("index"))
        flash(f"Локация «{data['host_name']}» обновлена", "success")
        return redirect(url_for("index"))

    row = store.get(item_id)
    if row is None:
        flash(f"Запись с ID {item_id} не найдена", "danger")
        return redirect(url_for("index"))
    return render_template(
        "form.html",
        title=f"Редактирование · ID {item_id}",
        action=url_for("edit", item_id=item_id),
        data=row,
        errors={},
        countries=COUNTRIES,
        login_methods=LOGIN_METHODS,
        vpn_systems=VPN_SYSTEMS,
        payment_periods=PAYMENT_PERIODS,
        currencies=CURRENCIES,
    )


@app.route("/delete/<int:item_id>", methods=["POST"])
def delete(item_id: int):
    """Удаление записи (только POST — защита от случайных GET)."""
    removed = store.delete(item_id)
    if removed is None:
        flash(f"Запись с ID {item_id} не найдена", "danger")
    else:
        flash(f"Запись «{removed['host_name']}» (ID {item_id}) удалена", "warning")
    return redirect(url_for("index"))


# --------------------------------------------------------------------- #
# Точка входа
# --------------------------------------------------------------------- #
if __name__ == "__main__":
    port = int(os.environ.get("PORT", "5000"))
    app.run(host="0.0.0.0", port=port, debug=os.environ.get("FLASK_DEBUG") == "1")

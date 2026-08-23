# -*- coding: utf-8 -*-
"""
Потокобезопасное CSV-хранилище VPN-локаций.

Особенности:
    * Файл создаётся автоматически (с заголовками) при первом запуске.
    * Все операции выполняются под блокировкой (threading.RLock) —
      это отладочный вариант БД, для production лучше взять SQLite.
    * Запись атомарная: данные сначала пишутся во временный файл,
      затем os.replace() подменяет основной — файл не повреждается
      даже при падении процесса во время записи.
"""

import csv
import os
import threading
from typing import Dict, List, Optional

# Порядок колонок в CSV (он же — список полей записи)
CSV_HEADERS = [
    "id",
    "host_name",
    "login_url",
    "login",
    "login_method",
    "vpn_system",
    "country_name",
    "country_flag",
    "domain",
    "ip",
    "server_login",
    "server_password",
    "payment_period",
    "payment_cost",
    "payment_currency",
    "payment_day",
]


class CsvCorruptedError(Exception):
    """Выбрасывается, когда CSV-файл не удаётся разобрать."""


class CsvStore:
    """Простейшая «БД» поверх одного CSV-файла (CRUD по id)."""

    def __init__(self, path: str):
        self.path = path
        self._lock = threading.RLock()
        os.makedirs(os.path.dirname(os.path.abspath(path)), exist_ok=True)
        self._ensure_file()

    # ------------------------------------------------------------------ #
    # Служебное
    # ------------------------------------------------------------------ #
    def _ensure_file(self) -> None:
        """Создаёт CSV с заголовками, если файла ещё нет."""
        if not os.path.exists(self.path):
            with open(self.path, "w", newline="", encoding="utf-8") as fh:
                csv.writer(fh).writerow(CSV_HEADERS)

    def _read_unlocked(self) -> List[Dict[str, str]]:
        """Чтение без захвата блокировки (вызывать уже под lock)."""
        try:
            with open(self.path, newline="", encoding="utf-8") as fh:
                reader = csv.DictReader(fh)
                rows: List[Dict[str, str]] = []
                for row in reader:
                    # Пропускаем пустые/мусорные строки без id
                    if not row or not (row.get("id") or "").strip():
                        continue
                    rows.append({h: (row.get(h) or "") for h in CSV_HEADERS})
                return rows
        except csv.Error as exc:  # повреждённый файл
            raise CsvCorruptedError(str(exc)) from exc

    def _write_unlocked(self, rows: List[Dict[str, str]]) -> None:
        """Атомарная запись: временный файл + os.replace()."""
        tmp_path = self.path + ".tmp"
        with open(tmp_path, "w", newline="", encoding="utf-8") as fh:
            writer = csv.DictWriter(fh, fieldnames=CSV_HEADERS, extrasaction="ignore")
            writer.writeheader()
            for row in rows:
                writer.writerow({h: row.get(h, "") for h in CSV_HEADERS})
        os.replace(tmp_path, self.path)  # атомарная подмена файла

    @staticmethod
    def _row_id(row: Dict[str, str]) -> int:
        try:
            return int(row.get("id") or 0)
        except ValueError:
            return 0

    # ------------------------------------------------------------------ #
    # Публичный CRUD-интерфейс
    # ------------------------------------------------------------------ #
    def read_all(self) -> List[Dict[str, str]]:
        """Все записи (список словарей со строковыми значениями)."""
        with self._lock:
            return self._read_unlocked()

    def get(self, item_id: int) -> Optional[Dict[str, str]]:
        """Одна запись по id или None."""
        with self._lock:
            for row in self._read_unlocked():
                if self._row_id(row) == item_id:
                    return row
        return None

    def create(self, data: Dict[str, str]) -> int:
        """Добавляет запись, id = max(id) + 1. Возвращает новый id."""
        with self._lock:
            rows = self._read_unlocked()
            new_id = max((self._row_id(r) for r in rows), default=0) + 1
            row = {h: str(data.get(h, "")) for h in CSV_HEADERS}
            row["id"] = str(new_id)
            rows.append(row)
            self._write_unlocked(rows)
            return new_id

    def update(self, item_id: int, data: Dict[str, str]) -> Optional[Dict[str, str]]:
        """Обновляет запись по id. Возвращает обновлённую строку или None."""
        with self._lock:
            rows = self._read_unlocked()
            for i, row in enumerate(rows):
                if self._row_id(row) == item_id:
                    merged = {**row, **{h: str(data.get(h, "")) for h in CSV_HEADERS}}
                    merged["id"] = str(item_id)  # id менять нельзя
                    rows[i] = merged
                    self._write_unlocked(rows)
                    return merged
        return None

    def delete(self, item_id: int) -> Optional[Dict[str, str]]:
        """Удаляет запись по id. Возвращает удалённую строку или None."""
        with self._lock:
            rows = self._read_unlocked()
            removed = next((r for r in rows if self._row_id(r) == item_id), None)
            if removed is None:
                return None
            self._write_unlocked([r for r in rows if r is not removed])
            return removed

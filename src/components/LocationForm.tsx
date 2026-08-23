import { useEffect, useState } from "react";
import type { ChangeEvent, FormEvent, ReactNode } from "react";
import type { VpnLocation } from "../types";
import {
  COUNTRIES,
  CURRENCIES,
  LOGIN_METHODS,
  PAYMENT_PERIODS,
  VPN_SYSTEMS,
  countryFlag,
} from "../constants";
import { IconEye, IconEyeOff, IconX } from "./icons";

interface Props {
  /** null — создание, иначе редактирование */
  initial: VpnLocation | null;
  onSave: (data: Omit<VpnLocation, "id">, id?: number) => void;
  onClose: () => void;
}

interface FormState {
  host_name: string;
  login_url: string;
  login: string;
  login_method: string;
  login_password: string;
  vpn_system: string;
  country_name: string;
  domain: string;
  ip: string;
  server_login: string;
  server_password: string;
  payment_period: string;
  payment_cost: string;
  payment_currency: string;
  payment_day: string;
}

const EMPTY: FormState = {
  host_name: "",
  login_url: "",
  login: "",
  login_method: "",
  login_password: "",
  vpn_system: "",
  country_name: "",
  domain: "",
  ip: "",
  server_login: "",
  server_password: "",
  payment_period: "",
  payment_cost: "",
  payment_currency: "",
  payment_day: "",
};

function fromLocation(l: VpnLocation): FormState {
  return {
    host_name: l.host_name,
    login_url: l.login_url,
    login: l.login,
    login_method: l.login_method,
    login_password: "",
    vpn_system: l.vpn_system,
    country_name: l.country_name,
    domain: l.domain,
    ip: l.ip,
    server_login: l.server_login,
    server_password: l.server_password,
    payment_period: l.payment_period,
    payment_cost: l.payment_cost == null ? "" : String(l.payment_cost),
    payment_currency: l.payment_currency,
    payment_day: l.payment_day == null ? "" : String(l.payment_day),
  };
}

function validate(s: FormState): Partial<Record<keyof FormState, string>> {
  const e: Partial<Record<keyof FormState, string>> = {};
  if (!s.host_name.trim()) e.host_name = "Укажите название хостера";

  if (!s.login_url.trim()) e.login_url = "Укажите ссылку на страницу логина";
  else {
    try {
      const u = new URL(s.login_url.trim());
      if (u.protocol !== "http:" && u.protocol !== "https:") throw new Error();
    } catch {
      e.login_url = "Некорректный URL (пример: https://example.com/login)";
    }
  }

  if (!s.country_name) e.country_name = "Выберите страну";
  if (!s.vpn_system) e.vpn_system = "Выберите систему VPN из списка";

  if (s.payment_cost !== "") {
    const v = Number(s.payment_cost.replace(",", "."));
    if (Number.isNaN(v) || v < 0) e.payment_cost = "Неотрицательное число";
  }
  if (s.payment_day !== "") {
    const d = Number(s.payment_day);
    if (!Number.isInteger(d) || d < 1 || d > 31) e.payment_day = "Число от 1 до 31";
  }
  return e;
}

function Field({
  label,
  required,
  error,
  children,
  className = "",
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-xs font-medium text-mist-500">
        {label} {required && <span className="text-coral-400">*</span>}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs text-coral-300">{error}</span>}
    </label>
  );
}

function Section({ num, title }: { num: string; title: string }) {
  return (
    <div className="mb-3 mt-7 flex items-center gap-3 border-b border-abyss-700 pb-2 first:mt-0">
      <span className="font-mono text-[11px] tracking-[0.14em] text-sea-400">{num}</span>
      <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-mist-500">{title}</span>
    </div>
  );
}

export default function LocationForm({ initial, onSave, onClose }: Props) {
  const [state, setState] = useState<FormState>(initial ? fromLocation(initial) : EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [showPw, setShowPw] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const set = (key: keyof FormState) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setState((s) => ({ ...s, [key]: e.target.value }));
    setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const flag = countryFlag(state.country_name);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const errs = validate(state);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    const cost = state.payment_cost === "" ? null : Number(state.payment_cost.replace(",", "."));
    const day = state.payment_day === "" ? null : Number(state.payment_day);

    onSave(
      {
        host_name: state.host_name.trim(),
        login_url: state.login_url.trim(),
        login: state.login.trim(),
        login_method: state.login_method,
        login_password: state.login_password,
        vpn_system: state.vpn_system,
        country_name: state.country_name,
        country_flag: countryFlag(state.country_name),
        domain: state.domain.trim(),
        ip: state.ip.trim(),
        server_login: state.server_login.trim(),
        server_password: state.server_password,
        payment_period: state.payment_period,
        payment_cost: cost,
        payment_currency: state.payment_currency,
        payment_day: day,
      },
      initial?.id
    );
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="anim-fade fixed inset-0 bg-abyss-950/75 backdrop-blur-[2px]" onClick={onClose} />
      <div className="flex min-h-full items-center justify-center p-4">
        <form
          onSubmit={submit}
          className="anim-pop relative w-full max-w-2xl rounded-lg border border-abyss-600 bg-abyss-900 shadow-[0_24px_80px_rgba(0,0,0,0.55)]"
        >
          {/* заголовок */}
          <div className="flex items-center justify-between border-b border-abyss-700 px-6 py-4">
            <div>
              <h2 className="font-display text-base font-semibold text-mist-100">
                {initial ? `Редактирование · ID ${initial.id}` : "Новая VPN-локация"}
              </h2>
              <p className="mt-0.5 font-mono text-[11px] text-mist-600">
                {initial ? "POST /edit/" + initial.id : "POST /create"} → data/vpn_locations.csv
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="rounded-md border border-abyss-600 p-1.5 text-mist-500 transition-colors hover:border-coral-500 hover:text-coral-300"
              title="Закрыть (Esc)"
            >
              <IconX className="h-4 w-4" />
            </button>
          </div>

          {/* поля */}
          <div className="max-h-[68vh] overflow-y-auto px-6 py-5">
            <Section num="01" title="Хостер и доступ" />
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Название хостера" required error={errors.host_name}>
                <input
                  autoFocus
                  className={`input ${errors.host_name ? "err" : ""}`}
                  value={state.host_name}
                  onChange={set("host_name")}
                  placeholder="Например: Aeza"
                />
              </Field>
              <Field label="Ссылка на страницу логина" required error={errors.login_url}>
                <input
                  className={`input font-mono text-[13px] ${errors.login_url ? "err" : ""}`}
                  value={state.login_url}
                  onChange={set("login_url")}
                  placeholder="https://example.com/login"
                />
              </Field>
              <Field label="Логин">
                <input className="input" value={state.login} onChange={set("login")} placeholder="email или имя пользователя" />
              </Field>
              <Field label="Пароль">
                <div className="relative">
                  <input
                    type={showPw ? "text" : "password"}
                    className="input pr-10"
                    value={state.login_password}
                    onChange={set("login_password")}
                    autoComplete="new-password"
                    placeholder="пароль от хостера"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPw((v) => !v)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-mist-600 transition-colors hover:text-sea-300"
                    title={showPw ? "Скрыть пароль" : "Показать пароль"}
                  >
                    {showPw ? <IconEyeOff className="h-4 w-4" /> : <IconEye className="h-4 w-4" />}
                  </button>
                </div>
              </Field>
              <Field label="Способ логина в хостере">
                <select className="input" value={state.login_method} onChange={set("login_method")}>
                  <option value="">— не выбран —</option>
                  {LOGIN_METHODS.map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </Field>
            </div>

            <Section num="02" title="VPN-сервер" />
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Система VPN" required error={errors.vpn_system}>
                <select className={`input ${errors.vpn_system ? "err" : ""}`} value={state.vpn_system} onChange={set("vpn_system")}>
                  <option value="">— выберите систему —</option>
                  {VPN_SYSTEMS.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </Field>
              <Field label="Страна" required error={errors.country_name}>
                <div className="flex gap-2">
                  <select
                    className={`input flex-1 ${errors.country_name ? "err" : ""}`}
                    value={state.country_name}
                    onChange={set("country_name")}
                  >
                    <option value="">— выберите страну —</option>
                    {COUNTRIES.map((c) => (
                      <option key={c.ru} value={c.ru}>
                        {c.ru} ({c.en})
                      </option>
                    ))}
                  </select>
                  {/* флаг подставляется автоматически при выборе страны */}
                  <span
                    className="flex w-12 shrink-0 items-center justify-center rounded-md border border-abyss-600 bg-abyss-850 text-xl transition-transform duration-200"
                    key={flag || "none"}
                    style={{ animation: flag ? "swapin .25s ease both" : undefined }}
                    title="Флаг подставляется автоматически"
                  >
                    {flag || "🏳️"}
                  </span>
                </div>
              </Field>
              <Field label="Доменное имя VPN">
                <input className="input font-mono text-[13px]" value={state.domain} onChange={set("domain")} placeholder="vpn.example.com" />
              </Field>
              <Field label="IP-адрес VPN">
                <input className="input font-mono text-[13px]" value={state.ip} onChange={set("ip")} placeholder="203.0.113.10" />
              </Field>
              <Field label="Логин на сервер">
                <input className="input font-mono text-[13px]" value={state.server_login} onChange={set("server_login")} placeholder="root" />
              </Field>
              <Field label="Пароль на сервер">
                <div className="relative">
                  <input
                    type={showPw ? "text" : "password"}
                    className="input pr-10 font-mono text-[13px]"
                    value={state.server_password}
                    onChange={set("server_password")}
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPw((v) => !v)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-mist-600 transition-colors hover:text-sea-300"
                    title={showPw ? "Скрыть пароль" : "Показать пароль"}
                  >
                    {showPw ? <IconEyeOff className="h-4 w-4" /> : <IconEye className="h-4 w-4" />}
                  </button>
                </div>
              </Field>
            </div>

            <Section num="03" title="Оплата" />
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <Field label="Периодичность" className="col-span-2 md:col-span-1">
                <select className="input" value={state.payment_period} onChange={set("payment_period")}>
                  <option value="">— не указана —</option>
                  {PAYMENT_PERIODS.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </Field>
              <Field label="Стоимость периода" error={errors.payment_cost}>
                <input
                  inputMode="decimal"
                  className={`input font-mono text-[13px] ${errors.payment_cost ? "err" : ""}`}
                  value={state.payment_cost}
                  onChange={set("payment_cost")}
                  placeholder="0.00"
                />
              </Field>
              <Field label="Валюта">
                <select className="input" value={state.payment_currency} onChange={set("payment_currency")}>
                  <option value="">—</option>
                  {CURRENCIES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </Field>
              <Field label="Число оплаты" error={errors.payment_day}>
                <input
                  inputMode="numeric"
                  className={`input font-mono text-[13px] ${errors.payment_day ? "err" : ""}`}
                  value={state.payment_day}
                  onChange={set("payment_day")}
                  placeholder="1–31"
                />
              </Field>
            </div>

            {Object.values(errors).some(Boolean) && (
              <p className="mt-4 rounded-md border border-coral-500/40 bg-coral-500/10 px-3 py-2 text-xs text-coral-300">
                Форма содержит ошибки — проверьте поля, отмеченные красным.
              </p>
            )}
          </div>

          {/* действия */}
          <div className="flex items-center gap-3 border-t border-abyss-700 px-6 py-4">
            <button
              type="submit"
              className="rounded-md bg-sea-500 px-5 py-2 text-sm font-semibold text-abyss-950 transition-all hover:bg-sea-400 hover:shadow-[0_0_24px_rgba(62,207,178,0.3)]"
            >
              Сохранить
            </button>
            <button
              type="button"
              onClick={onClose}
              className="rounded-md border border-abyss-600 px-4 py-2 text-sm text-mist-300 transition-colors hover:border-mist-600 hover:text-mist-100"
            >
              Отмена
            </button>
            <span className="ml-auto hidden text-[11px] text-mist-600 sm:block">
              поля со <span className="text-coral-400">*</span> обязательны
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

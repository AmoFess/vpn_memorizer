import { useRef, useState } from "react";
import type { SortField, SortState, VpnLocation } from "../types";
import { SYSTEM_DOT } from "../constants";
import {
  IconCheck,
  IconChevronDown,
  IconChevronUp,
  IconCopy,
  IconDatabase,
  IconExternal,
  IconPencil,
  IconPlus,
  IconSortNeutral,
  IconTrash,
} from "./icons";

const PERIOD_SHORT: Record<string, string> = {
  ежемесячно: "ежемес.",
  ежеквартально: "квартал",
  "раз в полгода": "полгода",
  ежегодно: "год",
};

interface Props {
  rows: VpnLocation[];
  totalCount: number;
  sort: SortState;
  onSort: (field: SortField) => void;
  onEdit: (item: VpnLocation) => void;
  onDelete: (item: VpnLocation) => void;
  onCopy: (text: string, label: string) => void;
  onAdd: () => void;
  onResetDemo: () => void;
}

function SortTh({
  field,
  label,
  sort,
  onSort,
  className = "",
}: {
  field: SortField;
  label: string;
  sort: SortState;
  onSort: (f: SortField) => void;
  className?: string;
}) {
  const active = sort.field === field;
  return (
    <th className={`px-4 py-3 ${className}`}>
      <button
        onClick={() => onSort(field)}
        className={`group inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors ${
          active ? "text-sea-300" : "text-mist-600 hover:text-mist-300"
        }`}
        title={`Сортировать по «${label}»`}
      >
        {label}
        {active ? (
          sort.dir === "asc" ? (
            <IconChevronUp className="h-3 w-3" />
          ) : (
            <IconChevronDown className="h-3 w-3" />
          )
        ) : (
          <IconSortNeutral className="h-3 w-3 opacity-40 transition-opacity group-hover:opacity-80" />
        )}
      </button>
    </th>
  );
}

function SystemChip({ system }: { system: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-abyss-600 bg-abyss-850 px-2.5 py-0.5 text-xs text-mist-300">
      <span className={`h-1.5 w-1.5 rounded-full ${SYSTEM_DOT[system] ?? "bg-mist-500"}`} />
      {system}
    </span>
  );
}

export default function LocationsTable({
  rows,
  totalCount,
  sort,
  onSort,
  onEdit,
  onDelete,
  onCopy,
  onAdd,
  onResetDemo,
}: Props) {
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const timer = useRef<number | null>(null);

  const handleCopy = (item: VpnLocation) => {
    onCopy(item.server_password, item.host_name);
    setCopiedId(item.id);
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopiedId(null), 1500);
  };

  /* ---------- пустые состояния ---------- */
  if (totalCount === 0) {
    return (
      <div className="anim-rise rounded-lg border border-dashed border-abyss-600 bg-abyss-850/60 px-6 py-16 text-center">
        <IconDatabase className="mx-auto h-10 w-10 text-mist-600" />
        <h3 className="mt-4 font-display text-lg font-semibold text-mist-100">Реестр пуст</h3>
        <p className="mx-auto mt-1 max-w-sm text-sm text-mist-500">
          В CSV пока нет ни одной записи. Добавьте первую VPN-локацию или верните демо-данные.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={onAdd}
            className="inline-flex items-center gap-2 rounded-md bg-sea-500 px-4 py-2 text-sm font-semibold text-abyss-950 transition-all hover:bg-sea-400 hover:shadow-[0_0_24px_rgba(62,207,178,0.25)]"
          >
            <IconPlus className="h-4 w-4" /> Добавить локацию
          </button>
          <button
            onClick={onResetDemo}
            className="rounded-md border border-abyss-600 px-4 py-2 text-sm text-mist-300 transition-colors hover:border-sea-600 hover:text-sea-300"
          >
            Вернуть демо-данные
          </button>
        </div>
      </div>
    );
  }

  if (rows.length === 0) {
    return (
      <div className="anim-rise rounded-lg border border-dashed border-abyss-600 bg-abyss-850/60 px-6 py-12 text-center">
        <p className="font-display text-base font-semibold text-mist-300">Ничего не найдено</p>
        <p className="mt-1 text-sm text-mist-500">Попробуйте изменить поисковый запрос.</p>
      </div>
    );
  }

  return (
    <>
      {/* ===================== таблица (desktop) ===================== */}
      <div className="anim-rise hidden overflow-hidden rounded-lg border border-abyss-700 bg-abyss-850/70 lg:block">
        <table className="w-full border-collapse text-left">
          <thead className="border-b border-abyss-700 bg-abyss-900/80">
            <tr>
              <SortTh field="id" label="ID" sort={sort} onSort={onSort} className="w-14" />
              <SortTh field="host_name" label="Хостер" sort={sort} onSort={onSort} />
              <SortTh field="country_name" label="Страна" sort={sort} onSort={onSort} />
              <SortTh field="vpn_system" label="VPN-система" sort={sort} onSort={onSort} />
              <th className="px-4 py-3 font-mono text-[11px] uppercase tracking-[0.12em] text-mist-600">
                Домен / IP
              </th>
              <SortTh field="payment_cost" label="Оплата" sort={sort} onSort={onSort} />
              <th className="px-4 py-3 font-mono text-[11px] uppercase tracking-[0.12em] text-mist-600">
                Пароль
              </th>
              <th className="w-24 px-4 py-3" />
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr
                key={r.id}
                className="anim-rise group border-b border-abyss-800 last:border-0 transition-colors duration-150 hover:bg-sea-500/[0.045]"
                style={{ animationDelay: `${Math.min(i * 45, 400)}ms` }}
              >
                <td className="px-4 py-3 font-mono text-xs text-mist-600">{r.id}</td>

                {/* Хостер = ссылка на страницу логина */}
                <td className="px-4 py-3">
                  <a
                    href={r.login_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-semibold text-mist-100 decoration-sea-600/50 underline-offset-4 transition-colors hover:text-sea-300 hover:underline"
                    title={r.login_url}
                  >
                    {r.host_name}
                    <IconExternal className="h-3 w-3 text-mist-600 transition-colors group-hover:text-sea-400" />
                  </a>
                  <div className="mt-0.5 text-xs text-mist-500">
                    {r.login || "—"}
                    {r.login_method && <span className="text-mist-600"> · через {r.login_method}</span>}
                  </div>
                </td>

                <td className="whitespace-nowrap px-4 py-3 text-sm">
                  <span className="mr-1.5">{r.country_flag}</span>
                  {r.country_name}
                </td>

                <td className="px-4 py-3">
                  <SystemChip system={r.vpn_system} />
                </td>

                <td className="px-4 py-3 font-mono text-xs leading-relaxed">
                  {r.domain && <div className="text-mist-300">{r.domain}</div>}
                  {r.ip && <div className="text-mist-600">{r.ip}</div>}
                  {!r.domain && !r.ip && <span className="text-mist-600">—</span>}
                </td>

                <td className="px-4 py-3">
                  {r.payment_cost != null ? (
                    <>
                      <div className="font-mono text-sm font-semibold text-ember-300">
                        {r.payment_cost} {r.payment_currency}
                      </div>
                      <div className="mt-0.5 text-xs text-mist-500">
                        {PERIOD_SHORT[r.payment_period] || r.payment_period || "разово"}
                        {r.payment_day != null && ` · ${r.payment_day}-е число`}
                      </div>
                    </>
                  ) : (
                    <span className="text-mist-600">—</span>
                  )}
                </td>

                {/* Клик копирует пароль в буфер */}
                <td className="px-4 py-3">
                  {r.server_password ? (
                    <button
                      onClick={() => handleCopy(r)}
                      className={`inline-flex items-center gap-2 rounded-md border px-2.5 py-1.5 font-mono text-xs tracking-[0.14em] transition-all duration-150 ${
                        copiedId === r.id
                          ? "border-sea-500 bg-sea-500/10 text-sea-300"
                          : "border-dashed border-abyss-600 text-mist-300 hover:border-sea-600 hover:text-mist-100"
                      }`}
                      title="Кликните, чтобы скопировать пароль"
                    >
                      {copiedId === r.id ? (
                        <>
                          <IconCheck className="h-3.5 w-3.5" /> скопировано
                        </>
                      ) : (
                        <>
                          ••••••••
                          <IconCopy className="h-3.5 w-3.5 opacity-40 transition-opacity group-hover:opacity-90" />
                        </>
                      )}
                    </button>
                  ) : (
                    <span className="text-mist-600">—</span>
                  )}
                </td>

                <td className="px-4 py-3">
                  <div className="flex justify-end gap-1.5">
                    <button
                      onClick={() => onEdit(r)}
                      className="rounded-md border border-abyss-600 p-1.5 text-mist-500 transition-all hover:border-sea-600 hover:bg-sea-500/10 hover:text-sea-300"
                      title="Редактировать"
                    >
                      <IconPencil className="h-3.5 w-3.5" />
                    </button>
                    <button
                      onClick={() => onDelete(r)}
                      className="rounded-md border border-abyss-600 p-1.5 text-mist-500 transition-all hover:border-coral-500 hover:bg-coral-500/10 hover:text-coral-300"
                      title="Удалить"
                    >
                      <IconTrash className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ===================== карточки (mobile) ===================== */}
      <div className="space-y-3 lg:hidden">
        {rows.map((r, i) => (
          <div
            key={r.id}
            className="anim-rise rounded-lg border border-abyss-700 bg-abyss-850/80 p-4"
            style={{ animationDelay: `${Math.min(i * 60, 420)}ms` }}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <a
                  href={r.login_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-semibold text-mist-100 hover:text-sea-300"
                >
                  {r.country_flag} {r.host_name}
                  <IconExternal className="h-3 w-3 text-mist-600" />
                </a>
                <div className="mt-0.5 text-xs text-mist-500">
                  {r.country_name} · <span className="font-mono">#{r.id}</span>
                </div>
              </div>
              <div className="flex shrink-0 gap-1.5">
                <button
                  onClick={() => onEdit(r)}
                  className="rounded-md border border-abyss-600 p-1.5 text-mist-500 hover:border-sea-600 hover:text-sea-300"
                  title="Редактировать"
                >
                  <IconPencil className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={() => onDelete(r)}
                  className="rounded-md border border-abyss-600 p-1.5 text-mist-500 hover:border-coral-500 hover:text-coral-300"
                  title="Удалить"
                >
                  <IconTrash className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
              <SystemChip system={r.vpn_system} />
              {r.payment_cost != null && (
                <span className="font-mono font-semibold text-ember-300">
                  {r.payment_cost} {r.payment_currency}
                </span>
              )}
              {r.payment_period && <span className="text-mist-500">{PERIOD_SHORT[r.payment_period]}</span>}
              {r.payment_day != null && <span className="text-mist-500">· {r.payment_day}-е</span>}
            </div>

            {(r.domain || r.ip) && (
              <div className="mt-2 font-mono text-xs text-mist-500">
                {r.domain && <span className="text-mist-300">{r.domain}</span>}
                {r.domain && r.ip && <span className="mx-1.5 text-mist-600">·</span>}
                {r.ip && <span>{r.ip}</span>}
              </div>
            )}

            {r.server_password && (
              <button
                onClick={() => handleCopy(r)}
                className={`mt-3 inline-flex items-center gap-2 rounded-md border px-2.5 py-1.5 font-mono text-xs tracking-[0.14em] transition-all ${
                  copiedId === r.id
                    ? "border-sea-500 bg-sea-500/10 text-sea-300"
                    : "border-dashed border-abyss-600 text-mist-300"
                }`}
              >
                {copiedId === r.id ? (
                  <>
                    <IconCheck className="h-3.5 w-3.5" /> скопировано
                  </>
                ) : (
                  <>
                    •••••••• <span className="tracking-normal text-sea-400">копировать</span>
                  </>
                )}
              </button>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

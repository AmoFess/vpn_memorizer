import { useMemo } from "react";
import type { VpnLocation } from "../types";
import { PERIOD_MONTHS } from "../constants";

const MONTHS_RU = ["янв", "фев", "мар", "апр", "мая", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"];

function fmtNum(n: number): string {
  if (Math.abs(n - Math.round(n)) < 0.005) return String(Math.round(n));
  return n.toFixed(2).replace(/0+$/, "").replace(/\.$/, "");
}

/** Ближайшая дата оплаты для записи (день N текущего или следующего месяца) */
function nextPayDate(day: number): { date: Date; diff: number } {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const lastOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  let d = new Date(now.getFullYear(), now.getMonth(), Math.min(day, lastOfMonth));
  if (d < today) {
    const lastNext = new Date(now.getFullYear(), now.getMonth() + 2, 0).getDate();
    d = new Date(now.getFullYear(), now.getMonth() + 1, Math.min(day, lastNext));
  }
  return { date: d, diff: Math.round((d.getTime() - today.getTime()) / 86_400_000) };
}

export default function StatsBar({ locations }: { locations: VpnLocation[] }) {
  const stats = useMemo(() => {
    const countries = new Set(locations.map((l) => l.country_name)).size;
    const systems = new Set(locations.map((l) => l.vpn_system)).size;

    // оценка «в месяц» по каждой валюте
    const byCurrency = new Map<string, number>();
    for (const l of locations) {
      if (l.payment_cost == null || !l.payment_currency) continue;
      const months = PERIOD_MONTHS[l.payment_period] ?? 1;
      byCurrency.set(l.payment_currency, (byCurrency.get(l.payment_currency) ?? 0) + l.payment_cost / months);
    }
    const monthly = [...byCurrency.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([cur, sum]) => `${fmtNum(sum)} ${cur}`)
      .join(" · ");

    // ближайшая оплата
    let nearest: { host: string; day: number; diff: number; date: Date } | null = null;
    for (const l of locations) {
      if (l.payment_day == null) continue;
      const { date, diff } = nextPayDate(l.payment_day);
      if (!nearest || diff < nearest.diff) nearest = { host: l.host_name, day: l.payment_day, diff, date };
    }

    return { total: locations.length, countries, systems, monthly, nearest };
  }, [locations]);

  const items: { label: string; value: string; sub: string; accent?: string; dot?: boolean }[] = [
    {
      label: "Локаций в реестре",
      value: String(stats.total),
      sub: "data/vpn_locations.csv",
      dot: true,
    },
    {
      label: "Стран",
      value: String(stats.countries),
      sub: stats.countries === 0 ? "—" : "география серверов",
    },
    {
      label: "VPN-систем",
      value: String(stats.systems),
      sub: "remnawave · 3x-ui · …",
    },
    {
      label: "≈ Расход в месяц",
      value: stats.monthly || "—",
      sub: "по всем валютам",
      accent: "text-ember-300",
    },
    {
      label: "Ближайшая оплата",
      value: stats.nearest ? `${stats.nearest.date.getDate()} ${MONTHS_RU[stats.nearest.date.getMonth()]}` : "—",
      sub: stats.nearest
        ? `${stats.nearest.host} · через ${stats.nearest.diff} дн.`
        : "нет дат оплаты",
      accent: stats.nearest && stats.nearest.diff <= 3 ? "text-coral-300" : "text-sea-300",
    },
  ];

  return (
    <div className="anim-rise grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-abyss-700 bg-abyss-700 sm:grid-cols-3 lg:grid-cols-5">
      {items.map((it, i) => (
        <div
          key={it.label}
          className="anim-rise bg-abyss-850 px-4 py-3.5 transition-colors duration-200 hover:bg-abyss-800"
          style={{ animationDelay: `${80 + i * 70}ms` }}
        >
          <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-mist-600">
            {it.dot && <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-sea-400" />}
            {it.label}
          </div>
          <div className={`mt-1.5 font-display text-lg leading-tight font-semibold ${it.accent ?? "text-mist-100"}`}>
            {it.value}
          </div>
          <div className="mt-0.5 truncate font-mono text-[11px] text-mist-600">{it.sub}</div>
        </div>
      ))}
    </div>
  );
}

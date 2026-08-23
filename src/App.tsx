import { useEffect, useMemo, useRef, useState } from "react";
import type { ReactElement, SVGProps } from "react";
import type { SortField, SortState, ToastMsg, VpnLocation } from "./types";
import { loadLocations, nextId, saveLocations, seedLocations } from "./store";
import StatsBar from "./components/StatsBar";
import LocationsTable from "./components/LocationsTable";
import LocationForm from "./components/LocationForm";
import ConfirmDelete from "./components/ConfirmDelete";
import CodePanel from "./components/CodePanel";
import DocsPanel from "./components/DocsPanel";
import {
  IconBook,
  IconCheck,
  IconCode,
  IconPlus,
  IconSearch,
  IconServer,
  IconX,
  LogoMark,
} from "./components/icons";

type View = "registry" | "code" | "docs";

/** Копирование в буфер с фолбэком для небезопасного контекста */
async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
      return true;
    } catch {
      return false;
    }
  }
}

const TABS: { id: View; label: string; icon: (p: SVGProps<SVGSVGElement>) => ReactElement }[] = [
  { id: "registry", label: "Реестр", icon: IconServer },
  { id: "code", label: "Исходный код", icon: IconCode },
  { id: "docs", label: "Запуск", icon: IconBook },
];

export default function App() {
  const [locations, setLocations] = useState<VpnLocation[]>(() => loadLocations());
  const [view, setView] = useState<View>("registry");
  const [sort, setSort] = useState<SortState>({ field: "id", dir: "asc" });
  const [query, setQuery] = useState("");
  const [modal, setModal] = useState<{ item: VpnLocation | null } | null>(null);
  const [toDelete, setToDelete] = useState<VpnLocation | null>(null);
  const [toasts, setToasts] = useState<ToastMsg[]>([]);
  const toastSeq = useRef(0);

  useEffect(() => {
    saveLocations(locations);
  }, [locations]);

  const pushToast = (text: string, tone: ToastMsg["tone"] = "success") => {
    const id = ++toastSeq.current;
    setToasts((t) => [...t.slice(-3), { id, text, tone }]);
    window.setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 2800);
  };

  /* ---------------- CRUD ---------------- */
  const handleSave = (data: Omit<VpnLocation, "id">, id?: number) => {
    if (id != null) {
      setLocations((list) => list.map((l) => (l.id === id ? { ...data, id } : l)));
      pushToast(`Локация «${data.host_name}» обновлена`);
    } else {
      const newId = nextId(locations);
      setLocations((list) => [...list, { ...data, id: newId }]);
      pushToast(`Локация «${data.host_name}» создана · ID ${newId}`);
    }
    setModal(null);
  };

  const handleDelete = (id: number) => {
    const item = locations.find((l) => l.id === id);
    setLocations((list) => list.filter((l) => l.id !== id));
    setToDelete(null);
    pushToast(item ? `«${item.host_name}» (ID ${id}) удалена` : "Запись удалена", "info");
  };

  const handleCopy = async (text: string, label: string) => {
    const ok = await copyText(text);
    pushToast(ok ? `Пароль «${label}» скопирован в буфер` : "Не удалось скопировать", ok ? "success" : "danger");
  };

  const handleSort = (field: SortField) =>
    setSort((s) =>
      s.field === field ? { field, dir: s.dir === "asc" ? "desc" : "asc" } : { field, dir: "asc" }
    );

  /* ---------------- выборка: фильтр + сортировка ---------------- */
  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = locations;
    if (q) {
      list = list.filter((l) =>
        [l.host_name, l.country_name, l.domain, l.ip, l.vpn_system, l.login, l.login_method]
          .join(" ")
          .toLowerCase()
          .includes(q)
      );
    }
    const dir = sort.dir === "asc" ? 1 : -1;
    return [...list].sort((a, b) => {
      const av = a[sort.field];
      const bv = b[sort.field];
      const an = typeof av === "number" ? av : null;
      const bn = typeof bv === "number" ? bv : null;
      if (an != null || bn != null) return ((an ?? -Infinity) - (bn ?? -Infinity)) * dir;
      return String(av ?? "").toLowerCase().localeCompare(String(bv ?? "").toLowerCase(), "ru") * dir;
    });
  }, [locations, query, sort]);

  const openCreate = () => {
    setView("registry");
    setModal({ item: null });
  };

  return (
    <div className="relative min-h-screen">
      {/* фоновая сцена */}
      <div className="scene-grid" aria-hidden />
      <div className="scene-glow" aria-hidden />

      {/* ======================= шапка ======================= */}
      <header className="sticky top-0 z-40 border-b border-abyss-700 bg-abyss-950/85 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 sm:gap-5 sm:px-6">
          <button onClick={() => setView("registry")} className="flex items-center gap-2.5 text-left">
            <LogoMark className="h-8 w-8 shrink-0" />
            <span>
              <span className="block font-display text-sm font-bold leading-tight tracking-wide text-mist-100">
                VPN<span className="text-sea-400">·</span>РЕЕСТР
              </span>
              <span className="block font-mono text-[10px] leading-tight text-mist-600">
                flask · csv · docker
              </span>
            </span>
          </button>

          <nav className="ml-auto flex items-center gap-1 sm:gap-1.5">
            {TABS.map((t) => {
              const Icon = t.icon;
              const active = view === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setView(t.id)}
                  className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-[13px] font-medium transition-all duration-150 sm:px-3 ${
                    active
                      ? "bg-sea-500/10 text-sea-300 shadow-[inset_0_0_0_1px_rgba(62,207,178,0.3)]"
                      : "text-mist-500 hover:bg-abyss-800 hover:text-mist-300"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{t.label}</span>
                </button>
              );
            })}
          </nav>

          <button
            onClick={openCreate}
            className="ml-1 hidden items-center gap-1.5 rounded-md bg-sea-500 px-3.5 py-1.5 text-[13px] font-semibold text-abyss-950 transition-all duration-150 hover:bg-sea-400 hover:shadow-[0_0_22px_rgba(62,207,178,0.3)] md:inline-flex sm:ml-2"
          >
            <IconPlus className="h-4 w-4" />
            Новая локация
          </button>
        </div>
      </header>

      {/* ======================= контент ======================= */}
      <main className="relative z-10 mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8">
        {view === "registry" && (
          <div className="space-y-5">
            <StatsBar locations={locations} />

            <div className="anim-rise flex flex-wrap items-end justify-between gap-4" style={{ animationDelay: "120ms" }}>
              <div>
                <h1 className="font-display text-xl font-semibold text-mist-100 sm:text-2xl">
                  Реестр локаций
                </h1>
                <p className="mt-1 text-sm text-mist-500">
                  {rows.length === locations.length
                    ? `Всего записей: ${locations.length}`
                    : `Найдено ${rows.length} из ${locations.length}`}
                  <span className="mx-2 text-mist-600">·</span>
                  <span className="font-mono text-xs text-mist-600">
                    сортировка: {sort.field} {sort.dir === "asc" ? "↑" : "↓"}
                  </span>
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="hidden items-center gap-1.5 rounded-md border border-abyss-700 bg-abyss-850 px-2.5 py-1.5 font-mono text-[11px] text-mist-600 lg:inline-flex">
                  <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-sea-400" />
                  демо: localStorage · в Flask — CSV
                </span>
                <div className="relative">
                  <IconSearch className="pointer-events-none absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-mist-600" />
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Хостер, страна, домен, IP…"
                    className="input w-56 pl-8 sm:w-64"
                  />
                  {query && (
                    <button
                      onClick={() => setQuery("")}
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-mist-600 hover:text-mist-300"
                      title="Очистить"
                    >
                      <IconX className="h-3.5 w-3.5" />
                    </button>
                  )}
                </div>
                <button
                  onClick={openCreate}
                  className="inline-flex items-center gap-1.5 rounded-md bg-sea-500 px-3.5 py-2 text-[13px] font-semibold text-abyss-950 transition-all duration-150 hover:bg-sea-400 hover:shadow-[0_0_22px_rgba(62,207,178,0.3)] md:hidden"
                >
                  <IconPlus className="h-4 w-4" />
                  Добавить
                </button>
              </div>
            </div>

            <LocationsTable
              rows={rows}
              totalCount={locations.length}
              sort={sort}
              onSort={handleSort}
              onEdit={(item) => setModal({ item })}
              onDelete={(item) => setToDelete(item)}
              onCopy={handleCopy}
              onAdd={openCreate}
              onResetDemo={() => {
                setLocations(seedLocations());
                pushToast("Демо-данные восстановлены", "info");
              }}
            />

            <p className="hidden text-center font-mono text-[11px] text-mist-600 lg:block">
              клик по заголовку колонки — сортировка · клик по паролю — копирование в буфер · название
              хостера открывает страницу логина
            </p>
          </div>
        )}

        {view === "code" && <CodePanel />}
        {view === "docs" && <DocsPanel />}
      </main>

      {/* ======================= подвал ======================= */}
      <footer className="relative z-10 mt-10 border-t border-abyss-700">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-4 py-4 text-xs text-mist-600 sm:px-6">
          <span>Демо-интерфейс Flask-приложения · полный код — во вкладке «Исходный код» (папка flask-app/)</span>
          <span className="ml-auto hidden font-mono sm:inline">
            GET / · /create · /edit/&lt;id&gt; · POST /delete/&lt;id&gt;
          </span>
        </div>
      </footer>

      {/* ======================= модалки и тосты ======================= */}
      {modal && (
        <LocationForm initial={modal.item} onSave={handleSave} onClose={() => setModal(null)} />
      )}
      {toDelete && (
        <ConfirmDelete item={toDelete} onConfirm={handleDelete} onClose={() => setToDelete(null)} />
      )}

      <div className="pointer-events-none fixed bottom-4 right-4 z-[70] flex flex-col items-end gap-2">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`anim-toast pointer-events-auto flex items-center gap-2.5 rounded-md border bg-abyss-850 px-4 py-2.5 text-sm shadow-[0_12px_40px_rgba(0,0,0,0.5)] ${
              t.tone === "success"
                ? "border-sea-600 text-sea-300"
                : t.tone === "danger"
                ? "border-coral-500 text-coral-300"
                : "border-glacier-400/40 text-glacier-300"
            }`}
          >
            {t.tone === "success" ? (
              <IconCheck className="h-4 w-4 shrink-0" />
            ) : t.tone === "danger" ? (
              <IconX className="h-4 w-4 shrink-0" />
            ) : (
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-glacier-400" />
            )}
            {t.text}
          </div>
        ))}
      </div>
    </div>
  );
}

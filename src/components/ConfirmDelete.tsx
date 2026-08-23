import { useEffect } from "react";
import type { VpnLocation } from "../types";
import { IconTrash } from "./icons";

interface Props {
  item: VpnLocation;
  onConfirm: (id: number) => void;
  onClose: () => void;
}

export default function ConfirmDelete({ item, onConfirm, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50">
      <div className="anim-fade fixed inset-0 bg-abyss-950/75 backdrop-blur-[2px]" onClick={onClose} />
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="anim-pop w-full max-w-md rounded-lg border border-coral-500/40 bg-abyss-900 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.55)]">
          <div className="flex items-start gap-4">
            <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-coral-500/40 bg-coral-500/10 text-coral-300">
              <IconTrash className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <h2 className="font-display text-base font-semibold text-mist-100">Удалить локацию?</h2>
              <p className="mt-1.5 text-sm leading-relaxed text-mist-500">
                Запись{" "}
                <span className="font-semibold text-mist-100">
                  {item.country_flag} «{item.host_name}»
                </span>{" "}
                <span className="font-mono text-xs text-mist-600">(ID {item.id})</span> будет удалена из
                CSV без возможности восстановления.
              </p>
            </div>
          </div>
          <div className="mt-6 flex justify-end gap-3">
            <button
              onClick={onClose}
              className="rounded-md border border-abyss-600 px-4 py-2 text-sm text-mist-300 transition-colors hover:border-mist-600 hover:text-mist-100"
            >
              Отмена
            </button>
            <button
              onClick={() => onConfirm(item.id)}
              className="rounded-md bg-coral-500 px-4 py-2 text-sm font-semibold text-abyss-950 transition-all hover:bg-coral-400 hover:shadow-[0_0_24px_rgba(240,78,64,0.3)]"
            >
              Удалить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

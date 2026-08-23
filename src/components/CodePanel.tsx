import { useState } from "react";
import { PROJECT_FILES } from "../flaskFiles";
import { IconCheck, IconCode, IconCopy } from "./icons";

const LANG_LABEL: Record<string, string> = {
  python: "Python",
  jinja: "Jinja2",
  text: "Text",
  docker: "Docker",
  yaml: "YAML",
  markdown: "Markdown",
};

export default function CodePanel() {
  const [idx, setIdx] = useState(0);
  const [copied, setCopied] = useState(false);
  const file = PROJECT_FILES[idx];
  const lines = file.content.replace(/\n$/, "").split("\n");

  const copyFile = async () => {
    try {
      await navigator.clipboard.writeText(file.content);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = file.content;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <div className="anim-rise">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-xl font-semibold text-mist-100 sm:text-2xl">
            Исходный код Flask-приложения
          </h2>
          <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-mist-500">
            Полный проект лежит в папке <span className="font-mono text-sea-300">flask-app/</span> — 10 файлов:
            бэкенд, Jinja-шаблоны, зависимости и Docker. Этот интерфейс — живое демо того, что рендерят шаблоны.
          </p>
        </div>
        <button
          onClick={copyFile}
          className={`inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium transition-all ${
            copied
              ? "border-sea-500 bg-sea-500/10 text-sea-300"
              : "border-abyss-600 text-mist-300 hover:border-sea-600 hover:text-sea-300"
          }`}
        >
          {copied ? <IconCheck className="h-4 w-4" /> : <IconCopy className="h-4 w-4" />}
          {copied ? "Скопировано" : "Копировать файл"}
        </button>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-[250px_1fr]">
        {/* список файлов */}
        <div className="anim-rise flex gap-1.5 overflow-x-auto rounded-lg border border-abyss-700 bg-abyss-850/70 p-2 md:flex-col md:overflow-visible" style={{ animationDelay: "80ms" }}>
          {PROJECT_FILES.map((f, i) => (
            <button
              key={f.path}
              onClick={() => {
                setIdx(i);
                setCopied(false);
              }}
              className={`group shrink-0 rounded-md border-l-2 px-3 py-2 text-left transition-all duration-150 ${
                i === idx
                  ? "border-sea-400 bg-sea-500/10"
                  : "border-transparent hover:border-abyss-600 hover:bg-abyss-800"
              }`}
            >
              <span
                className={`block whitespace-nowrap font-mono text-xs ${
                  i === idx ? "text-sea-300" : "text-mist-300 group-hover:text-mist-100"
                }`}
              >
                {f.path}
              </span>
              <span className="mt-0.5 hidden max-w-[210px] truncate text-[11px] text-mist-600 md:block">
                {f.note}
              </span>
            </button>
          ))}
        </div>

        {/* просмотрщик */}
        <div className="anim-rise overflow-hidden rounded-lg border border-abyss-700 bg-abyss-900" style={{ animationDelay: "140ms" }}>
          <div className="flex items-center gap-3 border-b border-abyss-700 bg-abyss-850/80 px-4 py-2.5">
            <IconCode className="h-4 w-4 text-sea-400" />
            <span className="font-mono text-xs text-mist-100">{file.path}</span>
            <span className="rounded border border-abyss-600 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-mist-500">
              {LANG_LABEL[file.lang] ?? file.lang}
            </span>
            <span className="ml-auto font-mono text-[11px] text-mist-600">
              {lines.length} строк · {new Blob([file.content]).size} Б
            </span>
          </div>
          <div key={file.path} className="anim-swap max-h-[62vh] overflow-auto py-2 font-mono text-[12.5px] leading-[1.6]">
            {lines.map((line, i) => (
              <div key={i} className="codeline">
                <span className="select-none pr-3 text-right text-mist-600/70">{i + 1}</span>
                <span className="whitespace-pre pr-4 text-mist-300">{line || " "}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

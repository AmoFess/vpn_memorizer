import { useState } from "react";
import type { ReactNode } from "react";
import { IconCheck, IconCopy, IconLayers, IconShield, IconTerminal } from "./icons";

function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = code;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };
  return (
    <div className="group relative mt-3 overflow-hidden rounded-md border border-abyss-700 bg-abyss-900">
      <button
        onClick={copy}
        className={`absolute right-2 top-2 inline-flex items-center gap-1.5 rounded border px-2 py-1 font-mono text-[10px] uppercase tracking-wider transition-all ${
          copied
            ? "border-sea-500 bg-sea-500/10 text-sea-300"
            : "border-abyss-600 bg-abyss-850 text-mist-600 opacity-0 hover:text-sea-300 group-hover:opacity-100"
        }`}
      >
        {copied ? <IconCheck className="h-3 w-3" /> : <IconCopy className="h-3 w-3" />}
        {copied ? "ок" : "copy"}
      </button>
      <pre className="overflow-x-auto px-4 py-3.5 font-mono text-[12.5px] leading-relaxed text-mist-300">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function SectionTitle({ num, children }: { num: string; children: ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-xs tracking-[0.14em] text-sea-400">{num}</span>
      <h3 className="font-display text-base font-semibold text-mist-100">{children}</h3>
    </div>
  );
}

const TREE = `flask-app/
├── app.py              # маршруты, валидация, серверная сортировка
├── csv_store.py        # CSV-хранилище: CRUD, блокировки, атомарная запись
├── requirements.txt    # Flask, validators, python-dotenv
├── Dockerfile          # python:3.11-slim, порт 5000
├── docker-compose.yml  # запуск + volume ./data:/app/data
├── data/               # сюда создаётся vpn_locations.csv
└── templates/
    ├── base.html       # Bootstrap 5, тёмная тема, flash-сообщения
    ├── list.html       # список: сортировка, копирование пароля
    └── form.html       # создание / редактирование`;

const LOCAL_RUN = `cd flask-app
python -m venv .venv
source .venv/bin/activate        # Windows: .venv\\Scripts\\activate
pip install -r requirements.txt
python app.py`;

const DOCKER_RUN = `docker build -t vpn-registry .
docker run -d --name vpn-registry -p 5000:5000 \\
  -v "$(pwd)/data:/app/data" vpn-registry`;

const COMPOSE_RUN = `docker compose up -d --build     # собрать и запустить
docker compose logs -f           # смотреть логи
docker compose down              # остановить`;

const HOW_IT_WORKS = [
  ["CRUD-маршруты", "GET / (список), GET/POST /create, GET/POST /edit/<id>, POST /delete/<id> — удаление только через POST, в интерфейсе подтверждение через JS confirm()."],
  ["CSV как БД", "data/vpn_locations.csv создаётся автоматически со всеми 16 заголовками. Запись потокобезопасна (RLock) и атомарна: временный файл + os.replace()."],
  ["Серверная сортировка", "Клик по заголовку ведёт на /?sort=<поле>&order=asc|desc; id, стоимость и день оплаты сортируются как числа, остальное — как строки."],
  ["Валидация", "Обязательные поля (хостер, ссылка, страна, система VPN), проверка URL пакетом validators, стоимость ≥ 0, день оплаты 1–31. Ошибки выводятся под полями."],
  ["JS-мелочи", "Клик по паролю копирует его через navigator.clipboard.writeText (с фолбэком), флаг страны подставляется при выборе из выпадающего списка."],
  ["Обработка ошибок", "Повреждённый CSV не роняет приложение — показывается flash-сообщение, пустые и несуществующие ID обрабатываются явно."],
];

const IMPROVEMENTS = [
  "Переехать с CSV на SQLite + SQLAlchemy — CSV оставить только для отладки.",
  "Аутентификация (Flask-Login) и шифрование серверных паролей в хранилище (Fernet из cryptography).",
  "Пагинация и полнотекстовый поиск на сервере вместо клиентского фильтра.",
  "Экспорт/импорт JSON и резервное копирование CSV по расписанию.",
  "Продакшен: gunicorn + nginx вторым сервисом в compose, multi-stage Dockerfile, тесты на pytest.",
];

export default function DocsPanel() {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="anim-rise">
        <h2 className="font-display text-xl font-semibold text-mist-100 sm:text-2xl">Запуск и описание</h2>
        <p className="mt-1.5 text-sm leading-relaxed text-mist-500">
          Всё, что нужно, чтобы поднять Flask-приложение у себя: локально, в Docker или через Compose.
          Этот сайт — интерактивное демо интерфейса; данные в нём живут в localStorage вашего браузера.
        </p>
      </div>

      <div className="anim-rise mt-8" style={{ animationDelay: "80ms" }}>
        <SectionTitle num="01">Структура проекта</SectionTitle>
        <CodeBlock code={TREE} />
      </div>

      <div className="anim-rise mt-8" style={{ animationDelay: "140ms" }}>
        <SectionTitle num="02">Локально</SectionTitle>
        <CodeBlock code={LOCAL_RUN} />
        <p className="mt-2 text-sm text-mist-500">
          Приложение откроется на <span className="font-mono text-sea-300">http://localhost:5000</span>. Порт
          меняется переменной <span className="font-mono text-mist-300">PORT</span>, путь к CSV —{" "}
          <span className="font-mono text-mist-300">CSV_PATH</span>.
        </p>
      </div>

      <div className="anim-rise mt-8" style={{ animationDelay: "200ms" }}>
        <SectionTitle num="03">Docker</SectionTitle>
        <CodeBlock code={DOCKER_RUN} />
      </div>

      <div className="anim-rise mt-8" style={{ animationDelay: "260ms" }}>
        <SectionTitle num="04">Docker Compose</SectionTitle>
        <CodeBlock code={COMPOSE_RUN} />
        <p className="mt-2 text-sm text-mist-500">
          CSV монтируется из <span className="font-mono text-mist-300">./data</span> — данные переживают
          пересоздание контейнера.
        </p>
      </div>

      <div className="anim-rise mt-10" style={{ animationDelay: "320ms" }}>
        <div className="flex items-center gap-2.5">
          <IconLayers className="h-4 w-4 text-sea-400" />
          <h3 className="font-display text-base font-semibold text-mist-100">Как это работает</h3>
        </div>
        <div className="mt-4 space-y-3">
          {HOW_IT_WORKS.map(([title, text]) => (
            <div
              key={title}
              className="rounded-md border border-abyss-700 bg-abyss-850/70 px-4 py-3 transition-colors hover:border-abyss-600"
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-sea-300">{title}</div>
              <p className="mt-1 text-sm leading-relaxed text-mist-500">{text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="anim-rise mt-10 mb-4" style={{ animationDelay: "380ms" }}>
        <div className="flex items-center gap-2.5">
          <IconShield className="h-4 w-4 text-ember-400" />
          <h3 className="font-display text-base font-semibold text-mist-100">Возможные улучшения</h3>
        </div>
        <ul className="mt-4 space-y-2.5">
          {IMPROVEMENTS.map((t) => (
            <li key={t} className="flex gap-3 text-sm leading-relaxed text-mist-500">
              <IconTerminal className="mt-0.5 h-4 w-4 shrink-0 text-ember-400/70" />
              {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

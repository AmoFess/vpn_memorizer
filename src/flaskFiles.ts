import appPy from "../flask-app/app.py?raw";
import csvStorePy from "../flask-app/csv_store.py?raw";
import baseHtml from "../flask-app/templates/base.html?raw";
import listHtml from "../flask-app/templates/list.html?raw";
import formHtml from "../flask-app/templates/form.html?raw";
import requirements from "../flask-app/requirements.txt?raw";
import dockerfile from "../flask-app/Dockerfile?raw";
import dockerignore from "../flask-app/.dockerignore?raw";
import composeYml from "../flask-app/docker-compose.yml?raw";
import readme from "../flask-app/README.md?raw";

export interface ProjectFile {
  path: string;
  lang: string;
  note: string;
  content: string;
}

/** Все файлы Flask-проекта (лежат в папке flask-app/ репозитория) */
export const PROJECT_FILES: ProjectFile[] = [
  { path: "app.py", lang: "python", note: "Flask-приложение: маршруты, валидация, серверная сортировка, справочники", content: appPy },
  { path: "csv_store.py", lang: "python", note: "CSV-хранилище: CRUD по id, блокировки, атомарная запись", content: csvStorePy },
  { path: "templates/base.html", lang: "jinja", note: "Базовый шаблон: Bootstrap 5, тёмная тема, flash-сообщения", content: baseHtml },
  { path: "templates/list.html", lang: "jinja", note: "Список: сортировка по заголовкам, копирование пароля, confirm-удаление", content: listHtml },
  { path: "templates/form.html", lang: "jinja", note: "Общая форма создания/редактирования, превью флага страны", content: formHtml },
  { path: "requirements.txt", lang: "text", note: "Зависимости Python", content: requirements },
  { path: "Dockerfile", lang: "docker", note: "Образ python:3.11-slim, порт 5000, volume для данных", content: dockerfile },
  { path: "docker-compose.yml", lang: "yaml", note: "Запуск одной командой, CSV монтируется с хоста", content: composeYml },
  { path: ".dockerignore", lang: "text", note: "Исключения для сборки образа", content: dockerignore },
  { path: "README.md", lang: "markdown", note: "Инструкции по запуску и описание работы", content: readme },
];

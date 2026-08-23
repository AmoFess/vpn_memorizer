# ---------------------------------------------------------------
# Менеджер VPN-локаций (Flask + CSV)
# Простой одноступенчатый образ на slim-версии Python.
# ---------------------------------------------------------------
FROM python:3.11-slim

# Не буферизуем вывод — логи видны сразу в docker logs
ENV PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    PORT=5000

WORKDIR /app

# Сначала зависимости — слой будет кешироваться,
# пока requirements.txt не изменится
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Затем код приложения
COPY . .

# Порт можно переопределить переменной окружения PORT
EXPOSE 5000

# Том для CSV: данные переживают пересоздание контейнера
VOLUME ["/app/data"]

CMD ["python", "app.py"]

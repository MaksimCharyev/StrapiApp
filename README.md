# Strapi 4 with Docker

Этот репозиторий содержит базовую настройку для запуска **Strapi 4** с использованием **Docker**. Проект использует `docker-compose` для управления контейнерами Strapi и PostgreSQL.

## Содержание

1. [Требования](#требования)
2. [Клонирование репозитория](#клонирование-репозитория)
3. [Настройка переменных окружения](#настройка-переменных-окружения)
4. [Запуск проекта](#запуск-проекта)
5. [Остановка проекта](#остановка-проекта)
6. [Использование локальной папки данных](#использование-локальной-папки)
7. [Дополнительные команды](#дополнительные-команды)
8. [Примечания](#примечания)

---

## Требования

Перед запуском проекта убедитесь, что у вас установлены следующие инструменты:

- **Docker**: [Скачать Docker](https://www.docker.com/products/docker-desktop)
- **Docker Compose**: Обычно входит в состав Docker Desktop.
- **Git**: Для клонирования репозитория.

---

## Клонирование репозитория

Чтобы начать работу, склонируйте этот репозиторий:

```bash
git clone https://github.com/MaksimCharyev/StrapiApp.git
cd StrapiApp
```

---

## Настройка переменных окружения

1. Скопируйте полученный .env файл в директорию app
---

## Запуск проекта

1. Убедитесь, что Docker запущен на вашей машине.

2. Запустите проект с помощью `docker-compose`:
   ```bash
   docker-compose up --build
   ```

   - Флаг `--build` гарантирует, что Docker пересоберёт образы при необходимости.

3. После завершения сборки, Strapi будет доступен по адресу:
   ```
   http://localhost:1337/admin
   ```

4. Готово

---

## Остановка проекта

Чтобы остановить проект, выполните:

```bash
docker-compose down
```

---

## Использование локальной папки

В этом проекте используется bind folder для хранения данных PostgreSQL. Директория ./data монтируется в контейнер базы данных, что позволяет сохранять данные локально.

---

## Дополнительные команды

### Просмотр логов

Чтобы просмотреть логи всех контейнеров:

```bash
docker-compose logs -f
```

### Выполнение команд внутри контейнера

Чтобы войти в контейнер Strapi:

```bash
docker exec -it strapi bash
```

### Установка новых зависимостей

Если вам нужно установить новые зависимости, выполните:

```bash
docker exec -it strapi npm install package-name
```

---

## Примечания

1. **Первый запуск может занять больше времени**, так как Docker должен скачать образы и собрать контейнеры.
2. Если вы измените код приложения, изменения автоматически отразятся в контейнере благодаря монтированию директории `./app`.
3. Убедитесь, что порт `1337` свободен на вашей машине. Если порт занят, измените его в файле `docker-compose.yml` и `.env`.
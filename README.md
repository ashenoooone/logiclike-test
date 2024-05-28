# LogicLike Test Project

## Технологии

Проект выполнен с использованием архитектуры Feature-Sliced Design (FSD) для обеспечения масштабируемости и модульности кода.

### Основные технологии, использованные в проекте:

- React
- TypeScript
- SCSS
- axios

## Функциональность

Страница имеет следующие функции:

1. **Динамическое получение списка курсов**:
   - Список курсов формируется динамически на основе данных, полученных от API по эндпоинту `GET https://logiclike.com/docs/courses.json`.
2. **Фильтрация курсов по темам (тегам)**:
   - Пользователь может выбрать тему из списка, и курсы будут отфильтрованы по выбранной теме.
3. **Адаптивный дизайн**:
   - Страница корректно отображается на разных разрешениях экрана, с фиксированной шириной блока тегов и адаптивным блоком курсов.

## Установка и запуск

Для локального запуска проекта выполните следующие шаги:

1. Клонируйте репозиторий:

   ```bash
   git clone https://github.com/ashenoooone/logiclike-test
   ```

2. Перейдите в директорию проекта:

   ```bash
   cd logiclike-test
   ```

3. Установите зависимости:

   ```bash
   npm install
   ```

4. Запустите проект:

   ```bash
   npm start
   ```

Проект будет доступен по адресу `http://localhost:5173`.

## Структура проекта

Проект организован согласно принципам FSD (Feature-Sliced Design). Основные директории включают:

- **src**:
  - **pages**: компоненты страниц.
  - **widgets**: крупные, автономные компоненты.
  - **entities**: бизнес-сущности.
  - **shared**: общие компоненты и утилиты.

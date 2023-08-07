# Directory Service Manager App

## 👷 Установка

Проект успешно запускается в следующем окружении: node **v18.16.0**, yarn **v1.22.19**

Установка yarn: `npm install --global yarn`

Установка зависимостей

```
yarn
```

## 🚀 Запуск

Запуск проекта в development режиме

```
yarn local
```

При необходимости можно поднять каждый сервис отдельно:

* `yarn local` - Запуск веб-приложения и MOCK сервера
* `yarn start` - Запуск веб-приложения
* `yarn start:server` - Запуск MOCK сервера
* `yarn test` - Запуск юнит тестов
* `yarn lint` - Запуск eslint с автоматическим исправлением

## 🏗 Сборка

```
yarn build
```

## ⚙️ Разработка

- [Workflow разработки](documentation/docs/workflow.md)
- [Правила наименования](documentation/docs/name-rules.md)

## 📑 Заметки

- [Типовая структура проектов](documentation/docs/structure.md)
- [Паттерны написания кода](documentation/docs/code-style.md)
- [Правила для стилевых файлов](documentation/docs/css-code-style.md)
- [Eslint в наших проектах](documentation/docs/eslint.md)
- [Code review](documentation/docs/code-review.md)

### Работа с моками

В проекте есть папка `server`, собственно это и есть mock server
Он написан на node.js



# 📅 Исторические даты

Одностраничное приложение с интерактивной временной шкалой: периоды (Кино, Семья, Культура, Наука, IT, Будущее человечества) с датами и описаниями.

## 🛠️ Стек

- **React 18** + **TypeScript**
- **styled-components** — стили и темизация
- **GSAP** (@gsap/react) — анимации
- **Swiper** — слайдеры
- **Craco** — конфигурация (алиасы путей `@/`)
- **polished**, **react-countup**

## 📋 Требования

- Node.js (см. `.nvmrc`, рекомендуется v22.7.0)
- Yarn 4.x

## 📦 Установка

```bash
yarn install
```

## ▶️ Скрипты

| Команда | Описание |
|--------|----------|
| `yarn start` | Запуск в режиме разработки ([http://localhost:3000](http://localhost:3000)) |
| `yarn build` | Сборка для production в папку `build` |
| `yarn test` | Запуск тестов в watch-режиме |
| `yarn deploy` | Деплой сборки на GitHub Pages |

## 📁 Структура проекта

```
├── api/              # Типы и данные временной шкалы
├── components/       # Компоненты
│   ├── DynamicCircle/
│   ├── Slider/       # MainSwiper, InnerSwiper
│   ├── Timelapse/
│   └── layouts/      # Container, Flexbox
├── hooks/
├── src/              # Точка входа, App
├── theme/            # Тема, глобальные стили, миксины, анимации
└── public/
```

## 🚀 Деплой

Сборка публикуется на GitHub Pages при пуше в ветку `master` (GitHub Actions, workflow в `.github/workflows/deploy.yml`).

## 💡 Примечание

`yarn eject` — необратимая операция, выносит конфигурацию CRA в проект. Для кастомизации сборки используется Craco.

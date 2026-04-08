# TrustedWidget Guide

Документационный сайт по установке, конфигурации и стилизации `trusted-widget`.

## Стек

- React + TypeScript + Vite
- MUI + `@mui/icons-material`
- React Router
- Playwright для smoke e2e

## Локальный запуск

```sh
npm install
npm run dev
```

## Проверки

```sh
npm run lint
npm run build
npm run test
```

## Деплой в GitHub Pages

Проект собирается с `base: /auth-widget-guide/` и публикуется как SPA в GitHub Pages.

```sh
npm run deploy
```

Во время сборки `dist/index.html` копируется в `dist/404.html`, чтобы прямые переходы на вложенные роуты корректно восстанавливались в GitHub Pages.

## Маршруты

- `/` — старт и установка
- `/configuration` — конфигурация TrustedWidget
- `/styling-and-integration` — стилизация, SSO и ресурсы

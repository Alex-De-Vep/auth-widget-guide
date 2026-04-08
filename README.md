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

Автодеплой настроен через workflow [`.github/workflows/deploy-pages.yml`](/Users/alex/Projects/vscode/auth-widget-guide/.github/workflows/deploy-pages.yml): он запускается при каждом push в `master` и его можно стартовать вручную через `workflow_dispatch`.

Во время сборки `dist/index.html` копируется в `dist/404.html`, чтобы прямые переходы на вложенные роуты корректно восстанавливались в GitHub Pages.

Если у репозитория ещё не переключён источник публикации, откройте `Settings -> Pages` и установите `Source: GitHub Actions`.

Если в репозитории уже существует environment `github-pages` с branch protection rules, текущий workflow использует отдельное environment `pages-production`, чтобы деплой из `master` не блокировался этими ограничениями.

## Маршруты

- `/` — старт и установка
- `/configuration` — конфигурация TrustedWidget
- `/styling-and-integration` — стилизация, SSO и ресурсы

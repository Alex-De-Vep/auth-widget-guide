# Руководство по установке и настройке TrustedWidget

## Установка на клиенте (UI)

```bash
npm install trusted-widget
# или
yarn add trusted-widget
```

## Конфигурация TrustedWidget

### Параметры конфигурации

#### Обязательные параметры

| Параметр      | Тип      | Описание                                      | Пример                          |
| ------------- | -------- | --------------------------------------------- | ------------------------------- |
| `appId`       | `string` | Уникальный идентификатор приложения в Trusted | `"MTnOOTdx85FgNbOFy2nUsH"`      |
| `redirectUrl` | `string` | URL для перенаправления после авторизации     | `"http://localhost:3000/login"` |

#### Необязательные параметры

| Параметр              | Тип                   | Описание                                   | Значение по умолчанию         |
| --------------------- | --------------------- | ------------------------------------------ | ----------------------------- |
| `issuer`              | `string`              | URL Trusted SSO сервера                    | `"https://id.kloud.one"`      |
| `withOutHomePage`     | `boolean`             | Автоматический редирект на авторизацию     | `false`                       |
| `getTokenEndPoint`    | `string`              | Endpoint для получения токена              | `"/auth/token"`               |
| `getUserInfoEndPoint` | `string`              | Endpoint для получения данных пользователя | `"/auth/me"`                  |
| `scopes`              | `string[]`            | OAuth2 разрешения                          | `["openid", "lk", "profile"]` |
| `profile`             | `IProfileConfig`      | Настройки профиля пользователя             | См. раздел ниже               |
| `loginButton`         | `ICustomMenuButton`   | Настройки кнопки входа                     | См. раздел ниже               |
| `menuButtons`         | `ICustomMenuButton[]` | Массив дополнительных кнопок               | См. раздел ниже               |
| `customStyles`        | `ICustomStyles`       | Глобальные стили виджета                   | См. раздел ниже               |

```typescript
import { TrustedWidget, TrustedWidgetConfig } from "trusted-widget";

const newConfig: TrustedWidgetConfig = {
  appId: "MTnOOTdx85FgNbOFy2nUsH",
  redirectUrl: "http://localhost:3000/login",
  issuer: "https://id.kloud.one",
  withOutHomePage: false,
  getTokenEndPoint: "/auth/token",
  getUserInfoEndPoint: "/auth/me",
};

// Использование компонента
<TrustedWidget config={newConfig} />;
```

### Настройки профиля пользователя (profile)

#### Параметры конфигурации профиля

| Параметр     | Тип                | Описание                                         | Значение по умолчанию |
| ------------ | ------------------ | ------------------------------------------------ | --------------------- |
| `isHideText` | `boolean`          | Скрыть отображение имени пользователя            | `false`               |
| `wrapper`    | `IComponentStyles` | Стили контейнера профиля (только цвета)          | См. раздел стилей     |
| `button`     | `IComponentStyles` | Стили кнопки-аватара пользователя (только цвета) | См. раздел стилей     |

> ⚠️ **Важно:** Для настроек профиля (`profile.wrapper` и `profile.button`) можно изменять только цвета (`color.text`, `color.background`, `color.hover`) и скрывать имя пользователя (`isHideText`). Другие параметры стилизации (такие как `borderRadius`, `padding`, `position`) не применяются к профилю.

#### Пример настройки профиля

```typescript
const config: TrustedWidgetConfig = {
  appId: "MTnOOTdx85FgNbOFy2nUsH",
  redirectUrl: "http://localhost:3000/login",
  // Только аватар без текста
  profile: {
    isHideText: true, // Скрыть имя пользователя
  },
};
```

### Настройки кнопки входа (loginButton)

#### Параметры кнопки входа

| Параметр       | Тип                            | Описание                                | Значение по умолчанию |
| -------------- | ------------------------------ | --------------------------------------- | --------------------- |
| `text`         | `string`                       | Текст кнопки входа                      | `"Войти"`             |
| `type`         | `string`                       | Тип кнопки                              | `"login"`             |
| `icon`         | `string \| React.ReactElement` | Ссылка на изображение или React элемент | `null`                |
| `customStyles` | `IComponentStyles`             | Индивидуальные стили для кнопки         | См. раздел стилей     |

#### Пример настройки кнопки входа

```typescript
const config: TrustedWidgetConfig = {
  appId: "MTnOOTdx85FgNbOFy2nUsH",
  redirectUrl: "http://localhost:3000/login",
  // Настройки кнопки для неавторизованных пользователей
  loginButton: {
    text: "Войти через Trusted",
    type: "login",
    icon: "https://id.kloud.one/favicon.ico", // Пользовательская иконка
  },
};
```

#### Пример кнопки входа без иконки

```typescript
const config: TrustedWidgetConfig = {
  appId: "MTnOOTdx85FgNbOFy2nUsH",
  redirectUrl: "http://localhost:3000/login",
  // Простая кнопка только с текстом
  loginButton: {
    text: "Войти",
    type: "login",
    customStyles: {
      isHideIcon: true, // Скрыть иконку
    },
  },
};
```

### Параметры кнопок меню (menuButtons)

#### Обязательные параметры для menuButtons

| Параметр | Тип      | Описание                        | Пример               |
| -------- | -------- | ------------------------------- | -------------------- |
| `text`   | `string` | Отображаемое название кнопки    | `"TestService"`      |
| `link`   | `string` | Ссылка на страницу для перехода | `"https://test.com"` |

#### Необязательные параметры для menuButtons

| Параметр       | Тип                            | Описание                                | Значение по умолчанию |
| -------------- | ------------------------------ | --------------------------------------- | --------------------- |
| `icon`         | `string \| React.ReactElement` | Ссылка на изображение или React элемент | `null`                |
| `customStyles` | `IComponentStyles`             | Индивидуальные стили для кнопки         | См. раздел стилей     |

### Пример конфигурации

```typescript
import { TrustedWidget, TrustedWidgetConfig } from "trusted-widget";

const newConfig: TrustedWidgetConfig = {
  appId: "MTnOOTdx85FgNbOFy2nUsH",
  redirectUrl: "http://localhost:3000/login",
  menuButtons: [
    {
      text: "TestService",
      link: "https://test.com",
      icon: "https://image.png", // | <Icon />
    },
  ],
};
```

## Система стилизации виджета

В объекте `TrustedWidgetConfig` можно задать внешний вид всех элементов виджета через свойство `customStyles`. Это позволяет гибко управлять цветами, скруглением и выравниванием контента без необходимости менять код компонентов.

#### Настройка внешнего вида

| Параметр       | Тип             | Описание                        |
| -------------- | --------------- | ------------------------------- |
| `customStyles` | `ICustomStyles` | Объект стилизации всего виджета |

### Параметры кастомных стилей (customStyles)

#### Глобальные стили

| Параметр              | Тип                | Описание                            | Пример   |
| --------------------- | ------------------ | ----------------------------------- | -------- |
| `global.borderRadius` | `string`           | Скругление углов для всех элементов | `"12px"` |
| `global.color`        | `IComponentStyles` | Глобальные цвета                    | См. ниже |

#### Стили компонентов

| Параметр                     | Тип                | Описание                    | Назначение                |
| ---------------------------- | ------------------ | --------------------------- | ------------------------- |
| `components.primaryButton`   | `IComponentStyles` | Стиль основной кнопки       | Кнопка "Войти", "Профиль" |
| `components.secondaryButton` | `IComponentStyles` | Стиль второстепенной кнопки | Кнопка "Выход"            |
| `components.accountButton`   | `IComponentStyles` | Стиль кнопок меню аккаунта  | Кнопки в выпадающем меню  |

#### Параметры IComponentStyles

| Параметр           | Тип                  | Описание                       | Пример       |
| ------------------ | -------------------- | ------------------------------ | ------------ |
| `color.text`       | `string`             | Цвет текста и иконки (HEX)     | `"#ffffff"`  |
| `color.background` | `string`             | Цвет фона (HEX)                | `"#1976d2"`  |
| `color.hover`      | `string`             | Цвет фона при наведении (HEX)  | `"#1565c0"`  |
| `borderRadius`     | `string`             | Скругление углов элемента      | `"8px"`      |
| `padding`          | `string`             | Внутренние отступы             | `"8px 16px"` |
| `position`         | `"left" \| "center"` | Выравнивание контента в кнопке | `"center"`   |
| `isHideIcon`       | `boolean`            | Скрыть иконку в кнопке         | `false`      |

### Наследование стилей secondaryButton

Виджет имеет умную систему наследования стилей для кнопки `secondaryButton`:

- **Если заданы стили только для `primaryButton`**, то они автоматически применяются и к `secondaryButton`, но с большей прозрачностью (через уменьшение opacity).
- **Если заданы отдельные стили для `secondaryButton`**, то прозрачность применяться не будет — используются только явно указанные параметры.

### Пример конфигурации стилей

#### Пример настройки глобальных стилей

```typescript
const config: TrustedWidgetConfig = {
  appId: "MTnOOTdx85FgNbOFy2nUsH",
  redirectUrl: "http://localhost:3000/login",
  // Дефолтные значения для глобальных стилей
  customStyles: {
    global: {
      color: {
        text: "#666666",
        background: "#ffffff",
      },
      borderRadius: "8px",
    },
    components: {
      accountButton: {
        color: {
          text: "#fff",
          background: "#efefef",
          hover: undefined, // если не задан применяется filter: brightness(90%)
        },
        position: "left",
        isHideIcon: false,
      },
      primaryButton: {
        color: {
          text: "#ffffff",
          background: "#b5262f",
          hover: undefined, // если не задан применяется filter: brightness(90%)
        },
        position: "left",
        isHideIcon: false,
      },
      // secondaryButton не задан — будет использоваться стиль primaryButton с прозрачностью (opacity:0.5)
    },
  },
};
```

#### Полная конфигурация с профилем

```typescript
const config: TrustedWidgetConfig = {
  appId: "MTnOOTdx85FgNbOFy2nUsH",
  redirectUrl: "http://localhost:3000/login",
  // Настройки профиля
  profile: {
    isHideText: false,
    wrapper: {
      color: {
        text: "#333333",
        background: "#f8f9fa",
      },
    },
    button: {
      color: {
        text: "#333333",
        background: "transparent",
        hover: "rgba(0, 0, 0, 0.08)",
      },
    },
  },
};
```

#### Полная конфигурация с кнопкой входа

```typescript
const config: TrustedWidgetConfig = {
  appId: "MTnOOTdx85FgNbOFy2nUsH",
  redirectUrl: "http://localhost:3000/login",
  // Кнопка входа с иконкой
  loginButton: {
    text: "Войти",
    type: "login",
    icon: "https://id.kloud.one/favicon.ico",
    customStyles: {
      color: {
        text: "#ffffff",
        background: "#4CAF50",
        hover: "#45a049",
      },
      borderRadius: "8px",
      padding: "10px 20px",
    },
  },
};
```

### Пример полной конфигурации стилей с явным заданием secondaryButton

#### Полная конфигурация с глобальными стилями и меню

```typescript
const config: TrustedWidgetConfig = {
  appId: "MTnOOTdx85FgNbOFy2nUsH",
  redirectUrl: "http://localhost:3000/login",
  // Глобальные стили
  customStyles: {
    global: {
      borderRadius: "8px",
    },
    components: {
      primaryButton: {
        color: {
          text: "#ffffff",
          background: "#4CAF50",
          hover: "#45a049",
        },
        position: "center",
        isHideIcon: false,
      },
      secondaryButton: {
        color: {
          text: "#4CAF50",
          background: "transparent",
          hover: "#f1f8e9",
        },
        position: "center",
        isHideIcon: false,
      },
      accountButton: {
        color: {
          text: "#333333",
          background: "#ffffff",
          hover: "#f5f5f5",
        },
        position: "left",
        isHideIcon: false,
      },
    },
  },
};
```

## Индивидуальная стилизация кнопок меню

Для каждой кнопки в `menuButtons` можно задать индивидуальные стили через свойство `customStyles` типа `IComponentStyles`.

#### Пример с индивидуальными стилями для кнопок

```typescript
const config: TrustedWidgetConfig = {
  appId: "MTnOOTdx85FgNbOFy2nUsH",
  redirectUrl: "http://localhost:3000/login",
  menuButtons: [
    {
      text: "Личный кабинет",
      link: "https://my-account.com",
      icon: "https://icons.com/profile.png",
      customStyles: {
        color: {
          text: "#ffffff",
          background: "#4CAF50", // Зеленый фон
          hover: "#45a049", // Темно-зеленый при наведении
        },
        borderRadius: "8px",
        padding: "8px 16px",
        position: "center",
      },
    },
    {
      text: "Настройки",
      link: "https://settings.com",
      icon: "https://icons.com/settings.png",
      customStyles: {
        color: {
          text: "#333333",
          background: "#f5f5f5", // Светло-серый фон
          hover: "#e0e0e0", // Серый при наведении
        },
        borderRadius: "6px",
        padding: "6px 12px",
        position: "left",
      },
    },
    {
      text: "Поддержка",
      link: "https://support.com",
      customStyles: {
        color: {
          text: "#ffffff",
          background: "#FF5722", // Оранжевый фон
          hover: "#E64A19", // Темно-оранжевый при наведении
        },
        borderRadius: "4px",
        padding: "10px 20px",
        position: "center",
        isHideIcon: true, // Скрыть иконку для этой кнопки
      },
    },
  ],
};
```

#### Приоритет применения стилей

1. **Индивидуальные стили кнопки** (`customStyles` в объекте кнопки) — высший приоритет
2. **Стили accountButton** (`customStyles.components.accountButton`) — если не заданы индивидуальные
3. **Дефолтные стили** — если не заданы предыдущие

```typescript
const config: TrustedWidgetConfig = {
  appId: "MTnOOTdx85FgNbOFy2nUsH",
  redirectUrl: "http://localhost:3000/login",
  // Если у кнопки НЕТ customStyles, то для menuButtons применяются стили accountButton
  customStyles: {
    components: {
      // дефолтные стили accountButton
      accountButton: {
        color: {
          text: "#666666",
          background: "#efefef",
          hover: undefined, // если не задан применяется filter: brightness(90%)
        },
        position: "left",
      },
    },
  },
};
```

### Итоговое поведение системы стилизации

1. **Централизованное управление** — все стили задаются через `customStyles`, `profile` и `loginButton`
2. **Гибкая настройка профиля** — через `profile.wrapper` и `profile.button` можно настроить внешний вид авторизованного пользователя
3. **Настройка кнопки входа** — через `loginButton.customStyles` можно настроить стили кнопки для неавторизованных пользователей
4. **Глобальное скругление** — `borderRadius` применяется ко всем элементам виджета (модальное окно, кнопки)
5. **Управление отображением** — флаги `isHideText` и `isHideIcon` позволяют скрывать текст и иконки
6. **Умное наследование** — если не заданы стили `secondaryButton`, используются стили `primaryButton` с прозрачностью. Если не задан цвет `hover` используется стиль `filter: brightness(90%)`
7. **Индивидуальная кастомизация** — для каждой кнопки меню можно задать индивидуальные стили через `customStyles`
8. **Fallback система** — если индивидуальные стили не заданы для `menuButtons`, применяются стили `accountButton`
9. **Гибкое выравнивание** — контент в кнопках настраивается через свойство `position` (`"left"` | `"center"`)
10. **Структура цветов** — все цвета теперь организованы в объекте `color` с подсвойствами `text`, `background`, `hover`

## Настройки в сервисе SSO

Измените необходимые настройки в SSO для подключения входа через виджет:

### Параметры аутентификации

1. **Метод аутентификации клиента для конечной точки получения токена** (`token_endpoint_auth_method`) → **none**

2. **Метод аутентификации, используемый при доступе к конечной точке проверки токена** (`introspection_endpoint_auth_method`) → **none**

3. **Метод аутентификации, используемый при доступе к конечной точке отзыва токенов** (`revocation_endpoint_auth_method`) → **none**

### Возвратный URL

**Возвратный URL** (`redirect_uris`) - укажите на вашу дефолтную страницу авторизации:

```
http://localhost:3000/login
```

> ⚠️ **Важно:** Параметр `redirectUrl` в коде конфигурации и `redirect_uris` в настройках SSO должны быть одинаковыми.

---

## Дополнительные ресурсы

- [README.md](./README.md) - документация разворачивания

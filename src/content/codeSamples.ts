export const installSnippet = String.raw`npm install trusted-widget
# или
yarn add trusted-widget`;

export const baseConfigSnippet = String.raw`import { TrustedWidget, TrustedWidgetConfig } from "trusted-widget";

const newConfig: TrustedWidgetConfig = {
  appId: "MTnOOTdx85FgNbOFy2nUsH",
  redirectUrl: "http://localhost:3000/login",
  issuer: "https://id.kloud.one",
  withOutHomePage: false,
  getTokenEndPoint: "/auth/token",
  getUserInfoEndPoint: "/auth/me",
};

// Использование компонента
<TrustedWidget config={newConfig} />;`;

export const profileConfigSnippet = String.raw`const config: TrustedWidgetConfig = {
  appId: "MTnOOTdx85FgNbOFy2nUsH",
  redirectUrl: "http://localhost:3000/login",
  // Только аватар без текста
  profile: {
    isHideText: true, // Скрыть имя пользователя
  },
};`;

export const loginButtonSnippet = String.raw`const config: TrustedWidgetConfig = {
  appId: "MTnOOTdx85FgNbOFy2nUsH",
  redirectUrl: "http://localhost:3000/login",
  // Настройки кнопки для неавторизованных пользователей
  loginButton: {
    text: "Войти через Trusted",
    type: "login",
    icon: "https://id.kloud.one/favicon.ico", // Пользовательская иконка
  },
};`;

export const loginButtonNoIconSnippet = String.raw`const config: TrustedWidgetConfig = {
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
};`;

export const menuButtonsSnippet = String.raw`import { TrustedWidget, TrustedWidgetConfig } from "trusted-widget";

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
};`;

export const globalStylesSnippet = String.raw`const config: TrustedWidgetConfig = {
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
};`;

export const fullProfileSnippet = String.raw`const config: TrustedWidgetConfig = {
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
};`;

export const fullLoginButtonSnippet = String.raw`const config: TrustedWidgetConfig = {
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
};`;

export const secondaryButtonSnippet = String.raw`const config: TrustedWidgetConfig = {
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
};`;

export const menuButtonStylesSnippet = String.raw`const config: TrustedWidgetConfig = {
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
};`;

export const menuButtonsPrioritySnippet = String.raw`const config: TrustedWidgetConfig = {
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
};`;

export const redirectUrisSnippet = String.raw`http://localhost:3000/login`;

export const frontendLocalPackageSnippet = String.raw`{
  "dependencies": {
    "trusted-widget": "file:./vendor/trusted-widget"
  }
}`;

export const frontendTrustedWidgetSnippet = String.raw`const config: TrustedWidgetConfig = {
  appId: appId,
  redirectUrl: redirectUrl,
  issuer: env.trustedWidgetIssuer,
  withOutHomePage: !currentUser,
  customRoute: (token) => {
    handleTokenSync(token);
  },
  scopes: ['email'],
  logoutButtonFn: handleLogout,
  loginButton: {
    text: 'Войти через SSO',
  },
};

<TrustedWidget config={config} />;`;

export const frontendTokenSyncSnippet = String.raw`async function handleTokenSync(accessToken: string) {
  await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ accessToken }),
  });
}`;

export const backendSsoProfileSnippet = String.raw`GET {SSO_BASE_URL}/oidc/me

Authorization: Bearer <accessToken>
Accept: application/json`;

export const oidClientSnippet = String.raw`import { UserManager } from 'oidc-client-ts';

const userManager = new UserManager({
  authority: env.trustedWidgetIssuer,
  client_id: appId,
  redirect_uri: redirectUrl,
  response_type: 'code',
  scope: 'openid email profile',
});

const user = await userManager.signinRedirectCallback();
const profile = user.profile;`;

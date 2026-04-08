import ArticleRounded from '@mui/icons-material/ArticleRounded';
import AutoAwesomeRounded from '@mui/icons-material/AutoAwesomeRounded';
import DnsRounded from '@mui/icons-material/DnsRounded';
import HomeRounded from '@mui/icons-material/HomeRounded';
import LoginRounded from '@mui/icons-material/LoginRounded';
import PaletteRounded from '@mui/icons-material/PaletteRounded';
import SettingsRounded from '@mui/icons-material/SettingsRounded';
import ShieldRounded from '@mui/icons-material/ShieldRounded';
import TerminalRounded from '@mui/icons-material/TerminalRounded';
import TuneRounded from '@mui/icons-material/TuneRounded';
import ViewListRounded from '@mui/icons-material/ViewListRounded';
import type { SvgIconComponent } from '@mui/icons-material';

export type DocRoute = {
	path: string;
	title: string;
	description: string;
	icon: SvgIconComponent;
	accent: string;
};

export type DocSection = {
	id: string;
	title: string;
	description: string;
	icon: SvgIconComponent;
};

export const docsRoutes: readonly DocRoute[] = [
	{
		path: '/',
		title: 'Старт',
		description: 'Обзор документации и выбор стартового сценария интеграции.',
		icon: HomeRounded,
		accent: '#0E3A5F'
	},
	{
		path: '/frontend-start',
		title: 'Старт для frontend',
		description: 'Полный сценарий интеграции Trusted Widget между frontend и backend.',
		icon: LoginRounded,
		accent: '#A64932'
	},
	{
		path: '/backend-start',
		title: 'Старт для backend',
		description: 'Упрощённый oid-client сценарий и вывод информации о пользователе.',
		icon: DnsRounded,
		accent: '#2A7F62'
	},
	{
		path: '/configuration',
		title: 'Конфигурация',
		description: 'Параметры TrustedWidget, profile, loginButton и menuButtons.',
		icon: SettingsRounded,
		accent: '#D66A4E'
	},
	{
		path: '/styling-and-integration',
		title: 'Стилизация и интеграция',
		description: 'customStyles, SSO-настройки, приоритеты и ресурсы.',
		icon: PaletteRounded,
		accent: '#2A7F62'
	}
] as const;

export const homeSections: readonly DocSection[] = [
	{
		id: 'start-variants',
		title: 'Стартовые сценарии',
		description: 'Две отдельные ветки документации для разных способов запуска интеграции.',
		icon: LoginRounded
	},
	{
		id: 'doc-map',
		title: 'Карта документации',
		description: 'Как теперь разложены обзор, стартовые сценарии и прикладные разделы.',
		icon: ArticleRounded
	},
	{
		id: 'workflow',
		title: 'Что открыть дальше',
		description: 'Какие страницы использовать после выбора стартового сценария.',
		icon: AutoAwesomeRounded
	}
] as const;

export const frontendStartSections: readonly DocSection[] = [
	{
		id: 'sso-setup',
		title: 'Подготовка SSO',
		description: 'Какие параметры заранее перевести в значение none.',
		icon: ShieldRounded
	},
	{
		id: 'integration-summary',
		title: 'Что уже сделано',
		description: 'Краткий обзор полной интеграции между frontend, widget и backend.',
		icon: AutoAwesomeRounded
	},
	{
		id: 'frontend-work',
		title: 'Что сделано во frontend',
		description: 'Локальный пакет, TrustedWidgetConfig и синхронизация токена.',
		icon: TerminalRounded
	},
	{
		id: 'backend-work',
		title: 'Что сделано в backend',
		description: 'Auth API, запрос профиля в SSO и серверная сессия.',
		icon: DnsRounded
	},
	{
		id: 'auth-flow',
		title: 'Полный сценарий авторизации',
		description: 'Что происходит от открытия сервиса до создания сессии.',
		icon: LoginRounded
	}
] as const;

export const backendStartSections: readonly DocSection[] = [
	{
		id: 'when-to-use',
		title: 'Когда выбирать этот вариант',
		description: 'Для каких задач подходит упрощённый сценарий через oid-client.',
		icon: ArticleRounded
	},
	{
		id: 'oid-client-flow',
		title: 'Базовая схема через oid-client',
		description: 'Как построить авторизацию без полного backend sync-пайплайна.',
		icon: LoginRounded
	},
	{
		id: 'profile-data',
		title: 'Какие данные получать',
		description: 'Минимальный профиль пользователя, который стоит выводить в интерфейс.',
		icon: ShieldRounded
	},
	{
		id: 'widget-output',
		title: 'Вывод информации в виджет',
		description: 'Как показать статус входа и базовые пользовательские данные.',
		icon: ViewListRounded
	},
	{
		id: 'differences',
		title: 'Чем отличается от полного сценария',
		description: 'Когда нужен backend sync, а когда можно остаться на oid-client.',
		icon: TuneRounded
	}
] as const;

export const configurationSections: readonly DocSection[] = [
	{
		id: 'base-configuration',
		title: 'Базовая конфигурация',
		description: 'Обязательные и необязательные параметры TrustedWidgetConfig.',
		icon: TuneRounded
	},
	{
		id: 'profile',
		title: 'Профиль пользователя',
		description: 'Тонкая настройка profile, wrapper и avatar button.',
		icon: ShieldRounded
	},
	{
		id: 'login-button',
		title: 'Кнопка входа',
		description: 'Опции loginButton и варианты отображения иконки.',
		icon: HomeRounded
	},
	{
		id: 'menu-buttons',
		title: 'Кнопки меню',
		description: 'Настройка menuButtons и примеры кастомных ссылок.',
		icon: ViewListRounded
	}
] as const;

export const stylingSections: readonly DocSection[] = [
	{
		id: 'custom-styles',
		title: 'Система customStyles',
		description: 'Глобальные стили, стили компонентов и структура IComponentStyles.',
		icon: PaletteRounded
	},
	{
		id: 'style-recipes',
		title: 'Рецепты стилизации',
		description: 'Примеры полных конфигураций и наследование secondaryButton.',
		icon: AutoAwesomeRounded
	},
	{
		id: 'menu-button-overrides',
		title: 'Кастомизация menuButtons',
		description: 'Индивидуальные стили, приоритеты и fallback-поведение.',
		icon: ViewListRounded
	},
	{
		id: 'sso',
		title: 'Интеграция с SSO',
		description: 'Параметры auth method и требования к redirect_uris.',
		icon: ShieldRounded
	},
	{
		id: 'resources',
		title: 'Дополнительные ресурсы',
		description: 'Что ещё проверить перед публикацией и передачей в команду.',
		icon: ArticleRounded
	}
] as const;

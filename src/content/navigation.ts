import ArticleRounded from '@mui/icons-material/ArticleRounded';
import AutoAwesomeRounded from '@mui/icons-material/AutoAwesomeRounded';
import HomeRounded from '@mui/icons-material/HomeRounded';
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
		description: 'Быстрый запуск, установка и обзор структуры документации.',
		icon: HomeRounded,
		accent: '#0E3A5F'
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
		id: 'quickstart',
		title: 'Быстрый старт',
		description: 'Установка пакета и стартовая точка для подключения виджета.',
		icon: TerminalRounded
	},
	{
		id: 'doc-map',
		title: 'Карта документации',
		description: 'Какие части руководства перенесены на отдельные страницы.',
		icon: ArticleRounded
	},
	{
		id: 'workflow',
		title: 'Рабочий сценарий',
		description: 'Рекомендуемая последовательность настройки для интеграции.',
		icon: AutoAwesomeRounded
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

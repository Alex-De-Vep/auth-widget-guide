import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { CodeBlock } from '../components/CodeBlock';
import { DocAlert } from '../components/DocAlert';
import { DocSection } from '../components/DocSection';
import { DocTable } from '../components/DocTable';
import { InlineCode } from '../components/InlineCode';
import { PageHeader } from '../components/PageHeader';
import {
	baseConfigSnippet,
	loginButtonNoIconSnippet,
	loginButtonSnippet,
	menuButtonsSnippet,
	profileConfigSnippet
} from '../content/codeSamples';
import { configurationSections } from '../content/navigation';

const parameterColumns = [
	{ key: 'parameter', label: 'Параметр', width: '18%' },
	{ key: 'type', label: 'Тип', width: '18%' },
	{ key: 'description', label: 'Описание' },
	{ key: 'example', label: 'Пример', width: '24%' }
] as const;

const defaultColumns = [
	{ key: 'parameter', label: 'Параметр', width: '20%' },
	{ key: 'type', label: 'Тип', width: '18%' },
	{ key: 'description', label: 'Описание' },
	{ key: 'defaultValue', label: 'Значение по умолчанию', width: '24%' }
] as const;

const requiredRows = [
	{
		parameter: <InlineCode>appId</InlineCode>,
		type: <InlineCode>string</InlineCode>,
		description: 'Уникальный идентификатор приложения в Trusted.',
		example: <InlineCode>"MTnOOTdx85FgNbOFy2nUsH"</InlineCode>
	},
	{
		parameter: <InlineCode>redirectUrl</InlineCode>,
		type: <InlineCode>string</InlineCode>,
		description: 'URL для перенаправления после авторизации.',
		example: <InlineCode>"http://localhost:3000/login"</InlineCode>
	}
];

const optionalRows = [
	{
		parameter: <InlineCode>issuer</InlineCode>,
		type: <InlineCode>string</InlineCode>,
		description: 'URL Trusted SSO сервера.',
		defaultValue: <InlineCode>"https://id.kloud.one"</InlineCode>
	},
	{
		parameter: <InlineCode>withOutHomePage</InlineCode>,
		type: <InlineCode>boolean</InlineCode>,
		description: 'Автоматический редирект на авторизацию.',
		defaultValue: <InlineCode>false</InlineCode>
	},
	{
		parameter: <InlineCode>getTokenEndPoint</InlineCode>,
		type: <InlineCode>string</InlineCode>,
		description: 'Endpoint для получения токена.',
		defaultValue: <InlineCode>"/auth/token"</InlineCode>
	},
	{
		parameter: <InlineCode>getUserInfoEndPoint</InlineCode>,
		type: <InlineCode>string</InlineCode>,
		description: 'Endpoint для получения данных пользователя.',
		defaultValue: <InlineCode>"/auth/me"</InlineCode>
	},
	{
		parameter: <InlineCode>scopes</InlineCode>,
		type: <InlineCode>string[]</InlineCode>,
		description: 'OAuth2 разрешения.',
		defaultValue: <InlineCode>["openid", "lk", "profile"]</InlineCode>
	},
	{
		parameter: <InlineCode>profile</InlineCode>,
		type: <InlineCode>IProfileConfig</InlineCode>,
		description: 'Настройки профиля пользователя.',
		defaultValue: 'См. раздел ниже'
	},
	{
		parameter: <InlineCode>loginButton</InlineCode>,
		type: <InlineCode>ICustomMenuButton</InlineCode>,
		description: 'Настройки кнопки входа.',
		defaultValue: 'См. раздел ниже'
	},
	{
		parameter: <InlineCode>menuButtons</InlineCode>,
		type: <InlineCode>ICustomMenuButton[]</InlineCode>,
		description: 'Массив дополнительных кнопок.',
		defaultValue: 'См. раздел ниже'
	},
	{
		parameter: <InlineCode>customStyles</InlineCode>,
		type: <InlineCode>ICustomStyles</InlineCode>,
		description: 'Глобальные стили виджета.',
		defaultValue: 'См. страницу стилизации'
	}
];

const profileRows = [
	{
		parameter: <InlineCode>isHideText</InlineCode>,
		type: <InlineCode>boolean</InlineCode>,
		description: 'Скрыть отображение имени пользователя.',
		defaultValue: <InlineCode>false</InlineCode>
	},
	{
		parameter: <InlineCode>wrapper</InlineCode>,
		type: <InlineCode>IComponentStyles</InlineCode>,
		description: 'Стили контейнера профиля, только цвета.',
		defaultValue: 'См. раздел стилей'
	},
	{
		parameter: <InlineCode>button</InlineCode>,
		type: <InlineCode>IComponentStyles</InlineCode>,
		description: 'Стили кнопки-аватара пользователя, только цвета.',
		defaultValue: 'См. раздел стилей'
	}
];

const loginRows = [
	{
		parameter: <InlineCode>text</InlineCode>,
		type: <InlineCode>string</InlineCode>,
		description: 'Текст кнопки входа.',
		defaultValue: <InlineCode>"Войти"</InlineCode>
	},
	{
		parameter: <InlineCode>type</InlineCode>,
		type: <InlineCode>string</InlineCode>,
		description: 'Тип кнопки.',
		defaultValue: <InlineCode>"login"</InlineCode>
	},
	{
		parameter: <InlineCode>icon</InlineCode>,
		type: <InlineCode>string | React.ReactElement</InlineCode>,
		description: 'Ссылка на изображение или React-элемент.',
		defaultValue: <InlineCode>null</InlineCode>
	},
	{
		parameter: <InlineCode>customStyles</InlineCode>,
		type: <InlineCode>IComponentStyles</InlineCode>,
		description: 'Индивидуальные стили для кнопки.',
		defaultValue: 'См. раздел стилей'
	}
];

const menuRequiredRows = [
	{
		parameter: <InlineCode>text</InlineCode>,
		type: <InlineCode>string</InlineCode>,
		description: 'Отображаемое название кнопки.',
		example: <InlineCode>"TestService"</InlineCode>
	},
	{
		parameter: <InlineCode>link</InlineCode>,
		type: <InlineCode>string</InlineCode>,
		description: 'Ссылка на страницу для перехода.',
		example: <InlineCode>"https://test.com"</InlineCode>
	}
];

const menuOptionalRows = [
	{
		parameter: <InlineCode>icon</InlineCode>,
		type: <InlineCode>string | React.ReactElement</InlineCode>,
		description: 'Ссылка на изображение или React-элемент.',
		defaultValue: <InlineCode>null</InlineCode>
	},
	{
		parameter: <InlineCode>customStyles</InlineCode>,
		type: <InlineCode>IComponentStyles</InlineCode>,
		description: 'Индивидуальные стили для кнопки.',
		defaultValue: 'См. раздел стилей'
	}
];

export function ConfigurationPage() {
	const baseSection = configurationSections[0]!;
	const profileSection = configurationSections[1]!;
	const loginSection = configurationSections[2]!;
	const menuSection = configurationSections[3]!;

	return (
		<Stack spacing={4}>
			<PageHeader
				eyebrow="Конфигурация"
				title="Параметры TrustedWidget и прикладные примеры"
				description="Эта страница собрала все runtime-параметры: от базового TrustedWidgetConfig до profile, loginButton и menuButtons. Используйте её как рабочую спецификацию для интеграции в UI."
				sections={configurationSections}
			/>

			<DocSection
				id={baseSection.id}
				title={baseSection.title}
				description={baseSection.description}
				icon={baseSection.icon}
			>
				<Stack spacing={3}>
					<Typography variant="body1">
						Конфигурация строится вокруг объекта <InlineCode>TrustedWidgetConfig</InlineCode>.
						Минимально нужны только <InlineCode>appId</InlineCode> и{' '}
						<InlineCode>redirectUrl</InlineCode>, остальные поля расширяют поведение виджета
						и интеграцию с вашим API.
					</Typography>

					<div>
						<Typography
							variant="h4"
							sx={{ mb: 1.5 }}
						>
							Обязательные параметры
						</Typography>
						<DocTable
							ariaLabel="Обязательные параметры TrustedWidgetConfig"
							columns={parameterColumns}
							rows={requiredRows}
						/>
					</div>

					<div>
						<Typography
							variant="h4"
							sx={{ mb: 1.5 }}
						>
							Необязательные параметры
						</Typography>
						<DocTable
							ariaLabel="Необязательные параметры TrustedWidgetConfig"
							columns={defaultColumns}
							rows={optionalRows}
						/>
					</div>

					<CodeBlock
						code={baseConfigSnippet}
						language="tsx"
						label="Базовая конфигурация"
					/>
				</Stack>
			</DocSection>

			<DocSection
				id={profileSection.id}
				title={profileSection.title}
				description={profileSection.description}
				icon={profileSection.icon}
			>
				<Stack spacing={3}>
					<Typography variant="body1">
						Раздел <InlineCode>profile</InlineCode> отвечает за отображение авторизованного
						пользователя. Здесь можно скрыть имя и настроить цвета для контейнера и кнопки,
						но не менять layout-стили вроде <InlineCode>padding</InlineCode> или{' '}
						<InlineCode>position</InlineCode>.
					</Typography>
					<DocTable
						ariaLabel="Параметры конфигурации profile"
						columns={defaultColumns}
						rows={profileRows}
					/>
					<DocAlert
						severity="warning"
						title="Важно"
					>
						Для <InlineCode>profile.wrapper</InlineCode> и <InlineCode>profile.button</InlineCode>{' '}
						можно менять только <InlineCode>color.text</InlineCode>,{' '}
						<InlineCode>color.background</InlineCode>, <InlineCode>color.hover</InlineCode> и
						флаг <InlineCode>isHideText</InlineCode>. Параметры вроде{' '}
						<InlineCode>borderRadius</InlineCode>, <InlineCode>padding</InlineCode> и{' '}
						<InlineCode>position</InlineCode> на профиль не применяются.
					</DocAlert>
					<CodeBlock
						code={profileConfigSnippet}
						language="tsx"
						label="Пример profile"
					/>
				</Stack>
			</DocSection>

			<DocSection
				id={loginSection.id}
				title={loginSection.title}
				description={loginSection.description}
				icon={loginSection.icon}
			>
				<Stack spacing={3}>
					<Typography variant="body1">
						Через <InlineCode>loginButton</InlineCode> настраивается кнопка для
						неавторизованных пользователей: текст, тип, иконка и индивидуальные стили.
					</Typography>
					<DocTable
						ariaLabel="Параметры loginButton"
						columns={defaultColumns}
						rows={loginRows}
					/>
					<Stack spacing={2.5}>
						<CodeBlock
							code={loginButtonSnippet}
							language="tsx"
							label="Пример loginButton"
						/>
						<Divider />
						<CodeBlock
							code={loginButtonNoIconSnippet}
							language="tsx"
							label="loginButton без иконки"
						/>
					</Stack>
				</Stack>
			</DocSection>

			<DocSection
				id={menuSection.id}
				title={menuSection.title}
				description={menuSection.description}
				icon={menuSection.icon}
			>
				<Stack spacing={3}>
					<Typography variant="body1">
						Массив <InlineCode>menuButtons</InlineCode> позволяет добавить дополнительные
						ссылки в меню аккаунта. Для каждой кнопки доступны обязательные поля{' '}
						<InlineCode>text</InlineCode> и <InlineCode>link</InlineCode>, а также иконка и
						индивидуальные стили.
					</Typography>

					<div>
						<Typography
							variant="h4"
							sx={{ mb: 1.5 }}
						>
							Обязательные параметры
						</Typography>
						<DocTable
							ariaLabel="Обязательные параметры menuButtons"
							columns={parameterColumns}
							rows={menuRequiredRows}
						/>
					</div>

					<div>
						<Typography
							variant="h4"
							sx={{ mb: 1.5 }}
						>
							Необязательные параметры
						</Typography>
						<DocTable
							ariaLabel="Необязательные параметры menuButtons"
							columns={defaultColumns}
							rows={menuOptionalRows}
						/>
					</div>

					<CodeBlock
						code={menuButtonsSnippet}
						language="tsx"
						label="Пример menuButtons"
					/>
				</Stack>
			</DocSection>
		</Stack>
	);
}

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { CodeBlock } from '../components/CodeBlock';
import { DocAlert } from '../components/DocAlert';
import { DocSection } from '../components/DocSection';
import { DocTable } from '../components/DocTable';
import { InlineCode } from '../components/InlineCode';
import { PageHeader } from '../components/PageHeader';
import {
	fullLoginButtonSnippet,
	fullProfileSnippet,
	globalStylesSnippet,
	menuButtonStylesSnippet,
	menuButtonsPrioritySnippet,
	redirectUrisSnippet,
	secondaryButtonSnippet
} from '../content/codeSamples';
import { stylingSections } from '../content/navigation';

const stylesColumns = [
	{ key: 'parameter', label: 'Параметр', width: '24%' },
	{ key: 'type', label: 'Тип', width: '18%' },
	{ key: 'description', label: 'Описание' }
] as const;

const exampleColumns = [
	{ key: 'parameter', label: 'Параметр', width: '24%' },
	{ key: 'type', label: 'Тип', width: '18%' },
	{ key: 'description', label: 'Описание' },
	{ key: 'example', label: 'Пример', width: '18%' }
] as const;

const styleRows = [
	{
		parameter: <InlineCode>customStyles</InlineCode>,
		type: <InlineCode>ICustomStyles</InlineCode>,
		description: 'Объект стилизации всего виджета.'
	},
	{
		parameter: <InlineCode>global.borderRadius</InlineCode>,
		type: <InlineCode>string</InlineCode>,
		description: 'Скругление углов для всех элементов.'
	},
	{
		parameter: <InlineCode>global.color</InlineCode>,
		type: <InlineCode>IComponentStyles</InlineCode>,
		description: 'Глобальные цвета виджета.'
	},
	{
		parameter: <InlineCode>components.primaryButton</InlineCode>,
		type: <InlineCode>IComponentStyles</InlineCode>,
		description: 'Стиль основной кнопки: «Войти», «Профиль».'
	},
	{
		parameter: <InlineCode>components.secondaryButton</InlineCode>,
		type: <InlineCode>IComponentStyles</InlineCode>,
		description: 'Стиль второстепенной кнопки: «Выход».'
	},
	{
		parameter: <InlineCode>components.accountButton</InlineCode>,
		type: <InlineCode>IComponentStyles</InlineCode>,
		description: 'Стиль кнопок меню аккаунта.'
	}
];

const componentStylesRows = [
	{
		parameter: <InlineCode>color.text</InlineCode>,
		type: <InlineCode>string</InlineCode>,
		description: 'Цвет текста и иконки.',
		example: <InlineCode>"#ffffff"</InlineCode>
	},
	{
		parameter: <InlineCode>color.background</InlineCode>,
		type: <InlineCode>string</InlineCode>,
		description: 'Цвет фона.',
		example: <InlineCode>"#1976d2"</InlineCode>
	},
	{
		parameter: <InlineCode>color.hover</InlineCode>,
		type: <InlineCode>string</InlineCode>,
		description: 'Цвет фона при наведении.',
		example: <InlineCode>"#1565c0"</InlineCode>
	},
	{
		parameter: <InlineCode>borderRadius</InlineCode>,
		type: <InlineCode>string</InlineCode>,
		description: 'Скругление углов элемента.',
		example: <InlineCode>"8px"</InlineCode>
	},
	{
		parameter: <InlineCode>padding</InlineCode>,
		type: <InlineCode>string</InlineCode>,
		description: 'Внутренние отступы.',
		example: <InlineCode>"8px 16px"</InlineCode>
	},
	{
		parameter: <InlineCode>position</InlineCode>,
		type: <InlineCode>"left" | "center"</InlineCode>,
		description: 'Выравнивание контента в кнопке.',
		example: <InlineCode>"center"</InlineCode>
	},
	{
		parameter: <InlineCode>isHideIcon</InlineCode>,
		type: <InlineCode>boolean</InlineCode>,
		description: 'Скрыть иконку в кнопке.',
		example: <InlineCode>false</InlineCode>
	}
];

const ssoSteps = [
	'Метод аутентификации клиента для конечной точки получения токена (token_endpoint_auth_method) → none',
	'Метод аутентификации, используемый при доступе к конечной точке проверки токена (introspection_endpoint_auth_method) → none',
	'Метод аутентификации, используемый при доступе к конечной точке отзыва токенов (revocation_endpoint_auth_method) → none'
] as const;

const styleBehavior = [
	'Централизованное управление: все стили задаются через customStyles, profile и loginButton.',
	'Гибкая настройка профиля: через profile.wrapper и profile.button настраивается внешний вид авторизованного пользователя.',
	'Настройка кнопки входа: loginButton.customStyles описывает поведение кнопки для неавторизованных пользователей.',
	'Глобальное скругление: borderRadius применяется ко всем элементам виджета, включая модальные окна и кнопки.',
	'Управление отображением: isHideText и isHideIcon позволяют скрывать текст и иконки.',
	'Умное наследование: если secondaryButton не задан, используется стиль primaryButton с прозрачностью.',
	'Fallback для hover: если hover-цвет не задан, применяется filter: brightness(90%).',
	'Индивидуальная кастомизация: каждая кнопка menuButtons может переопределить стили через customStyles.',
	'Fallback для menuButtons: если индивидуальных стилей нет, используются стили accountButton.',
	'Выравнивание контента: положение содержимого кнопки настраивается через position.'
] as const;

export function StylingAndIntegrationPage() {
	const stylesSection = stylingSections[0]!;
	const recipesSection = stylingSections[1]!;
	const menuSection = stylingSections[2]!;
	const ssoSection = stylingSections[3]!;
	const resourcesSection = stylingSections[4]!;

	return (
		<Stack spacing={4}>
			<PageHeader
				eyebrow="Стилизация и интеграция"
				title="customStyles, SSO-параметры и практические примеры"
				description="В этой части собраны все настройки внешнего вида, правила наследования стилей, поведение menuButtons и обязательные требования к конфигурации SSO."
				sections={stylingSections}
			/>

			<DocSection
				id={stylesSection.id}
				title={stylesSection.title}
				description={stylesSection.description}
				icon={stylesSection.icon}
			>
				<Stack spacing={3}>
					<Typography variant="body1">
						Свойство <InlineCode>customStyles</InlineCode> позволяет управлять внешним видом
						всех элементов виджета без изменения исходного кода компонентов.
					</Typography>
					<DocTable
						ariaLabel="Структура customStyles"
						columns={stylesColumns}
						rows={styleRows}
					/>
					<DocTable
						ariaLabel="Структура IComponentStyles"
						columns={exampleColumns}
						rows={componentStylesRows}
					/>
					<DocAlert
						severity="info"
						title="Наследование secondaryButton"
					>
						Если заданы стили только для <InlineCode>primaryButton</InlineCode>, они
						автоматически применяются к <InlineCode>secondaryButton</InlineCode> с большей
						прозрачностью. Если <InlineCode>secondaryButton</InlineCode> описан явно,
						автоматическая прозрачность не используется.
					</DocAlert>
				</Stack>
			</DocSection>

			<DocSection
				id={recipesSection.id}
				title={recipesSection.title}
				description={recipesSection.description}
				icon={recipesSection.icon}
			>
				<Stack spacing={3}>
					<Typography variant="body1">
						Ниже собраны рабочие пресеты, которые удобно использовать как стартовые шаблоны
						для дизайна виджета.
					</Typography>
					<CodeBlock
						code={globalStylesSnippet}
						language="tsx"
						label="Глобальные стили"
					/>
					<CodeBlock
						code={fullProfileSnippet}
						language="tsx"
						label="Полная конфигурация profile"
					/>
					<CodeBlock
						code={fullLoginButtonSnippet}
						language="tsx"
						label="Кнопка входа с customStyles"
					/>
					<CodeBlock
						code={secondaryButtonSnippet}
						language="tsx"
						label="Явный secondaryButton"
					/>
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
						Для каждой кнопки в <InlineCode>menuButtons</InlineCode> можно задать собственный
						объект <InlineCode>customStyles</InlineCode>. Это удобно, когда внутри меню есть
						кнопки разных ролей: навигация, настройки, поддержка.
					</Typography>
					<CodeBlock
						code={menuButtonStylesSnippet}
						language="tsx"
						label="Индивидуальные стили menuButtons"
					/>
					<Paper
						elevation={0}
						sx={{
							borderRadius: 4,
							p: 2.5,
							backgroundColor: 'rgba(255, 255, 255, 0.74)'
						}}
					>
						<Stack spacing={1.25}>
							<Typography variant="h4">Приоритет применения стилей</Typography>
							<Typography variant="body2">
								1. Индивидуальные стили кнопки (<InlineCode>customStyles</InlineCode> в
								объекте кнопки) имеют высший приоритет.
							</Typography>
							<Typography variant="body2">
								2. Стили <InlineCode>accountButton</InlineCode> используются, если
								индивидуальные стили не заданы.
							</Typography>
							<Typography variant="body2">3. Затем применяется дефолтный fallback.</Typography>
						</Stack>
					</Paper>
					<CodeBlock
						code={menuButtonsPrioritySnippet}
						language="tsx"
						label="Fallback через accountButton"
					/>
					<Paper
						elevation={0}
						sx={{
							borderRadius: 4,
							p: 2.5,
							backgroundColor: 'rgba(255, 255, 255, 0.74)'
						}}
					>
						<Stack spacing={1.2}>
							<Typography variant="h4">Итоговое поведение системы стилизации</Typography>
							{styleBehavior.map((item) => (
								<Typography
									key={item}
									variant="body2"
									color="text.secondary"
								>
									• {item}
								</Typography>
							))}
						</Stack>
					</Paper>
				</Stack>
			</DocSection>

			<DocSection
				id={ssoSection.id}
				title={ssoSection.title}
				description={ssoSection.description}
				icon={ssoSection.icon}
			>
				<Stack spacing={3}>
					<Typography variant="body1">
						Для корректного входа через виджет нужно изменить несколько значений в сервисе
						SSO. Все методы аутентификации конечных точек должны быть выставлены в{' '}
						<InlineCode>none</InlineCode>.
					</Typography>
					<Paper
						elevation={0}
						sx={{
							borderRadius: 4,
							p: 2.5,
							backgroundColor: 'rgba(255, 255, 255, 0.72)'
						}}
					>
						<Stack spacing={1.25}>
							<Typography variant="h4">Параметры аутентификации</Typography>
							{ssoSteps.map((step) => (
								<Typography
									key={step}
									variant="body2"
									color="text.secondary"
								>
									• {step}
								</Typography>
							))}
						</Stack>
					</Paper>
					<div>
						<Typography
							variant="h4"
							sx={{ mb: 1.5 }}
						>
							Возвратный URL
						</Typography>
						<CodeBlock
							code={redirectUrisSnippet}
							language="bash"
							label="redirect_uris"
						/>
					</div>
					<DocAlert
						severity="warning"
						title="Важно"
					>
						Параметр <InlineCode>redirectUrl</InlineCode> в коде конфигурации и{' '}
						<InlineCode>redirect_uris</InlineCode> в настройках SSO должны быть одинаковыми.
					</DocAlert>
				</Stack>
			</DocSection>

			<DocSection
				id={resourcesSection.id}
				title={resourcesSection.title}
				description={resourcesSection.description}
				icon={resourcesSection.icon}
			>
				<Stack spacing={2}>
					<Typography variant="body1">
						Дополнительно держите синхронно корневой <InlineCode>README.md</InlineCode> с
						инструкциями по развёртыванию, а после изменения конфигурации перепроверяйте
						сценарии публикации в GitHub Pages.
					</Typography>
					<Typography
						variant="body2"
						color="text.secondary"
					>
						Хорошая практика: после каждого изменения в документации прогонять{' '}
						<InlineCode>npm run build</InlineCode>, затем <InlineCode>npm run preview</InlineCode>{' '}
						и проверять прямой переход на вложенные routes проекта.
					</Typography>
				</Stack>
			</DocSection>
		</Stack>
	);
}

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { CodeBlock } from '../components/CodeBlock';
import { DocAlert } from '../components/DocAlert';
import { DocSection } from '../components/DocSection';
import { InlineCode } from '../components/InlineCode';
import { PageHeader } from '../components/PageHeader';
import {
	backendSsoProfileSnippet,
	frontendLocalPackageSnippet,
	frontendTokenSyncSnippet,
	frontendTrustedWidgetSnippet
} from '../content/codeSamples';
import { frontendStartSections } from '../content/navigation';

const ssoParameters = [
	'token_endpoint_auth_method',
	'introspection_endpoint_auth_method',
	'revocation_endpoint_auth_method'
] as const;

const integrationPoints = [
	'Trusted widget получает access token после успешной авторизации.',
	'Frontend передаёт token в backend через POST /api/auth/login.',
	'Backend запрашивает профиль пользователя в SSO по GET {SSO_BASE_URL}/oidc/me.',
	'Backend создаёт или обновляет пользователя и формирует server session.'
] as const;

const frontendTasks = [
	'Подключить trusted-widget как локальную зависимость в frontend/package.json.',
	'Собрать TrustedWidgetConfig с appId, issuer, redirectUrl и scopes: [\'email\'].',
	'Использовать customRoute, чтобы после логина синхронизировать access token с backend.',
	'Использовать logoutButtonFn, чтобы разлогинить пользователя и на backend, и в самом widget.'
] as const;

const backendTasks = [
	'Поднять auth API-роуты: POST /api/auth/login, GET /api/auth/me, POST /api/auth/logout.',
	'Принять accessToken от frontend и запросить профиль через SSO_BASE_URL/oidc/me.',
	'Провалидировать профиль и ожидать sub, email, name, email_verified.',
	'Создать или обновить пользователя в базе данных и сформировать серверную сессию.'
] as const;

const authFlowSteps = [
	'Пользователь открывает сервис.',
	'На странице загружается TrustedWidget.',
	'Пользователь нажимает «Войти через SSO» или виджет запускает автоматический вход.',
	'Trusted widget переводит пользователя в SSO-решение.',
	'После успешной авторизации происходит редирект назад на страницу с TrustedWidget.',
	'Виджет получает access token и передаёт его в handleTokenSync.',
	'handleTokenSync отправляет token в backend через POST /api/auth/login.',
	'Backend запрашивает профиль в SSO через GET {SSO_BASE_URL}/oidc/me.',
	'Backend валидирует профиль, синхронизирует пользователя и формирует сессию.'
] as const;

export function FrontendStartPage() {
	const ssoSetupSection = frontendStartSections[0]!;
	const summarySection = frontendStartSections[1]!;
	const frontendSection = frontendStartSections[2]!;
	const backendSection = frontendStartSections[3]!;
	const authFlowSection = frontendStartSections[4]!;

	return (
		<Stack spacing={4}>
			<PageHeader
				eyebrow="Старт для frontend"
				title="Полная интеграция Trusted Widget между frontend и backend"
				description="Эта страница описывает вариант, в котором Trusted Widget не просто показывает кнопку входа, а проходит полный цикл авторизации: получает token, синхронизирует его с backend, вытягивает профиль из SSO и поднимает серверную сессию."
				sections={frontendStartSections}
			/>

			<DocSection
				id={ssoSetupSection.id}
				title={ssoSetupSection.title}
				description={ssoSetupSection.description}
				icon={ssoSetupSection.icon}
			>
				<Stack spacing={2.5}>
					<Typography variant="body1">
						Перед подключением widget сначала подготовьте SSO-решение. Следующие параметры
						нужно перевести в значение <InlineCode>none</InlineCode>, чтобы frontend мог
						корректно проходить сценарий авторизации через Trusted Widget.
					</Typography>
					<Paper
						elevation={0}
						sx={{
							p: 2.5,
							borderRadius: 4,
							backgroundColor: 'rgba(255, 255, 255, 0.74)'
						}}
					>
						<Stack spacing={1.25}>
							{ssoParameters.map((parameter) => (
								<Stack
									key={parameter}
									direction="row"
									sx={{ gap: 1, flexWrap: 'wrap', alignItems: 'center' }}
								>
									<InlineCode>{parameter}</InlineCode>
									<Typography
										variant="body2"
										color="text.secondary"
									>
										→
									</Typography>
									<Chip
										label="none"
										color="primary"
										size="small"
									/>
								</Stack>
							))}
						</Stack>
					</Paper>
				</Stack>
			</DocSection>

			<DocSection
				id={summarySection.id}
				title={summarySection.title}
				description={summarySection.description}
				icon={summarySection.icon}
			>
				<Stack spacing={2.5}>
					<Typography variant="body1">
						В проекте уже выполнена полноценная интеграция Trusted SSO widget между{' '}
						<InlineCode>frontend</InlineCode> и <InlineCode>backend</InlineCode>. Виджет не
						ограничивается отображением кнопки входа, а завершает весь авторизационный цикл.
					</Typography>
					<Paper
						elevation={0}
						sx={{
							p: 2.5,
							borderRadius: 4,
							backgroundColor: 'rgba(255, 255, 255, 0.74)'
						}}
					>
						<Stack spacing={1.2}>
							{integrationPoints.map((point) => (
								<Typography
									key={point}
									variant="body2"
									color="text.secondary"
								>
									• {point}
								</Typography>
							))}
						</Stack>
					</Paper>
					<DocAlert
						severity="info"
						title="Коротко"
					>
						Этот сценарий стоит выбирать, если вам нужен не только client-side login, но и
						полноценная server session, работа пользователя через backend и синхронизация
						учётной записи в базе данных.
					</DocAlert>
				</Stack>
			</DocSection>

			<DocSection
				id={frontendSection.id}
				title={frontendSection.title}
				description={frontendSection.description}
				icon={frontendSection.icon}
			>
				<Stack spacing={3}>
					<Typography variant="body1">
						Во frontend уже выполнены все ключевые шаги для старта: пакет подключён локально,
						виджет инициализируется через <InlineCode>TrustedWidgetConfig</InlineCode>, а
						после логина token синхронизируется с backend.
					</Typography>
					<Paper
						elevation={0}
						sx={{
							p: 2.5,
							borderRadius: 4,
							backgroundColor: 'rgba(255, 255, 255, 0.74)'
						}}
					>
						<Stack spacing={1.2}>
							{frontendTasks.map((task) => (
								<Typography
									key={task}
									variant="body2"
									color="text.secondary"
								>
									• {task}
								</Typography>
							))}
						</Stack>
					</Paper>
					<CodeBlock
						code={frontendLocalPackageSnippet}
						language="json"
						label="Локальный пакет trusted-widget"
					/>
					<CodeBlock
						code={frontendTrustedWidgetSnippet}
						language="tsx"
						label="TrustedWidgetConfig и widget"
					/>
					<CodeBlock
						code={frontendTokenSyncSnippet}
						language="tsx"
						label="Синхронизация token с backend"
					/>
				</Stack>
			</DocSection>

			<DocSection
				id={backendSection.id}
				title={backendSection.title}
				description={backendSection.description}
				icon={backendSection.icon}
			>
				<Stack spacing={3}>
					<Typography variant="body1">
						На backend в этом варианте уже предполагается полноценный auth-слой. Он
						принимает access token от frontend, вытягивает профиль пользователя из SSO и
						дальше строит обычную серверную сессию.
					</Typography>
					<Paper
						elevation={0}
						sx={{
							p: 2.5,
							borderRadius: 4,
							backgroundColor: 'rgba(255, 255, 255, 0.74)'
						}}
					>
						<Stack spacing={1.2}>
							{backendTasks.map((task) => (
								<Typography
									key={task}
									variant="body2"
									color="text.secondary"
								>
									• {task}
								</Typography>
							))}
						</Stack>
					</Paper>
					<CodeBlock
						code={backendSsoProfileSnippet}
						language="bash"
						label="Запрос профиля в SSO"
					/>
					<Box>
						<Typography
							variant="h4"
							sx={{ mb: 1.5 }}
						>
							Ожидаемый профиль пользователя
						</Typography>
						<Stack
							direction="row"
							sx={{ gap: 1, flexWrap: 'wrap' }}
						>
							{['sub', 'email', 'name', 'email_verified'].map((field) => (
								<Chip
									key={field}
									label={field}
									variant="outlined"
								/>
							))}
						</Stack>
					</Box>
				</Stack>
			</DocSection>

			<DocSection
				id={authFlowSection.id}
				title={authFlowSection.title}
				description={authFlowSection.description}
				icon={authFlowSection.icon}
			>
				<Stack spacing={2.5}>
					<Typography variant="body1">
						Ниже приведён полный сценарий, который удобно использовать как чек-лист, если вы
						проверяете, что интеграция действительно проходит весь путь от кнопки входа до
						создания серверной сессии.
					</Typography>
					<Stack spacing={1.25}>
						{authFlowSteps.map((step, index) => (
							<Paper
								key={step}
								elevation={0}
								sx={{
									p: 2.25,
									borderRadius: 4,
									backgroundColor: 'rgba(255, 255, 255, 0.74)'
								}}
							>
								<Stack
									direction="row"
									sx={{ gap: 1.5, alignItems: 'flex-start' }}
								>
									<Chip
										label={`${index + 1}`}
										color="secondary"
										sx={{ minWidth: 40, fontWeight: 800 }}
									/>
									<Typography
										variant="body2"
										color="text.secondary"
									>
										{step}
									</Typography>
								</Stack>
							</Paper>
						))}
					</Stack>
				</Stack>
			</DocSection>
		</Stack>
	);
}

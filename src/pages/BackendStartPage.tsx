import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { CodeBlock } from '../components/CodeBlock';
import { DocAlert } from '../components/DocAlert';
import { DocSection } from '../components/DocSection';
import { InlineCode } from '../components/InlineCode';
import { PageHeader } from '../components/PageHeader';
import { oidClientSnippet } from '../content/codeSamples';
import { backendStartSections } from '../content/navigation';

const useCases = [
	'Нужно быстро подключить авторизацию без полного backend sync-пайплайна.',
	'Главная задача — получить профиль пользователя и показать его в интерфейсе.',
	'В проекте пока не нужна отдельная серверная сессия для каждого логина через widget.'
] as const;

const oidFlow = [
	'Настроить oid-client с authority, client_id, redirect_uri и scope.',
	'Отправить пользователя в redirect flow и дождаться callback после логина.',
	'Получить user и profile из oid-client после успешной авторизации.',
	'Показать в интерфейсе статус входа, email, имя и базовую информацию о пользователе.'
] as const;

const profileFields = ['sub', 'email', 'name', 'email_verified'] as const;

const outputIdeas = [
	'Показывать виджет только после получения профиля пользователя.',
	'Выводить имя и email рядом с кнопкой входа или в пользовательском меню.',
	'Показывать fallback-состояние для незалогиненного пользователя: кнопку входа и краткое описание сценария.'
] as const;

const differences = [
	'В этом варианте oid-client закрывает клиентскую авторизацию, но не строит полноценный backend auth-слой.',
	'Нет обязательного шага с POST /api/auth/login и дальнейшим созданием серверной сессии.',
	'Этот подход проще для старта, но если потребуется работа пользователя через backend, потом придётся перейти к полному сценарию из Frontend-start.'
] as const;

export function BackendStartPage() {
	const whenToUseSection = backendStartSections[0]!;
	const oidClientSection = backendStartSections[1]!;
	const profileSection = backendStartSections[2]!;
	const widgetOutputSection = backendStartSections[3]!;
	const differencesSection = backendStartSections[4]!;

	return (
		<Stack spacing={4}>
			<PageHeader
				eyebrow="Старт для backend"
				title="Упрощённый сценарий через oid-client"
				description="Эта страница описывает более лёгкий путь: авторизация происходит через oid-client, после чего приложение получает профиль пользователя и выводит его в виджет или интерфейс без полного backend sync-потока."
				sections={backendStartSections}
			/>

			<DocSection
				id={whenToUseSection.id}
				title={whenToUseSection.title}
				description={whenToUseSection.description}
				icon={whenToUseSection.icon}
			>
				<Stack spacing={2.5}>
					<Typography variant="body1">
						Несмотря на название страницы, это не тяжелая backend-интеграция, а стартовый
						упрощённый сценарий. Его удобно выбирать, если вам важно сначала быстро пройти
						логин, получить профиль и показать данные в интерфейсе.
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
							{useCases.map((item) => (
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
				id={oidClientSection.id}
				title={oidClientSection.title}
				description={oidClientSection.description}
				icon={oidClientSection.icon}
			>
				<Stack spacing={3}>
					<Typography variant="body1">
						Базовая схема здесь строится вокруг <InlineCode>oid-client</InlineCode>: он
						отвечает за redirect flow, обработку callback и восстановление профиля после
						успешного логина.
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
							{oidFlow.map((item) => (
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
					<CodeBlock
						code={oidClientSnippet}
						language="tsx"
						label="Базовая настройка oid-client"
					/>
				</Stack>
			</DocSection>

			<DocSection
				id={profileSection.id}
				title={profileSection.title}
				description={profileSection.description}
				icon={profileSection.icon}
			>
				<Stack spacing={2.5}>
					<Typography variant="body1">
						После логина вам обычно достаточно вытащить и отобразить базовый профиль
						пользователя. Этого достаточно для большинства стартовых сценариев и отладки входа.
					</Typography>
					<Stack
						direction="row"
						sx={{ gap: 1, flexWrap: 'wrap' }}
					>
						{profileFields.map((field) => (
							<Paper
								key={field}
								elevation={0}
								sx={{
									px: 2,
									py: 1.25,
									borderRadius: 4,
									backgroundColor: 'rgba(255, 255, 255, 0.74)'
								}}
							>
								<Typography variant="subtitle2">{field}</Typography>
							</Paper>
						))}
					</Stack>
				</Stack>
			</DocSection>

			<DocSection
				id={widgetOutputSection.id}
				title={widgetOutputSection.title}
				description={widgetOutputSection.description}
				icon={widgetOutputSection.icon}
			>
				<Stack spacing={2.5}>
					<Typography variant="body1">
						Главная цель этого варианта — не синхронизация с backend, а понятный
						пользовательский интерфейс после входа. Поэтому основной акцент на том, как
						аккуратно показать данные и состояние авторизации.
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
							{outputIdeas.map((item) => (
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
					<DocAlert
						severity="info"
						title="Практический смысл"
					>
						Если на этом этапе вам достаточно показать пользователю, что вход прошёл успешно,
						и отрисовать его профиль, этот сценарий покрывает задачу быстрее, чем полная
						синхронизация с backend.
					</DocAlert>
				</Stack>
			</DocSection>

			<DocSection
				id={differencesSection.id}
				title={differencesSection.title}
				description={differencesSection.description}
				icon={differencesSection.icon}
			>
				<Stack spacing={2.5}>
					<Typography variant="body1">
						Ниже кратко зафиксировано, чем упрощённый oid-client подход отличается от полной
						интеграции, описанной на странице <InlineCode>Старт для frontend</InlineCode>.
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
							{differences.map((item) => (
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
		</Stack>
	);
}

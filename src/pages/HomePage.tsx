import ArrowForwardRounded from '@mui/icons-material/ArrowForwardRounded';
import HubRounded from '@mui/icons-material/HubRounded';
import LoginRounded from '@mui/icons-material/LoginRounded';
import StorageRounded from '@mui/icons-material/StorageRounded';
import TaskAltRounded from '@mui/icons-material/TaskAltRounded';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { DocSection } from '../components/DocSection';
import { PageHeader } from '../components/PageHeader';
import { docsRoutes, homeSections } from '../content/navigation';

const startVariants = [
	{
		title: 'Старт для frontend',
		description:
			'Подробный сценарий полной интеграции Trusted Widget, где frontend получает access token и синхронизирует его с backend.',
		to: '/frontend-start',
		icon: LoginRounded,
		accent: '#A64932',
		chips: ['TrustedWidgetConfig', 'customRoute', 'POST /api/auth/login']
	},
	{
		title: 'Старт для backend',
		description:
			'Упрощённый сценарий через oid-client: авторизация, получение профиля и вывод информации о пользователе в интерфейс.',
		to: '/backend-start',
		icon: StorageRounded,
		accent: '#2A7F62',
		chips: ['oid-client', 'profile', 'widget output']
	}
] as const;

const nextSteps = [
	{
		title: 'Разобрать runtime-конфигурацию',
		description:
			'После выбора стартовой ветки откройте страницу конфигурации, чтобы собрать правильный TrustedWidgetConfig под свой проект.',
		to: '/configuration',
		icon: TaskAltRounded,
		label: 'Конфигурация'
	},
	{
		title: 'Подогнать внешний вид и SSO',
		description:
			'Когда сценарий запуска понятен, переходите к стилизации, правилам customStyles и финальной сверке redirect_uris.',
		to: '/styling-and-integration',
		icon: HubRounded,
		label: 'Стилизация и интеграция'
	}
] as const;

export function HomePage() {
	const variantsSection = homeSections[0]!;
	const mapSection = homeSections[1]!;
	const workflowSection = homeSections[2]!;

	return (
		<Stack spacing={4}>
			<PageHeader
				eyebrow="Старт"
				title="Выберите стартовый сценарий для TrustedWidget"
				description="Стартовая страница теперь работает как обзорный хаб. Сначала выберите одну из двух веток запуска, а затем переходите к конфигурации и стилизации уже под свой сценарий интеграции."
				sections={homeSections}
			/>

			<DocSection
				id={variantsSection.id}
				title={variantsSection.title}
				description={variantsSection.description}
				icon={variantsSection.icon}
			>
				<Stack spacing={2.5}>
					<Typography variant="body1">
						Если вам нужен полный поток между frontend, widget и backend, начинайте со
						страницы <strong>Старт для frontend</strong>. Если хотите сначала собрать более
						лёгкий вариант через <strong>oid-client</strong> и просто показать данные
						пользователя в интерфейсе, переходите в <strong>Старт для backend</strong>.
					</Typography>
					<Stack
						direction="row"
						sx={{ flexWrap: 'wrap', gap: 2 }}
					>
						{startVariants.map((variant) => {
							const Icon = variant.icon;

							return (
								<Paper
									key={variant.to}
									component={Link}
									to={variant.to}
									elevation={0}
									sx={{
										flex: '1 1 300px',
										minWidth: { xs: '100%', md: 300 },
										p: 3,
										borderRadius: 4,
										backgroundColor: 'rgba(255, 255, 255, 0.82)',
										transition: 'transform 180ms ease, box-shadow 180ms ease',
										'&:hover': {
											transform: 'translateY(-4px)',
											boxShadow: '0 18px 40px rgba(16, 38, 56, 0.08)'
										}
									}}
								>
									<Stack spacing={2}>
										<Stack
											direction="row"
											sx={{
												justifyContent: 'space-between',
												alignItems: 'center'
											}}
										>
											<Chip
												icon={<Icon />}
												label={variant.title}
												sx={{
													bgcolor: `${variant.accent}16`,
													color: 'text.primary',
													'& .MuiChip-icon': { color: variant.accent }
												}}
											/>
											<ArrowForwardRounded sx={{ color: variant.accent }} />
										</Stack>
										<Typography
											variant="body2"
											color="text.secondary"
										>
											{variant.description}
										</Typography>
										<Stack
											direction="row"
											sx={{ gap: 1, flexWrap: 'wrap' }}
										>
											{variant.chips.map((chip) => (
												<Chip
													key={chip}
													label={chip}
													variant="outlined"
												/>
											))}
										</Stack>
									</Stack>
								</Paper>
							);
						})}
					</Stack>
				</Stack>
			</DocSection>

			<DocSection
				id={mapSection.id}
				title={mapSection.title}
				description={mapSection.description}
				icon={mapSection.icon}
			>
				<Stack spacing={2.5}>
					<Typography variant="body1">
						Теперь документация разбита на пять основных маршрутов: обзорный старт, две
						стартовые ветки, конфигурация и стилизация. Это помогает отдельно документировать
						полный поток интеграции и более лёгкий сценарий через oid-client.
					</Typography>
					<Stack
						direction="row"
						sx={{ flexWrap: 'wrap', gap: 2 }}
					>
						{docsRoutes.map((route) => {
							const Icon = route.icon;

							return (
								<Paper
									key={route.path}
									component={Link}
									to={route.path}
									elevation={0}
									sx={{
										flex: '1 1 240px',
										minWidth: { xs: '100%', sm: 240 },
										p: 2.5,
										borderRadius: 4,
										backgroundColor: 'rgba(255, 255, 255, 0.78)'
									}}
								>
									<Stack spacing={1.5}>
										<Chip
											icon={<Icon />}
											label={route.title}
											sx={{
												alignSelf: 'flex-start',
												bgcolor: `${route.accent}14`,
												color: 'text.primary',
												'& .MuiChip-icon': { color: route.accent }
											}}
										/>
										<Typography
											variant="body2"
											color="text.secondary"
										>
											{route.description}
										</Typography>
									</Stack>
								</Paper>
							);
						})}
					</Stack>
				</Stack>
			</DocSection>

			<DocSection
				id={workflowSection.id}
				title={workflowSection.title}
				description={workflowSection.description}
				icon={workflowSection.icon}
			>
				<Stack spacing={2.5}>
					<Typography variant="body1">
						После выбора стартового сценария не обязательно читать всё подряд. Дальше лучше
						открывать только те страницы, которые помогают закрыть ваш следующий шаг.
					</Typography>
					<Stack spacing={1.5}>
						{nextSteps.map((step) => {
							const Icon = step.icon;

							return (
								<Paper
									key={step.to}
									elevation={0}
									sx={{
										p: 2.5,
										borderRadius: 4,
										backgroundColor: 'rgba(255, 255, 255, 0.72)'
									}}
								>
									<Stack spacing={1.5}>
										<Stack
											direction="row"
											sx={{ alignItems: 'center', gap: 1.5 }}
										>
											<Chip
												icon={<Icon />}
												label={step.label}
												color="primary"
											/>
										</Stack>
										<Typography variant="subtitle1">{step.title}</Typography>
										<Typography
											variant="body2"
											color="text.secondary"
										>
											{step.description}
										</Typography>
										<Button
											component={Link}
											to={step.to}
											variant="outlined"
											endIcon={<ArrowForwardRounded />}
											sx={{ alignSelf: 'flex-start' }}
										>
											Открыть страницу
										</Button>
									</Stack>
								</Paper>
							);
						})}
					</Stack>
				</Stack>
			</DocSection>
		</Stack>
	);
}

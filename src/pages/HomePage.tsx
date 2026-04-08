import ArrowForwardRounded from '@mui/icons-material/ArrowForwardRounded';
import HubRounded from '@mui/icons-material/HubRounded';
import TaskAltRounded from '@mui/icons-material/TaskAltRounded';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { CodeBlock } from '../components/CodeBlock';
import { DocSection } from '../components/DocSection';
import { InlineCode } from '../components/InlineCode';
import { PageHeader } from '../components/PageHeader';
import { docsRoutes, homeSections } from '../content/navigation';
import { installSnippet } from '../content/codeSamples';

const workflowSteps = [
	{
		title: 'Подключите пакет',
		description: 'Установите trusted-widget в клиентское приложение и сохраните базовый конфиг.'
	},
	{
		title: 'Соберите конфигурацию',
		description:
			'Сначала заполните appId и redirectUrl, затем добавьте profile, loginButton и menuButtons.'
	},
	{
		title: 'Настройте внешний вид',
		description:
			'Перейдите к customStyles, чтобы синхронизировать цвета, радиусы и поведение кнопок.'
	},
	{
		title: 'Сверьте SSO',
		description:
			'Убедитесь, что redirectUrl в коде совпадает с redirect_uris в настройках сервиса SSO.'
	}
] as const;

export function HomePage() {
	const quickstartSection = homeSections[0]!;
	const mapSection = homeSections[1]!;
	const workflowSection = homeSections[2]!;

	return (
		<Stack spacing={4}>
			<PageHeader
				eyebrow="Старт"
				title="Документация TrustedWidget в новом React shell"
				description="Здесь собраны установка, базовый маршрут по документации и рабочая последовательность настройки виджета. Начните с пакета и затем пройдите по двум прикладным страницам: конфигурация и стилизация."
				sections={homeSections}
			/>

			<DocSection
				id={quickstartSection.id}
				title={quickstartSection.title}
				description={quickstartSection.description}
				icon={quickstartSection.icon}
			>
				<Stack spacing={2.5}>
					<Typography variant="body1">
						Для клиентского UI достаточно установить пакет <InlineCode>trusted-widget</InlineCode>{' '}
						и затем передать объект <InlineCode>TrustedWidgetConfig</InlineCode> в компонент
						виджета.
					</Typography>
					<CodeBlock
						code={installSnippet}
						language="bash"
						label="Установка пакета"
					/>
					<Stack
						direction="row"
						sx={{ gap: 1, flexWrap: 'wrap' }}
					>
						<Chip label="npm install trusted-widget" color="primary" />
						<Chip label="yarn add trusted-widget" variant="outlined" />
						<Chip label="UI integration" variant="outlined" />
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
						Документация разбита на три маршрута, чтобы команда быстрее находила нужную
						часть интеграции и не терялась в одной длинной статье.
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
										flex: '1 1 260px',
										minWidth: { xs: '100%', sm: 260 },
										p: 2.5,
										borderRadius: 4,
										backgroundColor: 'rgba(255, 255, 255, 0.78)',
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
												label={route.title}
												sx={{
													bgcolor: `${route.accent}14`,
													color: 'text.primary',
													'& .MuiChip-icon': { color: route.accent }
												}}
											/>
											<ArrowForwardRounded sx={{ color: route.accent }} />
										</Stack>
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
						Если делаете интеграцию впервые, придерживайтесь последовательности ниже. Она
						сводит к минимуму лишние возвраты между кодом, стилизацией и SSO.
					</Typography>
					<Stack spacing={1.5}>
						{workflowSteps.map((step, index) => (
							<Paper
								key={step.title}
								elevation={0}
								sx={{
									display: 'flex',
									gap: 2,
									alignItems: 'flex-start',
									p: 2,
									borderRadius: 4,
									backgroundColor: 'rgba(255, 255, 255, 0.7)'
								}}
							>
								<Chip
									label={`${index + 1}`}
									color="secondary"
									sx={{ minWidth: 40, fontWeight: 800 }}
								/>
								<Stack spacing={0.5}>
									<Typography variant="subtitle1">{step.title}</Typography>
									<Typography
										variant="body2"
										color="text.secondary"
									>
										{step.description}
									</Typography>
								</Stack>
							</Paper>
						))}
					</Stack>
					<Stack
						direction={{ xs: 'column', sm: 'row' }}
						spacing={1.5}
					>
						<Button
							component={Link}
							to="/configuration"
							variant="contained"
							startIcon={<TaskAltRounded />}
						>
							Открыть конфигурацию
						</Button>
						<Button
							component={Link}
							to="/styling-and-integration"
							variant="outlined"
							startIcon={<HubRounded />}
						>
							Открыть стилизацию и интеграцию
						</Button>
					</Stack>
				</Stack>
			</DocSection>
		</Stack>
	);
}

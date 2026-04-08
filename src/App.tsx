import ArrowBackRounded from '@mui/icons-material/ArrowBackRounded';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { DocsLayout } from './layout/DocsLayout';

const basename = import.meta.env.BASE_URL.replace(/\/$/, '');
const HomePage = lazy(async () => ({ default: (await import('./pages/HomePage')).HomePage }));
const ConfigurationPage = lazy(
	async () => ({ default: (await import('./pages/ConfigurationPage')).ConfigurationPage })
);
const StylingAndIntegrationPage = lazy(
	async () => ({
		default: (await import('./pages/StylingAndIntegrationPage')).StylingAndIntegrationPage
	})
);

function RouteLoader() {
	return (
		<Stack
			spacing={1}
			sx={{ py: 6 }}
		>
			<Typography variant="h2">Загружаем страницу…</Typography>
			<Typography
				variant="body1"
				color="text.secondary"
			>
				Документация подгружает только нужный маршрут, чтобы первый экран оставался легче.
			</Typography>
		</Stack>
	);
}

function NotFoundPage() {
	return (
		<Stack
			spacing={2}
			sx={{ maxWidth: 640, py: 6, alignItems: 'flex-start' }}
		>
			<Typography variant="h1">Страница не найдена</Typography>
			<Typography
				variant="body1"
				color="text.secondary"
			>
				Проверьте адрес или вернитесь на стартовую страницу документации.
			</Typography>
			<Button
				component={Link}
				to="/"
				startIcon={<ArrowBackRounded />}
				variant="contained"
			>
				На главную
			</Button>
		</Stack>
	);
}

export default function App() {
	return (
		<BrowserRouter basename={basename}>
			<Suspense fallback={<RouteLoader />}>
				<Routes>
					<Route element={<DocsLayout />}>
						<Route
							path="/"
							element={<HomePage />}
						/>
						<Route
							path="/configuration"
							element={<ConfigurationPage />}
						/>
						<Route
							path="/styling-and-integration"
							element={<StylingAndIntegrationPage />}
						/>
						<Route
							path="*"
							element={<NotFoundPage />}
						/>
					</Route>
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
}

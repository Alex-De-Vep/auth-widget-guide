import CloudDoneRounded from '@mui/icons-material/CloudDoneRounded';
import MenuRounded from '@mui/icons-material/MenuRounded';
import RocketLaunchRounded from '@mui/icons-material/RocketLaunchRounded';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { docsRoutes } from '../content/navigation';

const drawerWidth = 312;

export function DocsLayout() {
	const location = useLocation();
	const [mobileOpen, setMobileOpen] = useState(false);

	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
	}, [location.pathname]);

	const drawerContent = (
		<Box sx={{ height: '100%', px: 2, py: 2.5 }}>
			<Stack
				direction="row"
				spacing={1.5}
				sx={{ px: 1, mb: 3, alignItems: 'center' }}
			>
				<Box
					sx={{
						display: 'grid',
						placeItems: 'center',
						width: 44,
						height: 44,
						borderRadius: 3,
						background:
							'linear-gradient(135deg, rgba(14, 58, 95, 0.98), rgba(214, 106, 78, 0.94))',
						color: 'common.white'
					}}
				>
					<RocketLaunchRounded fontSize="small" />
				</Box>
				<Box>
					<Typography variant="subtitle1">TrustedWidget Guide</Typography>
					<Typography
						variant="body2"
						color="text.secondary"
					>
						React + MUI docs shell
					</Typography>
				</Box>
			</Stack>
			<List sx={{ p: 0, mb: 2 }}>
				{docsRoutes.map((route) => {
					const selected = location.pathname === route.path;
					const Icon = route.icon;

					return (
						<ListItem
							key={route.path}
							disablePadding
							sx={{ mb: 1 }}
						>
							<ListItemButton
								component={NavLink}
								to={route.path}
								onClick={() => setMobileOpen(false)}
								selected={selected}
								sx={{
									borderRadius: 4,
									alignItems: 'flex-start',
									px: 1.5,
									py: 1.25,
									'&.Mui-selected': {
										bgcolor: 'rgba(14, 58, 95, 0.08)',
										'& .MuiListItemIcon-root': {
											color: route.accent
										}
									}
								}}
							>
								<ListItemIcon sx={{ minWidth: 42, mt: 0.2 }}>
									<Icon />
								</ListItemIcon>
								<Box>
									<Typography
										variant="subtitle2"
										sx={{ fontWeight: 700 }}
									>
										{route.title}
									</Typography>
									<Typography
										variant="body2"
										color="text.secondary"
										sx={{ mt: 0.3, lineHeight: 1.5 }}
									>
										{route.description}
									</Typography>
								</Box>
							</ListItemButton>
						</ListItem>
					);
				})}
			</List>
			<Divider sx={{ mb: 2 }} />
			<Stack
				spacing={2}
				sx={{
					borderRadius: 4,
					p: 2,
					backgroundColor: 'rgba(255, 255, 255, 0.72)'
				}}
			>
				<Chip
					icon={<CloudDoneRounded />}
					label="GitHub Pages ready"
					variant="outlined"
					sx={{ alignSelf: 'flex-start' }}
				/>
				<Typography variant="body2">
					Сайт собирается как статический SPA и публикуется в проектный GitHub Pages с
					учётом репозиторного base path.
				</Typography>
			</Stack>
		</Box>
	);

	return (
		<Box sx={{ display: 'flex', minHeight: '100vh' }}>
			<AppBar
				position="fixed"
				color="inherit"
				elevation={0}
				sx={{
					width: { md: `calc(100% - ${drawerWidth}px)` },
					ml: { md: `${drawerWidth}px` },
					borderBottom: '1px solid',
					borderColor: 'divider',
					bgcolor: 'rgba(248, 244, 236, 0.82)',
					backdropFilter: 'blur(18px)'
				}}
			>
				<Toolbar sx={{ gap: 2 }}>
					<IconButton
						color="inherit"
						edge="start"
						onClick={() => setMobileOpen(true)}
						sx={{ display: { md: 'none' } }}
					>
						<MenuRounded />
					</IconButton>
					<Box sx={{ flexGrow: 1 }}>
						<Typography variant="subtitle1">Документация TrustedWidget</Typography>
						<Typography
							variant="body2"
							color="text.secondary"
						>
							Настройка, стилизация и интеграция с SSO
						</Typography>
					</Box>
					<Chip
						label="Light theme"
						variant="outlined"
						sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
					/>
				</Toolbar>
			</AppBar>
			<Box
				component="nav"
				sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
				aria-label="Основная навигация"
			>
				<Drawer
					variant="temporary"
					open={mobileOpen}
					onClose={() => setMobileOpen(false)}
					ModalProps={{ keepMounted: true }}
					sx={{
						display: { xs: 'block', md: 'none' },
						'& .MuiDrawer-paper': {
							width: drawerWidth,
							boxSizing: 'border-box',
							bgcolor: 'rgba(246, 241, 232, 0.96)',
							backdropFilter: 'blur(14px)'
						}
					}}
				>
					{drawerContent}
				</Drawer>
				<Drawer
					variant="permanent"
					open
					sx={{
						display: { xs: 'none', md: 'block' },
						'& .MuiDrawer-paper': {
							width: drawerWidth,
							boxSizing: 'border-box',
							borderRight: '1px solid',
							borderColor: 'divider',
							bgcolor: 'rgba(248, 244, 236, 0.72)',
							backdropFilter: 'blur(18px)'
						}
					}}
				>
					<Toolbar />
					{drawerContent}
				</Drawer>
			</Box>
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					width: { md: `calc(100% - ${drawerWidth}px)` }
				}}
			>
				<Toolbar />
				<Box
					sx={{
						px: { xs: 2, sm: 3, md: 4 },
						py: { xs: 3, md: 4.5 }
					}}
				>
					<Outlet />
				</Box>
			</Box>
		</Box>
	);
}

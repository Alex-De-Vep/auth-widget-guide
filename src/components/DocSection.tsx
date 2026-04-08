import LinkRounded from '@mui/icons-material/LinkRounded';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import type { ElementType, ReactNode } from 'react';

type DocSectionProps = {
	id: string;
	title: string;
	description: string;
	icon: ElementType;
	children: ReactNode;
};

export function DocSection({
	id,
	title,
	description,
	icon: Icon,
	children
}: DocSectionProps) {
	return (
		<Paper
			id={id}
			component="section"
			elevation={0}
			sx={{
				scrollMarginTop: { xs: 88, md: 104 },
				borderRadius: 5,
				p: { xs: 3, md: 4 },
				backgroundColor: 'rgba(255, 255, 255, 0.78)'
			}}
		>
			<Stack spacing={3}>
				<Stack
					direction={{ xs: 'column', sm: 'row' }}
					spacing={2}
					sx={{
						alignItems: { xs: 'flex-start', sm: 'center' },
						justifyContent: 'space-between'
					}}
				>
					<Stack
						direction="row"
						spacing={2}
						sx={{ alignItems: 'flex-start' }}
					>
						<Box
							sx={{
								display: 'grid',
								placeItems: 'center',
								width: 52,
								height: 52,
								borderRadius: 3,
								bgcolor: 'rgba(14, 58, 95, 0.08)',
								color: 'primary.main',
								flexShrink: 0
							}}
						>
							<Icon fontSize="small" />
						</Box>
						<Box>
							<Typography
								variant="h3"
								sx={{ mb: 0.75 }}
							>
								{title}
							</Typography>
							<Typography
								variant="body1"
								color="text.secondary"
							>
								{description}
							</Typography>
						</Box>
					</Stack>
					<Tooltip title="Ссылка на раздел">
						<IconButton
							component="a"
							href={`#${id}`}
							aria-label={`Перейти к разделу ${title}`}
							sx={{
								border: '1px solid',
								borderColor: 'divider'
							}}
						>
							<LinkRounded fontSize="small" />
						</IconButton>
					</Tooltip>
				</Stack>
				{children}
			</Stack>
		</Paper>
	);
}

import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import type { DocSection } from '../content/navigation';

type PageHeaderProps = {
	eyebrow: string;
	title: string;
	description: string;
	sections?: readonly DocSection[];
};

export function PageHeader({
	eyebrow,
	title,
	description,
	sections = []
}: PageHeaderProps) {
	return (
		<Paper
			elevation={0}
			sx={{
				position: 'relative',
				overflow: 'hidden',
				mb: 4,
				borderRadius: 5,
				p: { xs: 3, md: 4.5 },
				background:
					'linear-gradient(135deg, rgba(14, 58, 95, 0.98) 0%, rgba(36, 73, 113, 0.96) 52%, rgba(214, 106, 78, 0.9) 100%)',
				color: 'common.white'
			}}
		>
			<Stack
				spacing={3}
				sx={{ position: 'relative', zIndex: 1 }}
			>
				<Stack
					direction={{ xs: 'column', sm: 'row' }}
					spacing={1}
					sx={{ alignItems: { xs: 'flex-start', sm: 'center' } }}
				>
					<Chip
						label={eyebrow}
						sx={{
							bgcolor: 'rgba(255, 255, 255, 0.14)',
							color: 'common.white',
							fontWeight: 700
						}}
					/>
					<Chip
						label={`${sections.length || 1} секции`}
						variant="outlined"
						sx={{
							borderColor: 'rgba(255, 255, 255, 0.22)',
							color: 'rgba(255, 255, 255, 0.84)'
						}}
					/>
				</Stack>
				<div>
					<Typography
						variant="h1"
						sx={{ maxWidth: 780, mb: 1.5 }}
					>
						{title}
					</Typography>
					<Typography
						variant="body1"
						sx={{
							maxWidth: 760,
							fontSize: { xs: '1rem', md: '1.1rem' },
							color: 'rgba(255, 255, 255, 0.82)'
						}}
					>
						{description}
					</Typography>
				</div>
				{sections.length > 0 && (
					<Stack
						direction="row"
						sx={{ gap: 1, flexWrap: 'wrap' }}
					>
						{sections.map((section) => (
							<Chip
								key={section.id}
								component="a"
								clickable
								href={`#${section.id}`}
								label={section.title}
								sx={{
									bgcolor: 'rgba(255, 255, 255, 0.1)',
									color: 'common.white',
									backdropFilter: 'blur(12px)',
									'&:hover': {
										bgcolor: 'rgba(255, 255, 255, 0.18)'
									}
								}}
							/>
						))}
					</Stack>
				)}
			</Stack>
			<Stack
				aria-hidden
				sx={{
					position: 'absolute',
					right: -30,
					top: -30,
					width: 220,
					height: 220,
					borderRadius: '50%',
					bgcolor: 'rgba(255, 255, 255, 0.08)',
					filter: 'blur(4px)'
				}}
			/>
			<Stack
				aria-hidden
				sx={{
					position: 'absolute',
					left: '45%',
					bottom: -80,
					width: 260,
					height: 160,
					borderRadius: '50%',
					bgcolor: 'rgba(246, 241, 232, 0.1)',
					filter: 'blur(4px)'
				}}
			/>
		</Paper>
	);
}

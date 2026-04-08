import Box from '@mui/material/Box';
import type { ReactNode } from 'react';

type InlineCodeProps = {
	children: ReactNode;
};

export function InlineCode({ children }: InlineCodeProps) {
	return (
		<Box
			component="code"
			sx={{
				display: 'inline-block',
				borderRadius: 1.5,
				bgcolor: 'rgba(14, 58, 95, 0.08)',
				px: 0.75,
				py: 0.2,
				fontFamily: '"JetBrains Mono", monospace',
				fontSize: '0.9em',
				fontWeight: 600,
				color: 'primary.dark'
			}}
		>
			{children}
		</Box>
	);
}

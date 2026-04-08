import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import type { AlertColor } from '@mui/material/Alert';
import type { ReactNode } from 'react';

type DocAlertProps = {
	severity?: AlertColor;
	title: string;
	children: ReactNode;
};

export function DocAlert({ severity = 'info', title, children }: DocAlertProps) {
	return (
		<Alert
			severity={severity}
			variant="outlined"
			sx={{
				borderRadius: 3,
				alignItems: 'flex-start'
			}}
		>
			<AlertTitle>{title}</AlertTitle>
			{children}
		</Alert>
	);
}

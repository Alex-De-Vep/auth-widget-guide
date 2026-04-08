import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import type { ReactNode } from 'react';

export type DocTableColumn<T extends string> = {
	key: T;
	label: string;
	width?: string;
	align?: 'left' | 'center' | 'right';
};

type DocTableProps<T extends string> = {
	ariaLabel: string;
	columns: readonly DocTableColumn<T>[];
	rows: ReadonlyArray<Record<T, ReactNode>>;
};

export function DocTable<T extends string>({
	ariaLabel,
	columns,
	rows
}: DocTableProps<T>) {
	return (
		<TableContainer
			sx={{
				borderRadius: 4,
				border: '1px solid',
				borderColor: 'divider',
				bgcolor: 'rgba(255, 255, 255, 0.72)'
			}}
		>
			<Table
				aria-label={ariaLabel}
				size="small"
				sx={{ minWidth: 680 }}
			>
				<TableHead>
					<TableRow>
						{columns.map((column) => (
							<TableCell
								key={column.key}
								align={column.align ?? 'left'}
								sx={{
									width: column.width,
									borderBottomColor: 'divider',
									bgcolor: 'rgba(14, 58, 95, 0.05)',
									py: 1.5
								}}
							>
								<Typography
									variant="subtitle2"
									color="text.primary"
								>
									{column.label}
								</Typography>
							</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row, rowIndex) => (
						<TableRow key={rowIndex}>
							{columns.map((column) => (
								<TableCell
									key={column.key}
									align={column.align ?? 'left'}
									sx={{ borderBottomColor: 'divider', verticalAlign: 'top' }}
								>
									{row[column.key]}
								</TableCell>
							))}
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

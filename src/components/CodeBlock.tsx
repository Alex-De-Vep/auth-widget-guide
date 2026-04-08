import ContentCopyRounded from '@mui/icons-material/ContentCopyRounded';
import CheckRounded from '@mui/icons-material/CheckRounded';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { Highlight, themes } from 'prism-react-renderer';
import type { Language } from 'prism-react-renderer';
import { useState } from 'react';

type CodeBlockProps = {
	code: string;
	language: Language;
	label: string;
};

export function CodeBlock({ code, language, label }: CodeBlockProps) {
	const [copied, setCopied] = useState(false);

	const handleCopy = async () => {
		await navigator.clipboard.writeText(code);
		setCopied(true);
		window.setTimeout(() => setCopied(false), 1200);
	};

	return (
		<Box
			data-testid="code-block"
			sx={{
				borderRadius: 4,
				overflow: 'hidden',
				border: '1px solid rgba(255, 255, 255, 0.08)',
				bgcolor: '#0E1728',
				boxShadow: '0 24px 48px rgba(14, 23, 40, 0.18)'
			}}
		>
			<Stack
				direction="row"
				sx={{
					px: 2,
					py: 1.25,
					borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
					bgcolor: 'rgba(255, 255, 255, 0.03)',
					alignItems: 'center',
					justifyContent: 'space-between'
				}}
			>
				<Stack
					direction="row"
					spacing={1}
					sx={{ alignItems: 'center' }}
				>
					<Box
						sx={{
							display: 'inline-flex',
							gap: 0.75
						}}
					>
						<Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#FF6B6B' }} />
						<Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#F7B955' }} />
						<Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#56C98D' }} />
					</Box>
					<Typography
						variant="subtitle2"
						sx={{ color: 'rgba(255, 255, 255, 0.82)' }}
					>
						{label}
					</Typography>
				</Stack>
				<Tooltip title={copied ? 'Скопировано' : 'Скопировать код'}>
					<IconButton
						onClick={() => {
							void handleCopy();
						}}
						size="small"
						sx={{ color: 'rgba(255, 255, 255, 0.72)' }}
					>
						{copied ? <CheckRounded fontSize="small" /> : <ContentCopyRounded fontSize="small" />}
					</IconButton>
				</Tooltip>
			</Stack>
			<Highlight
				theme={themes.vsDark}
				code={code}
				language={language}
			>
				{({ className, style, tokens, getLineProps, getTokenProps }) => (
					<Box
						component="pre"
						className={className}
						style={style}
						sx={{
							m: 0,
							overflowX: 'auto',
							p: 2,
							fontSize: 13,
							fontFamily: '"JetBrains Mono", monospace',
							bgcolor: 'transparent !important'
						}}
					>
						{tokens.map((line, lineIndex) => (
							<Box
								key={lineIndex}
								{...getLineProps({ line })}
								sx={{ display: 'table-row' }}
							>
								<Box
									component="span"
									sx={{
										display: 'table-cell',
										pr: 2,
										textAlign: 'right',
										userSelect: 'none',
										opacity: 0.3
									}}
								>
									{lineIndex + 1}
								</Box>
								<Box
									component="span"
									sx={{ display: 'table-cell' }}
								>
									{line.map((token, tokenIndex) => (
										<Box
											key={tokenIndex}
											component="span"
											{...getTokenProps({ token })}
										/>
									))}
								</Box>
							</Box>
						))}
					</Box>
				)}
			</Highlight>
		</Box>
	);
}

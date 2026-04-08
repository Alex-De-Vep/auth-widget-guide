import { alpha, createTheme } from '@mui/material/styles';

export const theme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#0E3A5F',
			light: '#2C5C87',
			dark: '#08263E'
		},
		secondary: {
			main: '#D66A4E',
			light: '#E78C76',
			dark: '#A64932'
		},
		background: {
			default: '#F6F1E8',
			paper: '#FFFFFF'
		},
		text: {
			primary: '#102638',
			secondary: '#4F6578'
		},
		success: {
			main: '#2A7F62'
		},
		warning: {
			main: '#C98A2B'
		}
	},
	shape: {
		borderRadius: 20
	},
	typography: {
		fontFamily: '"Manrope Variable", "Manrope", sans-serif',
		h1: {
			fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
			fontWeight: 800,
			lineHeight: 1.02,
			letterSpacing: '-0.05em'
		},
		h2: {
			fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
			fontWeight: 800,
			lineHeight: 1.1,
			letterSpacing: '-0.03em'
		},
		h3: {
			fontSize: '1.3rem',
			fontWeight: 800,
			lineHeight: 1.2
		},
		h4: {
			fontSize: '1.05rem',
			fontWeight: 700
		},
		subtitle1: {
			fontWeight: 700
		},
		body1: {
			lineHeight: 1.7
		},
		body2: {
			lineHeight: 1.6
		},
		button: {
			textTransform: 'none',
			fontWeight: 700
		}
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				':root': {
					colorScheme: 'light'
				},
				html: {
					scrollBehavior: 'smooth'
				},
				body: {
					background:
						'radial-gradient(circle at top left, rgba(214, 106, 78, 0.12), transparent 28%), radial-gradient(circle at top right, rgba(14, 58, 95, 0.1), transparent 34%), linear-gradient(180deg, #F8F4EC 0%, #EEF3F7 100%)'
				},
				'::selection': {
					backgroundColor: alpha('#D66A4E', 0.22)
				}
			}
		},
		MuiAppBar: {
			styleOverrides: {
				root: {
					backgroundImage: 'none'
				}
			}
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					backgroundImage: 'none',
					border: `1px solid ${alpha('#102638', 0.08)}`
				}
			}
		},
		MuiChip: {
			styleOverrides: {
				root: {
					borderRadius: 999
				}
			}
		},
		MuiButton: {
			defaultProps: {
				disableElevation: true
			},
			styleOverrides: {
				root: {
					borderRadius: 999,
					paddingInline: 18
				}
			}
		}
	}
});

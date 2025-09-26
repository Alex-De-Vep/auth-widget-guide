/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts,md}'],
    theme: {
        extend: {
            typography: {
                DEFAULT: {
                    css: {
                        maxWidth: 'none',
                        h1: { fontWeight: 'bold', fontSize: '2.25rem', marginBottom: '1rem' },
                        h2: { fontWeight: 'semibold', fontSize: '1.875rem', marginBottom: '0.75rem' },
                        h3: { fontWeight: 'medium', fontSize: '1.5rem', marginBottom: '0.5rem' },
                        p: { marginBottom: '1rem' },
                        table: { width: '100%', marginBottom: '1rem' },
                        th: { backgroundColor: '#f3f4f6', padding: '0.75rem', textAlign: 'left' },
                        td: { padding: '0.75rem', borderBottom: '1px solid #e5e7eb' },
                        code: { backgroundColor: '#f3f4f6', padding: '0.2rem 0.4rem', borderRadius: '0.25rem' },
                        pre: { backgroundColor: '#1f2937', padding: '1rem', borderRadius: '0.5rem', overflowX: 'auto' }
                    }
                }
            }
        }
    },
    plugins: [require('@tailwindcss/typography')]
};
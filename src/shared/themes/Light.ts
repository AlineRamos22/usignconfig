import { createTheme } from '@mui/material';

export const LightTheme = createTheme({
    palette: {
        primary: {
            main: '#3f3167',
            dark: '#2e2054',
            light: '#5e4f8a',
            contrastText: '#f1f1f1',
        },
        secondary: {
            main: '#c70039',
            dark: '#a60032',
            light: '#e60041',
            contrastText: '#f1f1f1',
        },
        background: {
            default: '# f1f1f1',
            paper: '#ffffff',
        },
    },
});

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/Routes';
import { LightTheme } from './shared/themes/ThemeProvider';

export const App = () => {
    return (
        <ThemeProvider theme={LightTheme}>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </ThemeProvider>
    );
};

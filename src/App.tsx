import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from "@mui/material";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import 'normalize.css/normalize.css';
import './styles/styles.scss';
import theme from "./theme/theme";
import Main from './components/Main';

const App = (
    <div>
        <ThemeProvider theme={theme}>
            <Main />
        </ThemeProvider>
    </div>
);

const container = document.getElementById('app');
const root = createRoot(container);
root.render(App);

import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from "@mui/material";

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

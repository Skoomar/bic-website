import React from 'react';
import { createRoot } from 'react-dom/client';
import { MantineProvider } from '@mantine/core';

import 'normalize.css/normalize.css';
import './styles/styles.scss'

import Main from './components/Main';

const App = (
    <div>
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <Main />
        </MantineProvider>
    </div>
);

const container = document.getElementById('app');
const root = createRoot(container);
root.render(App);

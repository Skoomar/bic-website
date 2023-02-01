import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import Main from './components/Main';

const App = (
    <div>
        <ChakraProvider>
            <Main />
        </ChakraProvider>
    </div>
);

const container = document.getElementById('app');
const root = createRoot(container);
root.render(App);

import React from 'react';
import {createRoot} from "react-dom/client";

import {NextUIProvider} from "@nextui-org/react";
import "normalize.css/normalize.css";
import "./styles/styles.scss"

import Main from "./components/Main";

const App = (
    <NextUIProvider>
        <Main />
    </NextUIProvider>
);

const container = document.getElementById('app');
const root = createRoot(container);
root.render(App);

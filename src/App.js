import React from 'react';
import { createRoot } from "react-dom/client";
import "normalize.css/normalize.css";
import "./styles/styles.scss"

import Main from "./components/Main";

const App = (
    <div>
        <Main />
    </div>
);

const container = document.getElementById('app');
const root = createRoot(container);
root.render(App);

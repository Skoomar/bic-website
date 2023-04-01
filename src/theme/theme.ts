import { createTheme } from '@mui/material';

import buttonTheme from "./components/button";

const theme = createTheme({
    palette: {
        primary: {
            main: '#ffffff',
        },
        secondary: {
            main: '#D29C45',
            light: '#e7c899',
            dark: '#9d8259',
        },
    },
    components: {
        MuiButton: buttonTheme
    }

});

export default theme;
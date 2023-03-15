import { createTheme } from '@mui/material';

import tabTheme from "./components/tab";

const theme = createTheme({
    palette: {
        primary: {
            main: '#31572C',
        },
        secondary: {
            main: '#D29C45',
            light: '#e7c899',
            dark: '#9d8259',
        },
    },
    components: {
        MuiTab: tabTheme
    }

});

export default theme;
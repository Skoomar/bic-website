import { createTheme } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: '#31572C',
            light: '#336647',
            dark: '#002c12',
            contrastText: '#fff'
        },
        secondary: {
            main: '#3C4F76',
            light: '#e7c899',
            dark: '#9d8259',
            contrastText: '#fff'
        },
    }
});

export default theme;
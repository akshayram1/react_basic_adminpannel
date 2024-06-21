// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2', // Blue
        },
        secondary: {
            main: '#f50057', // Pink
        },
        background: {
            default: '#f0f4f8', // Light grey background
        },
        text: {
            primary: '#333', // Dark grey text
        },
    },
});

export default theme;

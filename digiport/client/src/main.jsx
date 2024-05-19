import React from "react";
import ReactDOM from "react-dom/client";

// Import pages
import App from "./App.jsx";
import AppCopy from "./App copy.jsx";

import "./index.css";
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

let fonts = [
  "Poppins",
  "Nunito",
  "Roboto",
  '"Segoe UI"',
  '"Helvetica Neue"',
  "Arial",
  "sans-serif",
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
].join(",");

// Theme for the website, configure it here
let theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
      light: "#b2cfc6",
    },
    secondary: {
      main: grey[500],
    },
    blue: {
      main: "#0083CA",
    },
    yellow: {
      main: "#faf2e9",
      dark: "#c49451",
    },
    white: {
      main: "#ffffff",
    },
  },
  typography: {
    fontFamily: fonts,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  components: {
    MuiTypography: {
      defaultProps: {
        fontFamily: fonts,
      },
    },
  },
});

theme = responsiveFontSizes(theme);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />

      {/* For debugging */}
      {/* <AppCopy /> */}
    </ThemeProvider>
  </React.StrictMode>
);

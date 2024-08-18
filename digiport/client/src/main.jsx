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
      main: "#4f4e34",
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
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "30px", // Adjust border radius as needed
          // boxShadow: '1px 1px 1px 1px rgba(1, 1, 1, 0.2)', // Custom elevation style
        },
      },
    },
    // Global styles for all components
     // DataGrid specific styling
     MuiDataGrid: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
          border: "1px solid rgba(0, 0, 0, 0.12)",
          overflow: "hidden", // This ensures content doesn't overflow the rounded corners
          '& .MuiDataGrid-columnsContainer, & .MuiDataGrid-cell': {
            borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
          },
          '& .MuiDataGrid-iconSeparator': {
            display: 'none',
          },
          '& .MuiDataGrid-columnHeaders': {
            borderBottom: "2px solid rgba(0, 0, 0, 0.12)",
          },
          '& .MuiDataGrid-row:last-child .MuiDataGrid-cell': {
            borderBottom: 'none',
          },
        },
      },
    },
    // MuiButtonBase: {
    //   styleOverrides: {
    //     root: {
    //       borderRadius: "30px",
    //     },
    //   },
    // },
    // MuiCard: {
    //   styleOverrides: {
    //     root: {
    //       borderRadius: "30px",
    //     },
    //   },
    // },
    // MuiTextField: {
    //   styleOverrides: {
    //     root: {
    //       '& .MuiOutlinedInput-root': {
    //         borderRadius: "30px",
    //       },
    //     },
    //   },
    // },
  },
  shape: {
    borderRadius: 10, // This sets a default border radius for components that respect this theme property
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

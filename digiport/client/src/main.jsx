import React from "react";
import ReactDOM from "react-dom/client";

// Import pages
import App from "./App.jsx";
import AppCopy from "./App copy.jsx";

import "./index.css";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
import { grey } from "@mui/material/colors";

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
          // boxShadow: "1px 1px 1px 1px rgba(1, 1, 1, 0.2)", // Custom elevation style
          boxShadow:
            "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;",
          // box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
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
          "& .MuiDataGrid-columnsContainer, & .MuiDataGrid-cell": {
            borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
          },
          "& .MuiDataGrid-iconSeparator": {
            display: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            borderBottom: "2px solid rgba(0, 0, 0, 0.12)",
          },
          "& .MuiDataGrid-row:last-child .MuiDataGrid-cell": {
            borderBottom: "none",
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            color: "white",
            backgroundColor: "#ff4086",
            // boxShadow:
            //   "0 0 15px rgba(222, 159, 95, 0.8), 0 0 25px rgba(199, 150, 101, 0.6), 0 0 35px rgba(255, 255, 255, 0.4)",
            boxShadow:
              "rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px;",
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

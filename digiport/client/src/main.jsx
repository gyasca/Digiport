import React from "react";
import ReactDOM from "react-dom/client";

// Import pages
import App from "./App.jsx";
// import AppCopy from "./App copy.jsx";

import "./index.css";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import { CssBaseline } from "@mui/material";

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
let unusedtheme = createTheme({
  palette: {
    mode: "dark", // Ensure it's using dark mode
    primary: {
      main: "rgb(0, 0, 0)",
      light: "rgb(150, 250, 100)",
    },
    secondary: {
      main: grey[500],
    },
    text: {
      primary: "rgb(150, 255, 100)", // Apply global text color
      secondary: "rgba(150, 255, 100, 0.7)", // Lighter version
    },
  },
  typography: {
    fontFamily: fonts,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    allVariants: {
      color: "rgb(150, 255, 100)", // Ensure all text is this color
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#000300", // Ensure a dark background
          color: "rgb(150, 255, 100)", // Apply global text color
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        color: "text.primary", // Ensure Typography components use the theme color
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
});

let theme = createTheme({
  palette: {
    mode: "dark", // Ensure it's using dark mode
    primary: {
      main: "rgb(150, 250, 100)",
      light: "rgb(150, 250, 100)",
      darkglass: "rgba(0, 0, 0, 0.95)",
      greyglass: "rgba(3, 3, 3, 0.95)",
    },
    secondary: {
      main: grey[500],
    },
    // primary: {
    //   main: "rgb(0, 0, 0)",
    //   light: "rgb(150, 250, 100)",
    // },
    // secondary: {
    //   main: grey[500],
    // },
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
    text: {
      primary: "rgb(150, 255, 100)", // Apply global text color
      secondary: "rgba(150, 255, 100, 0.7)", // Lighter version
    },
  },
  typography: {
    fontFamily: fonts,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    color: "rgb(150, 255, 100)",
  },
  components: {
    MuiTypography: {
      defaultProps: {
        fontFamily: fonts,
      },
    },
    // MuiPaper: {
    //   styleOverrides: {
    //     root: {
    //       borderRadius: "50px", // Adjust border radius as needed
    //       // boxShadow: "1px 1px 1px 1px rgba(1, 1, 1, 0.2)", // Custom elevation style
    //       boxShadow:
    //         "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;",
    //       // box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    //       color: "rgb(150, 255, 100)", // Without opacity
    //       backgroundColor: "rgba(0, 0, 0)",
    //     },
    //   },
    // },
    MuiPaper: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          borderRadius: ownerState.noRadius ? "0px" : "50px", // Remove border radius if noRadius is true
          // boxShadow: "1px 1px 1px 1px rgba(1, 1, 1, 0.2)", // Custom elevation style
          boxShadow:
            "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
            // "none",
          // box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
          color: "rgb(150, 255, 100)", // Text color
          backgroundColor: "rgba(3, 3, 3, 0.95)", // Background color
          backgroundImage: "none",
        }),
      },
    },

    MuiCard: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          // borderRadius: ownerState.noRadius ? "0px" : "50px", // Remove border radius if noRadius is true
          backgroundColor: "rgba(3, 3, 3, 0.95)", // Background color
          backgroundImage: "none",
        }),
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
          color: "primary",
          "&:hover": {
            color: "black",
            backgroundColor: "rgba(111, 255, 0)",
            borderRadius: "50px",
            // boxShadow:
            //   "0 0 15px rgba(222, 159, 95, 0.8), 0 0 25px rgba(199, 150, 101, 0.6), 0 0 35px rgba(255, 255, 255, 0.4)",
            boxShadow:
              "rgba(111, 255, 0, 0.4) 0px 5px, rgba(111, 255, 0, 0.3) 0px 10px, rgba(111, 255, 0, 0.2) 0px 15px, rgba(111, 255, 0, 0.1) 0px 20px, rgba(111, 255, 0, 0.05) 0px 25px;",
          },
        },
      },
    },

    // MuiCard: {
    //   styleOverrides: {
    //     root: {
    //       borderRadius: "30px",
    //       m: 10
    //     },
    //   },
    // },

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

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <ThemeProvider theme={theme}>
//       <App />
//       {/* For debugging */}
//       {/* <AppCopy /> */}
//     </ThemeProvider>
//   </React.StrictMode>
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Apply global styles */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import digiportlogo from "/digiportlogo1.png";
// import "./App.css";
// import { Container, AppBar, Toolbar, Typography, Box } from "@mui/material";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { Navbar } from "./components/Navbar";
// import Footer from "./components/Footer";

// // Import pages
// import UserRoutes from "./pages/UserRoutes";

// function App() {
//   return (
//     <Router>
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           // Background image properties
//           backgroundImage: `url(/matchalaptopplant.jpg)`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           position: "relative",
//           // minHeight: "90vh"
//         }}
//       >
//         <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column", minHeight: "100vh" }}>
//           <Navbar />
//           <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column", mt: 4 }}>
//             <Routes location={location}>
//               <Route path="*" element={<UserRoutes />} />
//               {/* <Route path="/admin/*" element={<AdminRoutes />} /> */}
//             </Routes>
//           </Box>
//         </Box>
//         <Footer />
//       </Box>
//     </Router>
//   );
// }
// export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import digiportlogo from "/digiportlogo1.png";
import "./App.css";
import { Container, AppBar, Toolbar, Typography, Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";

// Import pages
import UserRoutes from "./pages/UserRoutes";

// Import Matrix Background component
import MatrixBackground from "./components/MatrixBackground";

function App() {
  return (
    <Router>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden", // Prevent background from overflowing
        }}
      >
        {/* Matrix Background Component */}
        <MatrixBackground />

        {/* Main content */}
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            zIndex: 1,
            position: "relative", // Ensure content is above the background
          }}
        >
          <Navbar />
          <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column", mt: 4, ml: 4, mr: 4 }}>
            <Routes location={location}>
              <Route path="*" element={<UserRoutes />} />
              {/* <Route path="/admin/*" element={<AdminRoutes />} /> */}
            </Routes>
          </Box>
        </Box>
        {/* Footer with fixed positioning */}
        <Footer />
      </Box>
    </Router>
  );
}

export default App;




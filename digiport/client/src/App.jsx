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

function App() {
  return (
    <Router>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          // Background image properties
          backgroundImage: `url(/matchalaptopplant.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative"
        }}
      >
        <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
          <Navbar />
          <Routes location={location}>
            <Route path="*" element={<UserRoutes />} />
            {/* <Route path="/admin/*" element={<AdminRoutes />} /> */}
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Router>
  );
}
export default App;

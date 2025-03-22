import { useState } from "react";
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  IconButton,
  Stack,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Typography,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LoginIcon from "@mui/icons-material/Login";
import { Link, useLocation } from "react-router-dom";
import gyascasubject from "/gyascasubject.png";

export function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();

  const user = null; // Replace with actual user authentication logic

  // Define navbar items
  const navItems = [
    { label: "Home", icon: <HomeIcon />, path: "/" },
    { label: "About Me", icon: <PersonIcon />, path: "/aboutme" },
    { label: "Projects", icon: <WorkIcon />, path: "/projects" },
    { label: "Shop", icon: <StorefrontIcon />, path: "/shop" },
  ];

  return (
    <Container
      maxWidth="xl"
      sx={{
        marginTop: ["1rem", "2rem"],
        position: "sticky",
        top: ["1rem", "2rem"],
        zIndex: 999,
      }}
    >
      {/* Fading effect wrapper */}
      <Box
        sx={{
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(to right, rgba(0,0,0,0.2), transparent, rgba(0,0,0,0.2))",
            pointerEvents: "none",
          },
        }}
      >
        <AppBar position="sticky" sx={{ borderRadius: "10rem" }}>
          <Toolbar>
            <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
              <IconButton
                color="inherit"
                sx={{ marginRight: "1rem", display: ["flex", "flex", "none"] }}
                onClick={() => setIsDrawerOpen(true)}
              >
                <MenuIcon />
              </IconButton>
              <Button
                color="inherit"
                variant="text"
                component={Link}
                to="/"
                sx={{
                  marginRight: "1rem",
                  fontFamily: "'caveat brush'",
                  textTransform: "none",
                  fontSize: "18px",
                  padding: "0",
                  "& img": { maxHeight: "40px" },
                }}
              >
                <img src={gyascasubject} alt="Logo" />
              </Button>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ marginRight: "1rem", display: ["none", "none", "flex"] }}
              />
              <Stack spacing={2} direction="row" sx={{ display: ["none", "none", "flex"] }}>
                {navItems.map((item) => (
                  <Button
                    key={item.path}
                    startIcon={item.icon}
                    component={Link}
                    to={item.path}
                    variant="text"
                    color="inherit"
                    sx={{
                      backgroundColor: location.pathname === item.path ? "rgba(137, 147, 77, 0.76)" : "transparent",
                      borderRadius: "10px",
                      padding: "6px 12px",
                      fontWeight: location.pathname === item.path ? "bold" : "normal",
                      // "&:hover": {
                      //   backgroundColor: "rgba(255, 255, 255, 0.3)",
                      // },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Stack>
            </Box>
            {!user ? (
              <Button component={Link} variant="text" color="inherit" to="/login" startIcon={<LoginIcon />}>
                Login
              </Button>
            ) : (
              <NavbarProfile />
            )}
          </Toolbar>
        </AppBar>
      </Box>

      {/* Drawer for mobile navigation */}
      <Drawer anchor="left" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <List sx={{ width: "250px" }}>
          <ListItem>
            <Typography fontWeight={700}>Navigation Menu</Typography>
          </ListItem>
          <Divider sx={{ marginBottom: 1 }} />
          {navItems.map((item) => (
            <ListItem key={item.path} disablePadding>
              <ListItemButton
                component={Link}
                to={item.path}
                onClick={() => setIsDrawerOpen(false)}
                sx={{
                  backgroundColor: location.pathname === item.path ? "rgba(0, 0, 0, 0.1)" : "transparent",
                  "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.2)" },
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Container>
  );
}

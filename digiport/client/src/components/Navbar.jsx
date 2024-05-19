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
import { Link } from "react-router-dom";
import digiportlogo from "/digiportlogo1.png";

export function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Logic for checking if user is logged in
  const user = null; // Your logic for checking user here

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
      <AppBar position="sticky" sx={{ borderRadius: "0.5rem" }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
            <IconButton
              color="inherit"
              sx={{
                marginRight: "1rem",
                display: ["flex", "flex", "none"],
              }}
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
                "& img": {
                  maxHeight: "40px",
                },
              }}
            >
              <img src={digiportlogo} alt="" />
              <Typography variant="h6" component="div" sx={{ marginRight: "1rem", marginLeft: "0.5rem" }}>DigiPort</Typography>
            </Button>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                marginRight: "1rem",
                display: ["none", "none", "flex"],
              }}
            />
            <Stack
              spacing={2}
              direction="row"
              sx={{ display: ["none", "none", "flex"] }}
            >
              <Button
                startIcon={<HomeIcon />}
                component={Link}
                variant="text"
                color="inherit"
                to="/"
              >
                Home
              </Button>
              <Button
                startIcon={<PersonIcon />}
                component={Link}
                variant="text"
                color="inherit"
                to="/aboutme"
              >
                About Me
              </Button>
              <Button
                startIcon={<WorkIcon />}
                component={Link}
                variant="text"
                color="inherit"
                to="/projects"
              >
                Projects
              </Button>
              <Button
                startIcon={<StorefrontIcon />}
                component={Link}
                variant="text"
                color="inherit"
                to="/shop"
              >
                Shop
              </Button>
            </Stack>
          </Box>
          {/* Display Login button if user is not logged in */}
          {!user && (
            <Button
              component={Link}
              variant="text"
              color="inherit"
              to="/login"
              startIcon={<LoginIcon />}
            >
              Login
            </Button>
          )}
          {/* Display profile button if user is logged in */}
          {user && <NavbarProfile />}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor={"left"}
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <List sx={{ width: "250px" }}>
          <ListItem key={"Home"}>
            <Typography fontWeight={700}>Navigation Menu</Typography>
          </ListItem>
          <Divider sx={{ marginBottom: 1 }} />
          <ListItem key={"Home"} disablePadding>
            <ListItemButton
              component={Link}
              to="/"
              onClick={() => setIsDrawerOpen(false)}
            >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItemButton>
          </ListItem>
          <ListItem key={"AboutMe"} disablePadding>
            <ListItemButton
              component={Link}
              to="/aboutme"
              onClick={() => setIsDrawerOpen(false)}
            >
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary={"About Me"} />
            </ListItemButton>
          </ListItem>
          <ListItem key={"Projects"} disablePadding>
            <ListItemButton
              component={Link}
              to="/projects"
              onClick={() => setIsDrawerOpen(false)}
            >
              <ListItemIcon>
                <WorkIcon />
              </ListItemIcon>
              <ListItemText primary={"Projects"} />
            </ListItemButton>
          </ListItem>
          <ListItem key={"Credits"} disablePadding>
            <ListItemButton
              component={Link}
              to="/credits"
              onClick={() => setIsDrawerOpen(false)}
            >
              <ListItemIcon>
                <CreditCardIcon />
              </ListItemIcon>
              <ListItemText primary={"Credits"} />
            </ListItemButton>
          </ListItem>
          <ListItem key={"Shop"} disablePadding>
            <ListItemButton
              component={Link}
              to="/shop"
              onClick={() => setIsDrawerOpen(false)}
            >
              <ListItemIcon>
                <StorefrontIcon />
              </ListItemIcon>
              <ListItemText primary={"Shop"} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Container>
  );
}

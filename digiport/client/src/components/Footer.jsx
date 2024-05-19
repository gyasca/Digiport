import React from 'react'
import { Container, Typography, Divider, Box, Grid, Stack, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LoginIcon from "@mui/icons-material/Login";
import { Email, Phone, Support, Instagram } from '@mui/icons-material';

function Footer() {
    return (
        <>
            <Box sx={{
                boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
                backgroundColor: "primary.main",
                color: "white.main",
            }}>
                <Container
                    maxWidth="xl"
                    sx={{
                        marginY: "1rem",
                    }}
                >
                    <Typography color={"inherit"} sx={{ fontSize: "36px", fontWeight: "bold" }}>DigiPort</Typography>
                    <Grid container spacing={2}>

                        <Grid item xs={12} lg={6}>
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
              <Button
                startIcon={<Support />}
                component={Link}
                variant="text"
                color="inherit"
                to="/shop"
              >
                Support
              </Button>
            </Stack>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Typography fontWeight={700} variant='h6' marginBottom={"0.5rem"}>Contact Me</Typography>
                            <Stack spacing={2} direction={{ sx: "column", md: "row" }}>
                                <Box display={"flex"} alignItems={"center"}>
                                    <Email sx={{ marginRight: "1rem" }} />
                                    <Box>
                                        <Typography fontWeight={700} variant='body1'>Email</Typography>
                                        <Typography variant='body2'>
                                            gregorychua14@gmail.com
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box display={"flex"} alignItems={"center"}>
                                    <Phone sx={{ marginRight: "1rem" }} />
                                    <Box>
                                        <Typography fontWeight={700} variant='body1'>Phone</Typography>
                                        <Typography variant='body2'>
                                            +65 8223 8934
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box display={"flex"} alignItems={"center"}>
                                    <Instagram sx={{ marginRight: "1rem" }} />
                                    <Box>
                                        <Typography fontWeight={700} variant='body1'>Instagram</Typography>
                                        <Typography variant='body2'>
                                            @gyasca
                                        </Typography>
                                    </Box>
                                </Box>
                            </Stack>
                        </Grid>
                    </Grid>
                    <Divider sx={{ marginTop: "1rem", marginBottom: "1rem" }} />
                    <Link to="/about" style={{ textDecoration: "none", color:"inherit" }}>
                        <Typography color={"inherit"} sx={{ textAlign: "center" }}>DigiPort - 2024 - Created by Gregory Achilles Chua</Typography>
                    </Link>
                </Container>
            </Box>

        </>
    )
}

export default Footer
import React from "react";
import {
  Box,
  Container,
  Grid,
  Button,
  Card,
  CardContent,
  Typography,
  IconButton,
  Avatar,
  Paper,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

const Home = () => {
  const fullUser = {}; // Replace this with your user object

  const handleMenuOpen = () => {
    // Handle menu opening logic
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(/matchalaptopplant.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        minHeight: "87vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container>
        <Grid container spacing={3}>
          {/* Left section with user profile */}
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CardContent>
                {/* Profile picture */}
                <IconButton aria-label="profile photo" onClick={handleMenuOpen}>
                  {fullUser && fullUser.googleAccountType ? (
                    <Avatar
                      alt="profilephoto"
                      src={fullUser.profilePhotoFile}
                    />
                  ) : fullUser &&
                    typeof fullUser.profilePhotoFile === "string" ? (
                    <Avatar
                      alt="profilephoto"
                      src={`digiport\client\public\digiportlogo1.jpeg`}
                    />
                  ) : (
                    // <AccountCircle />
                    <Avatar
                      alt="profilephoto"
                      src={`digiport\client\public\digiportlogo1.jpeg`}
                    />
                  )}
                </IconButton>
                {/* User name */}
                <Typography variant="h5" align="center" gutterBottom>
                  {`${fullUser.firstName} ${fullUser.lastName}`}
                </Typography>
                {/* Email */}
                <Typography variant="body1" align="center" gutterBottom>
                  {fullUser.email}
                </Typography>
                {/* Edit profile button */}
                {/* <Box display="flex" justifyContent="center" mt={2}>
                  <Button variant="contained" color="secondary">
                    Edit Profile
                  </Button>
                </Box> */}
              </CardContent>
            </Card>
          </Grid>
          {/* Text section */}
          <Grid item xs={12} md={8}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <CardContent>
                <Typography
                  variant="h4"
                  gutterBottom
                  fontWeight="bold"
                  sx={{ textAlign: "center" }}
                >
                  Welcome to my Portfolio
                </Typography>
                <Typography variant="body1" gutterBottom>
                  I am a recent Information Technology graduate from Nanyang
                  Polytechnic, equipped with a strong foundation in software
                  design and implementation and a passion for software
                  development.
                </Typography>
              </CardContent>
            </Card>
            <Paper
              elevation={0}
              sx={{
                display: "flex",
                flexDirection: "row", // Change flexDirection to row
                justifyContent: "space-evenly", // Align buttons evenly
                alignItems: "center",
                padding: 1,
                paddingTop: 3,
                paddingBottom: 3,
                background: "transparent"
              }}
            >
              <Button
                variant="outlined"
                sx={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  border: "1px solid black",
                  backgroundColor: "#FFD9EC",
                  padding: "50px",
                }}
              >
                About Me
              </Button>
              <Button
                variant="outlined"
                sx={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  border: "1px solid black",
                  backgroundColor: "#D6FFEC",
                  padding: "50px",
                }}
              >
                Projects
              </Button>
              <Button
                variant="outlined"
                sx={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  border: "1px solid black",
                  backgroundColor: "#FFECD6",
                  padding: "50px",
                }}
              >
                Resume
              </Button>
              <Button
                variant="outlined"
                sx={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  border: "1px solid black",
                  backgroundColor: "#FFECFF",
                  padding: "50px",
                }}
              >
                Contact
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;

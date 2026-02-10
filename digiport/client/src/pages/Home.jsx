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
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";

const Home = () => {
  const fullUser = {}; // Replace this with your user object

  const handleMenuOpen = () => {
    // Handle menu opening logic
  };
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      width: "16px", // Increase width
      height: "16px", // Increase height
      fontSize: "2px", // Adjust font size if needed
      borderRadius: "50%",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px dotted currentColor",
        content: "''",
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));

  return (
    <Box
      sx={{
        minHeight: "55vh",
        display: "flex",
        // the attributes below are to center all elements on the page vertically and horizontally
        justifyContent: "center",
        alignItems: "center",
      }}
    >
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
              {/* <IconButton aria-label="profile photo" onClick={handleMenuOpen}>
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
                </IconButton> */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  m: 4,
                }}
              >
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  variant="dot"
                >
                  <Avatar
                    alt="profilephoto"
                    src="/gregpfpbali.jpg"
                    sx={{ width: 200, height: 200 }}
                  />
                </StyledBadge>
              </Box>
              {/* User name */}
              {/* <Typography variant="h5" align="center" gutterBottom>
                  {`${fullUser.firstName} ${fullUser.lastName}`}
                </Typography> */}
              <Typography
                variant="h5"
                align="center"
                sx={{ fontWeight: "bold" }}
                gutterBottom
              >
                Gregory Achilles Chua
              </Typography>
              {/* Email */}
              {/* <Typography variant="body1" align="center" gutterBottom>
                  {fullUser.email}
                </Typography> */}
              <Typography variant="body1" align="center" gutterBottom>
                gregorychua14@gmail.com
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
                I am a polytechnic graduate under the Diploma in Information
                Technology (NYP). I aspire to work in business-software
                industry. In 2027, I will be matriculating into university
                (Local). development.
              </Typography>
            </CardContent>
          </Card>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap", // Allow the buttons to wrap
              justifyContent: "center", // Center the buttons horizontally
              alignItems: "center",
              gap: 2, // Add space between the buttons
              padding: 1,
              paddingTop: { xs: 0, md: 3 },
              paddingBottom: 3,
              background: "transparent",
            }}
          >
            <Button
              variant="outlined"
              sx={{
                width: { xs: "80px", md: "150px" }, // 70px on small screens, 150px on large screens
                height: { xs: "80px", md: "150px" }, // 70px on small screens, 150px on large screens
                borderRadius: "50%",
                border: "1px solid white",
                color: "#FFFFFF",
                padding: 0,
                fontSize: { xs: "12px", md: "15px" }, // 12px font on small screens, 15px font on large screens
              }}
            >
              About Me
            </Button>
            <Button
              variant="outlined"
              sx={{
                width: { xs: "80px", md: "150px" },
                height: { xs: "80px", md: "150px" },
                borderRadius: "50%",
                border: "1px solid white",
                color: "#FFFFFF",
                padding: 0,
                fontSize: { xs: "12px", md: "15px" },
              }}
            >
              Projects
            </Button>
            <Button
              LinkComponent={Link}
              to="/portfolio-example-1"
              variant="outlined"
              sx={{
                width: { xs: "80px", md: "150px" },
                height: { xs: "80px", md: "150px" },
                borderRadius: "50%",
                border: "1px solid white",
                color: "#FFFFFF",
                padding: 0,
                fontSize: { xs: "12px", md: "15px" },
              }}
            >
              Portfolio
            </Button>
            <Button
              variant="outlined"
              sx={{
                width: { xs: "80px", md: "150px" },
                height: { xs: "80px", md: "150px" },
                borderRadius: "50%",
                border: "1px solid white",
                color: "#FFFFFF",
                padding: 0,
                fontSize: { xs: "12px", md: "15px" },
              }}
            >
              Resume
            </Button>
            <Button
              variant="outlined"
              sx={{
                width: { xs: "80px", md: "150px" },
                height: { xs: "80px", md: "150px" },
                borderRadius: "50%",
                border: "1px solid white",
                color: "#FFFFFF",
                padding: 0,
                fontSize: { xs: "12px", md: "15px" },
              }}
            >
              Contact
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;

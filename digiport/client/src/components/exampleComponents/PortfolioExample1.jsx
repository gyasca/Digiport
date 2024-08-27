import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Tabs,
  Tab,
  Box,
  Chip,
  Avatar,
  List,
  ListItem,
  ListItemText,
  IconButton,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Paper,
} from "@mui/material";
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Mail as MailIcon,
  Launch as LaunchIcon,
} from "@mui/icons-material";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#2196f3',
//     },
//     secondary: {
//       main: '#f50057',
//     },
//   },
// });

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const personalInfo = {
    name: "Gregory Achilles Chua",
    title: "Full-stack developer",
    bio: "A comprehensive description about yourself, your journey, and your professional expertise.",
    skills: [
      {
        category: "Programming",
        items: ["JavaScript", "Python", "React", "Node.js"],
      },
      { category: "Design", items: ["UI/UX", "Figma", "Adobe XD"] },
      {
        category: "Soft Skills",
        items: ["Communication", "Team Leadership", "Problem Solving"],
      },
    ],
    experience: [
      {
        title: "Senior Developer",
        company: "Tech Co",
        period: "2020 - Present",
        responsibilities: [
          "Led a team of 5 developers on high-priority projects",
          "Implemented CI/CD pipelines, reducing deployment time by 40%",
          "Mentored junior developers, improving team productivity by 25%",
        ],
      },
      {
        title: "Full Stack Developer",
        company: "StartUp Inc",
        period: "2017 - 2020",
        responsibilities: [
          "Developed and maintained multiple web applications using React and Node.js",
          "Optimized database queries, improving application performance by 30%",
          "Collaborated with UX designers to implement responsive designs",
        ],
      },
    ],
    projects: [
      {
        name: "E-commerce Platform",
        description:
          "A full-stack e-commerce solution with real-time inventory management.",
        technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
        link: "https://github.com/yourusername/ecommerce-platform",
      },
      {
        name: "AI-powered Chat Bot",
        description:
          "An intelligent chatbot using natural language processing for customer support.",
        technologies: ["Python", "TensorFlow", "Flask", "React"],
        link: "https://github.com/yourusername/ai-chatbot",
      },
      {
        name: "Data Visualization Dashboard",
        description: "Interactive dashboard for visualizing complex datasets.",
        technologies: ["D3.js", "React", "Express", "PostgreSQL"],
        link: "https://github.com/yourusername/data-viz-dashboard",
      },
    ],
    education: [
      {
        degree: "M.S. in Computer Science",
        institution: "Tech University",
        year: "2017",
      },
      {
        degree: "B.S. in Software Engineering",
        institution: "State College",
        year: "2015",
      },
    ],
    contact: {
      email: "your.email@example.com",
      github: "https://github.com/yourusername",
      linkedin: "https://www.linkedin.com/in/yourusername",
    },
  };

  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          mt: 0,
          mb: 5,
          position: "relative",
          minHeight: "55vh",
          display: "flex",
          // the attributes below are to center all elements on the page vertically and horizontally
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          sx={{
            width: "100%",
            maxWidth: "100%", // Adjust this value to change the fixed width
            padding: 4,
          }}
        >
          <Typography variant="h2" component="h1" gutterBottom>
            {personalInfo.name}
          </Typography>
          <Typography variant="h5" color="textSecondary" paragraph>
            {personalInfo.title}
          </Typography>
          <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 3 }}>
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              aria-label="portfolio tabs"
            >
              <Tab label="About" />
              <Tab label="Experience" />
              <Tab label="Projects" />
              <Tab label="Education" />
            </Tabs>
          </Box>
          <Box role="tabpanel" hidden={activeTab !== 0}>
            {activeTab === 0 && (
              <>
                <Typography variant="body1" paragraph>
                  {personalInfo.bio}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Skills
                </Typography>
                {personalInfo.skills.map((skillGroup, index) => (
                  <Box key={index} mb={2}>
                    <Typography variant="subtitle1" gutterBottom>
                      {skillGroup.category}
                    </Typography>
                    <Box display="flex" flexWrap="wrap" gap={1}>
                      {skillGroup.items.map((skill, skillIndex) => (
                        <Chip key={skillIndex} label={skill} />
                      ))}
                    </Box>
                  </Box>
                ))}
              </>
            )}
          </Box>
          <Box role="tabpanel" hidden={activeTab !== 1}>
            {activeTab === 1 && (
              <List>
                {personalInfo.experience.map((job, index) => (
                  <ListItem key={index} alignItems="flex-start">
                    <ListItemText
                      primary={job.title}
                      secondary={
                        <>
                          <Typography
                            component="span"
                            variant="body2"
                            color="textPrimary"
                          >
                            {job.company} | {job.period}
                          </Typography>
                          <List dense>
                            {job.responsibilities.map((resp, respIndex) => (
                              <ListItem key={respIndex}>
                                <ListItemText primary={resp} />
                              </ListItem>
                            ))}
                          </List>
                        </>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            )}
          </Box>
          <Box role="tabpanel" hidden={activeTab !== 2}>
            {activeTab === 2 && (
              <Grid container spacing={3}>
                {personalInfo.projects.map((project, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card>
                      <CardContent>
                        <Typography variant="h6" component="div">
                          {project.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          paragraph
                        >
                          {project.description}
                        </Typography>
                        <Box display="flex" flexWrap="wrap" gap={1} mb={2}>
                          {project.technologies.map((tech, techIndex) => (
                            <Chip key={techIndex} label={tech} size="small" />
                          ))}
                        </Box>
                      </CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          endIcon={<LaunchIcon />}
                          href={project.link}
                          target="_blank"
                        >
                          View Project
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            )}
          </Box>
          <Box role="tabpanel" hidden={activeTab !== 3}>
            {activeTab === 3 && (
              <List>
                {personalInfo.education.map((edu, index) => (
                  <ListItem key={index}>
                    <ListItemText
                      primary={edu.degree}
                      secondary={`${edu.institution} | ${edu.year}`}
                    />
                  </ListItem>
                ))}
              </List>
            )}
          </Box>
        </Paper>
      </Container>
      {/* <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6, mt: 4 }}>
        <Container maxWidth="lg">
          <Typography variant="h6" align="center" gutterBottom>
            Contact Me
          </Typography>
          <Box display="flex" justifyContent="center" gap={2}>
            <IconButton aria-label="github" color="inherit" href={personalInfo.contact.github} target="_blank">
              <GitHubIcon />
            </IconButton>
            <IconButton aria-label="linkedin" color="inherit" href={personalInfo.contact.linkedin} target="_blank">
              <LinkedInIcon />
            </IconButton>
            <IconButton aria-label="email" color="inherit" href={`mailto:${personalInfo.contact.email}`}>
              <MailIcon />
            </IconButton>
          </Box>
        </Container>
      </Box> */}
    </>
  );
};

export default Portfolio;

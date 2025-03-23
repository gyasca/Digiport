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
  Paper,
} from "@mui/material";
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Launch as LaunchIcon,
} from "@mui/icons-material";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const personalInfo = {
    name: "Gregory Achilles Chua",
    title: "Full-stack Developer",
    bio: "I am a soon to be polytechnic graduate under the Diploma in Information Technology (NYP). I aspire to be a software developer. In 2027, I will be matriculating into either NTU or SMU (undecided).",
    skills: [
      {
        category: "Programming Languages & Tools",
        items: ["C#", "JavaScript", "Python", "Kotlin", "Java", "CSS", "HTML", "Node.js", "NuGet Package Manager", "PIP"],
      },
      {
        category: "Frontend development",
        items: ["React", "JinjaHTML", "Bootstrap",],
      },
      {
        category: "Backend development & Database management",
        items: ["Node.js", "ASP.net (C#)", "ASP.net Core (C#)", "Directus", "Microsoft SQL Server", "Shelve", "MySQL", "PostgreSQL", "MongoDB",],
      },
      {
        category: "Other technical skills",
        items: ["OS Management", "Linux", "Computer Networking", "Information Security & Encryption", "AI training & development (LLMs, CNNs, DL, ML, etc)", "Data structures & Algorithms", "Scrum",],
      },
      { category: "Design", items: ["UI/UX", "Figma", "Adobe XD"] },
      {
        category: "Soft Skills",
        items: ["Communication", "Team Leadership", "Problem Solving", "Events Planning"],
      },
    ],
    experience: [
      {
        title: "Intern",
        company: "CSIT",
        period: "2024 (3 months)",
        responsibilities: [
          "Grade achieved: A",
          "Software engineering and research in a real-world project environment",
          "Open source software research",
          "Full stack design & development"
        ],
      },
      {
        title: "Sales Associate",
        company: "AftershockPC",
        period: "2022-2023",
        responsibilities: [
          "Sales of desktop and laptop computers",
          "Best performance: Achieved 72 sales in 4 days",
          "Achieved daily sales targets",
          "Worked with AftershockPC for 3 separate 4-day events",
        ],
      },
      {
        title: "Service Crew",
        company: "McDonald's",
        period: "2019-2020",
        responsibilities: [
          "Cashiering",
          "Table service",
          "Food preparation",
          "Certificates obtained: Food Hygiene Certificate",
        ],
      },
      {
        title: "Worker",
        company: "General part time jobs",
        period: "2019-2020",
        responsibilities: [
          "Banquet at Park Royal Marina and Orchard Hotel",
          "Cashier & Kitchen assistant for Sports Hub events (Harry Styles concert, Rugby Match)",
        ],
      },
    ],
    projects: [
      {
        name: "CYHIGH (NYP Y1S1, 2022 August)",
        description:
          "A cycling website to educate Singaporeans about bicycles, cycling paths, and route planning.",
        technologies: ["HTML", "Bootstrap", "JavaScript", "CSS"],
        link: "#",
      },
      {
        name: "OneSalonSG (NYP Y1S2, 2023 February)",
        description:
          "A full-stack e-commerce and salon booking website for a school project.",
        technologies: ["Jinja HTML", "Python", "Flask", "Shelve", "Bootstrap", "CSS"],
        link: "https://broching.pythonanywhere.com/",
      },
      {
        name: "EnviroGo Carpooling and Bike Sharing (NYP Y2S1, 2023 August)",
        description:
          "A React and ExpressJS-based platform for carpooling and bike-sharing.",
        technologies: [
          "ReactJS",
          "Node.js",
          "MySQL",
          "ExpressJS",
          "JavaScript",
        ],
        link: "https://envirogo.cat2.link",
      },
      {
        name: "NTUC UPlay Redesign (NYP Y2S2, 2024 February)",
        description:
          "Full-stack development and redesign of NTUC UPlay to improve user experience.",
        technologies: ["ReactJS", "JavaScript", "ASP.NET Core", "C#"],
        link: "#",
      },
    ],
    education: [
      {
        degree: "NYP Diploma in Information Technology",
        institution: "Nanyang Polytechnic",
        year: "2025",
        gpa: "3.95",
      },
      {
        degree: "GCE O-Level",
        institution: "St. Gabriel's Secondary School",
        year: "2021",
        grade: "L1R4: 9 NETT"
      },
    ],
    contact: {
      email: "gregorychua14@gmail.com",
      github: "https://github.com/gyasca",
      linkedin: "https://www.linkedin.com/in/gregory-achilles-chua-387628252/",
    },
  };

  return (
    <>
      <Paper sx={{ padding: 4, mb: 4 }}>
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
            variant="scrollable"
            scrollButtons="auto"
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
                  <Card sx={{borderRadius: "30px", padding: 3, backgroundColor: "rgba(39, 42, 16, 0.71)", fontWeight: "bold"}}>
                    <CardContent sx={{minHeight: "200px"}}>
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
                    secondary={`${edu.institution} | ${edu.year} ${
                      edu.gpa ? `| GPA: ${edu.gpa}` : ""
                    } ${
                      edu.grade ? `| O-Level Grade: ${edu.grade}` : ""
                    }`}
                  />
                </ListItem>
              ))}
            </List>
          )}
        </Box>
      </Paper>
    </>
  );
};

export default Portfolio;

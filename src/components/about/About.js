import React from "react";
import { Typography, Container, Grid, Box } from "@material-ui/core";
import AboutSkill from "./aboutSkill/AboutSkill";

const About = () => {
  return (
    <>
      <Container>
        <Grid container style={{ padding: "100px 0 70px" }}>
          <Grid item xs={12} md={6}>
            <Typography component="div">
              <Box>
                <Typography
                  variant="h4"
                  style={{ fontWeight: 500, textTransform: "uppercase" }}
                >
                  About Myself
                </Typography>
                <Typography
                  variant="body2"
                  color="textPrimary"
                  style={{
                    letterSpacing: "2.1px",
                    lineHeight: 1.6,
                    maxWidth: "90%",
                    padding: "20px 0",
                  }}
                >
                  You will begin to realise why this exercise is called the
                  Dickens Pattern (with reference to the ghost showing Scrooge
                  some different futures).You will begin to realise why this
                  exercise is called the Dickens Pattern (with reference to the
                  ghost showing Scrooge some different futures)
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6" style={{ paddingBottom: "10px" }}>
                  My Typing speed:
                </Typography>
                <a
                  href="http://keyhero.com/profile/nidhi74/?ba"
                  title="nidhi74's typing test profile"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://www.keyhero.com/static//badges/1462/typing-test-438657.png"
                    alt="nidhi74's typing test WPM"
                    style={{ verticalAlign: "middle" }}
                  />
                </a>
              </Box>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box pt={4}>
              <AboutSkill title="HTML5 and CSS3" value="95" />
              <AboutSkill title="Bootstrap" value="95" />
              <AboutSkill title="JavaScript" value="45" />
              <AboutSkill title="ReactJs" value="50" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default About;

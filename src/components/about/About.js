import React from "react";
import { Typography, Container, Grid, Box } from "@material-ui/core";
import AboutSkill from "./aboutSkill/AboutSkill";

const About = () => {
  return (
    <>
      <Container>
        <Grid container style={{ padding: "120px 0" }}>
          <Grid item xs={12} sm={5}>
            <Typography component="div">
              <Box
                fontSize="h4.fontSize"
                fontWeight={500}
                style={{ textTransform: "uppercase" }}
              >
                About Myself
              </Box>
              <Box
                fontSize="body2.fontSize"
                color="textPrimary"
                letterSpacing={1.5}
                my={2}
                lineHeight={1.5}
              >
                You will begin to realise why this exercise is called the
                Dickens Pattern (with reference to the ghost showing Scrooge
                some different futures).You will begin to realise why this
                exercise is called the Dickens Pattern (with reference to the
                ghost showing Scrooge some different futures)
              </Box>
              <Box>
                <Box component="h3">My Typing speed:</Box>
                <a
                  href="http://keyhero.com/profile/nidhi74/?ba"
                  title="nidhi74's typing test profile"
                  target="_blank"
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
          <Grid item xs={12} sm={7}>
            <Box pl={12} pt={1}>
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

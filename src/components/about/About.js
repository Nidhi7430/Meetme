import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography, Container } from "@material-ui/core";

const About = () => {
  return (
    <>
      <Container>
        <Grid container style={{ padding: "120px 0" }}>
          <Grid item xs={12} sm={5}>
            <Typography
              variant="h3"
              component="h3"
              style={{ fontWeight: "500", textTransform: "uppercase" }}
            >
              About Myself
            </Typography>
            <Typography
              variant="body2"
              color="textPrimary"
              style={{
                letterSpacing: "1.5px",
                margin: "15px 0",
                lineHeight: "1.5",
              }}
            >
              You will begin to realise why this exercise is called the Dickens
              Pattern (with reference to the ghost showing Scrooge some
              different futures).You will begin to realise why this exercise is
              called the Dickens Pattern (with reference to the ghost showing
              Scrooge some different futures)
            </Typography>
          </Grid>
          <Grid item xs={12} sm={7}></Grid>
        </Grid>
      </Container>
    </>
  );
};

export default About;

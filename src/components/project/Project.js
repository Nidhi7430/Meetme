import React from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Box,
} from "@material-ui/core";
import project from "../../images/project.webp";

const Project = () => {
  return (
    <>
      <Box py={8}>
        <Container>
          <Typography
            variant="h4"
            align="center"
            style={{
              fontWeight: 500,
              textTransform: "uppercase",
              paddingBottom: 25,
            }}
          >
            Our featured project
          </Typography>
          <Grid container justifyContent="center">
            <Grid item sm={4} xs={12}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={project}
                  alt="toysuniverse"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Toys Universe
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">View Source</Button>
                  <Button size="small">Visit Website</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Project;

import React from "react";
import {
  Container,
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardActions,
  makeStyles,
  Grid,
} from "@material-ui/core";
import project from "../../images/project.webp";
const useStyles = makeStyles({
  media: {
    height: 250,
    "&:hover": {
      backgroundColor: "rgba(7, 177, 77, 0.42)",
      //   opacity: "0.2",
    },
  },
  action: {
    position: "relative",
  },
});
const Project = () => {
  const classes = useStyles();
  return (
    <>
      <Container style={{ padding: 100 }}>
        <Box
          fontSize="h4.fontSize"
          fontWeight={500}
          style={{ textTransform: "uppercase" }}
          textAlign="center"
        >
          Our featured project
        </Box>
        <Grid container>
          <Grid item sm={4}>
            <Card>
              <CardActionArea className={classes.action}>
                <CardMedia
                  image={project}
                  title="Contemplative Reptile"
                  component="img"
                  className={classes.media}
                />
              </CardActionArea>
              <CardActions style={{ justifyContent: "center" }}>
                <h3 style={{ margin: 0 }}>Toys Universe</h3>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Project;

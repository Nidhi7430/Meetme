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
  Link,
} from "@material-ui/core";
import project from "../../images/project.webp";
const useStyles = makeStyles({
  media: {
    height: 250,
    zIndex: -3,
    "&:hover": {
      backgroundColor: "red",
      // opacity: "0.2",
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
      <Container style={{ padding: "100px 0" }}>
        <Box
          fontSize="h4.fontSize"
          fontWeight={500}
          style={{ textTransform: "uppercase" }}
          textAlign="center"
          pb={5}
        >
          Our featured project
        </Box>
        <Grid container style={{ justifyContent: "center" }}>
          <Grid item sm={4} xs={12}>
            <Card>
              <CardActionArea className={classes.action}>
                <CardMedia
                  image={project}
                  title="Contemplative Reptile"
                  // component="img"
                  className={classes.media}
                >
                  <Link href="https://www.toysuniverse.in/" target="_blank">
                    link
                  </Link>
                </CardMedia>
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

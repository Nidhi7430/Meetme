import React from "react";
import {
  makeStyles,
  Card,
  CardContent,
  CardMedia,
  Grid,
  List,
  Box,
  Typography,
  Container,
} from "@material-ui/core";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import linkedin from "../../../images/linkedin.png";
import github from "../../../images/github.png";
import portfolio1 from "../../../images/portfolio1.jpg";
import BannerCardList from "../bannerCardList/BannerCardList";

const useStyles = makeStyles({
  root: {
    maxWidth: 1170,
    position: "relative",
    bottom: "-50px",
    margin: "0 auto",
    minHeight: 400,
    padding: "40px",
    boxShadow: "0 0 10px 0 rgb(153,153,153)",
    borderRadius: "12px",
  },
  typography: {
    textTransform: "uppercase",
  },
});
// const theme = createTheme({
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       md: 960,
//       lg: 1280,
//       xl: 1920,
//     },
//   },
// });
const BannerCard = () => {
  const classes = useStyles();

  return (
    <>
      <Container>
        <Card className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={7}>
              <Box>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  image={portfolio1}
                  title="Protfolio image"
                  style={{ borderRadius: "12px" }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={5}>
              <Box pt={4} pl={6}>
                <CardContent>
                  <Typography component="div">
                    <Box
                      fontSize="subtitle1.fontSize"
                      color="textPrimary"
                      style={{ textTransform: "uppercase" }}
                      letterSpacing={2.1}
                    >
                      Hello everybody, i am
                    </Box>
                    <Box fontSize="h2.fontSize" fontWeight={500}>
                      Nidhi Patel
                    </Box>
                    <Box
                      fontSize="h6.fontSize"
                      color="textPrimary"
                      style={{ textTransform: "uppercase" }}
                      letterSpacing={2.1}
                    >
                      Frontend Developer
                    </Box>
                    <Box
                      fontSize="body2.fontSize"
                      color="textPrimary"
                      letterSpacing={1.5}
                      lineHeight={1.5}
                      my={3}
                    >
                      You will begin to realise why this exercise is called the
                      Dickens Pattern (with reference to the ghost showing
                      Scrooge some different futures).You will begin to realise
                      why this exercise is called the Dickens Pattern (with
                      reference to the ghost showing Scrooge some different
                      futures).
                    </Box>
                  </Typography>
                  <List component="nav" aria-label="contacts">
                    <BannerCardList
                      linkHref="mailto:nidhipatel439@gmail.com"
                      text="nidhipatel439@gmail.com"
                      icon={<MailOutlineIcon color="primary" />}
                    />
                    <BannerCardList
                      linkHref="https://www.linkedin.com/in/nidhi-patel-374b89b8"
                      text="linkedin.com/nidhipatel"
                      icon={
                        <img
                          src={linkedin}
                          style={{
                            width: "20px",
                            height: "20px",
                            position: "relative",
                            top: "-2px",
                            left: "3px",
                          }}
                          alt="linkedin"
                        />
                      }
                    />
                    <BannerCardList
                      linkHref="https://github.com/Nidhi7430"
                      text="github.com/nidhipatel"
                      icon={
                        <img
                          src={github}
                          style={{
                            width: "20px",
                            height: "20px",
                            position: "relative",
                            left: "3px",
                          }}
                          alt="github"
                        />
                      }
                    />
                  </List>
                </CardContent>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </>
  );
};

export default BannerCard;

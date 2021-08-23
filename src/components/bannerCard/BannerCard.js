import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import portfolio1 from "../../images/portfolio1.jpg";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CalendarTodayOutlinedIcon from "@material-ui/icons/CalendarTodayOutlined";
import CallOutlinedIcon from "@material-ui/icons/CallOutlined";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import Link from "@material-ui/core/Link";
import linkedin from "../../images/linkedin.png";
import github from "../../images/github.png";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles({
  root: {
    maxWidth: 1170,
    position: "relative",
    bottom: "-200px",
    margin: "0 auto",
    minHeight: 400,
    padding: "40px",
    boxShadow: "0 20px 80px 0 rgb(153,153,153)",
    borderRadius: "12px",
  },
});
const BannerCard = () => {
  const classes = useStyles();
  return (
    <>
      <Container>
        <Card className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={7}>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                image={portfolio1}
                title="Protfolio image"
                style={{ borderRadius: "12px" }}
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <CardContent style={{ paddingTop: "50px", paddingLeft: "50px" }}>
                <Typography
                  variant="subtitle1"
                  color="textPrimary"
                  style={{
                    textTransform: "uppercase",
                    letterSpacing: "2.1px",
                  }}
                >
                  Hello everybody, i am
                </Typography>
                <Typography
                  variant="h2"
                  component="h2"
                  style={{ fontWeight: "500", margin: "10px 0 5px" }}
                >
                  Nidhi Patel
                </Typography>
                <Typography
                  variant="h6"
                  component="h6"
                  color="textPrimary"
                  style={{
                    textTransform: "uppercase",
                    letterSpacing: "2.1px",
                  }}
                >
                  Frontend Developer
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
                  You will begin to realise why this exercise is called the
                  Dickens Pattern (with reference to the ghost showing Scrooge
                  some different futures).You will begin to realise why this
                  exercise is called the Dickens Pattern (with reference to the
                  ghost showing Scrooge some different futures)
                </Typography>
                <List component="nav" aria-label="contacts">
                  <ListItem style={{ paddingLeft: "0" }}>
                    <ListItemIcon>
                      <CalendarTodayOutlinedIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="7th April,1996" />
                  </ListItem>
                  <ListItem style={{ paddingLeft: "0" }}>
                    <ListItemIcon>
                      <CallOutlinedIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText>
                      <Link
                        href="tel:8511839581"
                        color="inherit"
                        style={{ textDecoration: "none" }}
                      >
                        +91 8511839581
                      </Link>
                    </ListItemText>
                  </ListItem>
                  <ListItem style={{ paddingLeft: "0" }}>
                    <ListItemIcon>
                      <MailOutlineIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText>
                      <Link
                        href="mailto:nidhipatel439@gmail.com"
                        color="inherit"
                        style={{ textDecoration: "none" }}
                      >
                        nidhipatel439@gmail.com
                      </Link>
                    </ListItemText>
                  </ListItem>
                  <ListItem style={{ paddingLeft: "0" }}>
                    <ListItemIcon>
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
                    </ListItemIcon>
                    <ListItemText>
                      <Link
                        href="https://www.linkedin.com/in/nidhi-patel-374b89b8"
                        color="inherit"
                        target="_blank"
                        style={{ textDecoration: "none" }}
                      >
                        linkedin.com/nidhipatel
                      </Link>
                    </ListItemText>
                  </ListItem>
                  <ListItem style={{ paddingLeft: "0" }}>
                    <ListItemIcon>
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
                    </ListItemIcon>
                    <ListItemText>
                      <Link
                        href="https://github.com/Nidhi7430"
                        color="inherit"
                        target="_blank"
                        style={{ textDecoration: "none" }}
                      >
                        github.com/nidhipatel
                      </Link>
                    </ListItemText>
                  </ListItem>
                </List>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </>
  );
};

export default BannerCard;

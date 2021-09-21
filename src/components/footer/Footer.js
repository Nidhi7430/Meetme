import React from "react";
import {
  Container,
  Grid,
  Box,
  Button,
  Icon,
  Link,
  ListItem,
  Typography,
  withStyles,
} from "@material-ui/core";
import linkedin1 from "../../images/linkedin1.png";
import facebook1 from "../../images/facebook1.png";
import twitter1 from "../../images/twitter1.png";

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF",
    marginBottom: 20,
  },
})(Typography);
const GrayTextTypography = withStyles({
  root: {
    color: "#777777",
    marginBottom: 20,
    width: "80%",
  },
})(Typography);

const Footer = () => {
  return (
    <>
      <Box style={{ backgroundColor: "#000" }} py={4}>
        <Container>
          <Grid container>
            <Grid item md={5} sm={6} xs={12}>
              <Box my={2}>
                <WhiteTextTypography variant="h6">About Me</WhiteTextTypography>
                <GrayTextTypography variant="body2">
                  Do you want to be even more successful? Learn to love learning
                  and growth. The more effort you put into improving your
                  skills,{" "}
                </GrayTextTypography>
                <GrayTextTypography variant="body2">
                  Copyright ©2021 All rights reserved
                </GrayTextTypography>
              </Box>
            </Grid>
            <Grid item md={5} sm={6} xs={12}>
              <Box my={2}>
                <WhiteTextTypography variant="h6">Email Me</WhiteTextTypography>
                <div className="form-control">
                  <input
                    name="email"
                    placeholder="Enter Email Address"
                    type="email"
                    style={{
                      width: "60%",
                      height: "40px",
                      background: "transparent",
                      border: "1px solid #1e233b",
                      color: "#fff",
                      padding: "0 20px",
                    }}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    endIcon={<Icon>send</Icon>}
                    size="large"
                    style={{
                      minWidth: "30px",
                      padding: "10px 10px 10px 5px",
                      margin: "0",
                      backgroundImage:
                        "linear-gradient(90deg, #766dff 0%, #88f3ff 100%)",
                    }}
                  ></Button>
                </div>
              </Box>
            </Grid>
            <Grid item md={2} sm={6} xs={12}>
              <Box my={2}>
                <WhiteTextTypography variant="h6">
                  Follow Me
                </WhiteTextTypography>
                <GrayTextTypography variant="body2">
                  Let us be social
                </GrayTextTypography>
                <ListItem disableGutters style={{ padding: 0 }}>
                  <Link
                    href="https://www.linkedin.com/in/nidhi-patel-374b89b8"
                    target="_blank"
                    style={{ margin: "0 7px 0 0" }}
                  >
                    <img src={linkedin1} alt="linkedin" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/nidhi-patel-374b89b8"
                    target="_blank"
                    style={{ margin: "0 7px" }}
                  >
                    <img src={twitter1} alt="twitter" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/nidhi-patel-374b89b8"
                    target="_blank"
                    style={{ margin: "0 7px" }}
                  >
                    <img src={facebook1} alt="facebook" />
                  </Link>
                </ListItem>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Footer;

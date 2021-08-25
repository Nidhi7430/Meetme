import React from "react";
import {
  Container,
  Grid,
  Box,
  Button,
  Icon,
  Link,
  ListItem,
} from "@material-ui/core";
import linkedin1 from "../../images/linkedin1.png";
import facebook1 from "../../images/facebook1.png";
import twitter1 from "../../images/twitter1.png";

const Footer = () => {
  return (
    <>
      <Box style={{ backgroundColor: "#000" }} py={10}>
        <Container>
          <Grid container>
            <Grid item sm={5} xs={12}>
              <Box fontSize="h6.fontSize" fontWeight="500" color="#fff" mb={3}>
                About Me
              </Box>
              <Box
                fontSize="body2.fontSize"
                color="#777777"
                mb={3}
                lineHeight="1.8"
                mr={5}
              >
                Do you want to be even more successful? Learn to love learning
                and growth. The more effort you put into improving your skills,
              </Box>
              <Box fontSize="body2.fontSize" color="#777777">
                Copyright ©2021 All rights reserved
              </Box>
            </Grid>
            <Grid item sm={5} xs={12}>
              <Box fontSize="h6.fontSize" fontWeight="500" color="#fff" mb={3}>
                Email Me
              </Box>
              <div className="form-control" style={{ marginTop: "30px" }}>
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
            </Grid>
            <Grid item sm={2} xs={12}>
              <Box fontSize="h6.fontSize" fontWeight="500" color="#fff" mb={3}>
                Follow Me
              </Box>
              <Box fontSize="body2.fontSize" color="#777777" lineHeight="1.8">
                Let us be social
              </Box>
              <Box>
                <ListItem disableGutters>
                  <Link
                    href="https://www.linkedin.com/in/nidhi-patel-374b89b8"
                    target="_blank"
                    style={{ margin: "5px" }}
                  >
                    <img src={linkedin1} alt="linkedin" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/nidhi-patel-374b89b8"
                    target="_blank"
                    style={{ margin: "5px" }}
                  >
                    <img src={twitter1} alt="twitter" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/nidhi-patel-374b89b8"
                    target="_blank"
                    style={{ margin: "5px" }}
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

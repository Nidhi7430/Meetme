import React from "react";
import { AppBar, Tabs, Tab, Box, Container } from "@material-ui/core";
import Education from "./education/Education";
import Experience from "./experience/Experience";

const Profile = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box
        style={{
          backgroundImage: "linear-gradient(90deg, #766dff 0%, #88f3ff 100%)",
        }}
        py={10}
      >
        <Container>
          <AppBar
            position="static"
            style={{ background: "transparent", boxShadow: "none" }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
              centered
            >
              <Tab
                label="My Experience"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "5px",
                  margin: "10px",
                }}
              />
              <Tab
                label="My Education"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "5px",
                  margin: "10px",
                }}
              />
            </Tabs>
          </AppBar>
          <Experience value={value} index={0} />
          <Education value={value} index={1} />
        </Container>
      </Box>
    </>
  );
};

export default Profile;

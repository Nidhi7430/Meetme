import React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Tabs,
  Tab,
  Typography,
  Box,
  Container,
  Grid,
  Slider,
  withStyles,
} from "@material-ui/core";

function valuetext(value) {
  return `${value}°C`;
}

const marks = [
  {
    value: 0,
    label: "Front end developer",
  },
  {
    value: 20,
    label: "digital",
  },
  {
    value: 37,
    label: "37°C",
  },
  {
    value: 100,
    label: "100°C",
  },
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const PrettoSlider = withStyles({
  thumb: {
    minHeight: 10,
    minWidth: 10,
    backgroundColor: "rgba(255, 255, 255,0.7)",
  },
  track: {
    display: "none",
  },
  rail: {
    height: 50,
    borderRadius: 10,
    minWidth: "20%",
    background: "rgba(255, 255, 255,0.6)",
  },
})(Slider);
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
                {...a11yProps(0)}
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "5px",
                  margin: "10px",
                }}
              />
              <Tab
                label="My Education"
                {...a11yProps(1)}
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "5px",
                  margin: "10px",
                }}
              />
            </Tabs>
          </AppBar>

          <TabPanel value={value} index={0}>
            {/* <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            style={{ textAlign: "center" }}
          >
            <Grid item sm={3} style={{ textAlign: "right" }}>
              November 2018 to January 2020
            </Grid>
            <Grid item sm={1}>
              <PrettoSlider
                disabled
                orientation="vertical"
                defaultValue={50}
                aria-labelledby="vertical-slider"
                style={{ height: 180 }}
              />
            </Grid>
            <Grid item sm={3} style={{ textAlign: "left" }}>
              <Box
                fontSize="subtitle1.fontSize"
                color="textPrimary"
                style={{ textTransform: "uppercase" }}
                letterSpacing={2.1}
                mb={1}
                fontWeight={500}
              >
                Frontend Developer
              </Box>
              <Box
                fontSize="subtitle2.fontSize"
                color="textPrimary"
                letterSpacing={1.8}
                mb={1}
              >
                (Digital Science Web Technologies)
              </Box>
              <Box fontSize="body2.fontSize" color="textPrimary">
                - Developing Front-End mock-ups and design based on client’s
                requirements.
              </Box>
              <Box fontSize="body2.fontSize" color="textPrimary">
                - Implementing responsive and mobile first approach in web
                design.
              </Box>
            </Grid>
          </Grid> */}
            <Slider
              orientation="vertical"
              defaultValue={[20, 37]}
              aria-labelledby="vertical-slider"
              getAriaValueText={valuetext}
              marks={marks}
              disabled
              style={{ height: "300px" }}
            />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              style={{ textAlign: "center" }}
            >
              <Grid item sm={3} style={{ textAlign: "right" }}>
                2017
              </Grid>
              <Grid item sm={1}>
                <PrettoSlider
                  disabled
                  orientation="vertical"
                  defaultValue={50}
                  aria-labelledby="vertical-slider"
                  style={{ height: 180 }}
                />
              </Grid>
              <Grid item sm={3} style={{ textAlign: "left" }}>
                <Box
                  fontSize="subtitle1.fontSize"
                  color="textPrimary"
                  style={{ textTransform: "uppercase" }}
                  letterSpacing={1.6}
                  mb={1}
                  fontWeight={500}
                >
                  Bachelor of Engineering : I.T
                </Box>
                <Box
                  fontSize="subtitle2.fontSize"
                  color="textPrimary"
                  letterSpacing={1.8}
                  mb={1}
                >
                  (Vishwakarma Government Engineering College (GTU))
                </Box>
                <Box fontSize="body2.fontSize" color="textPrimary">
                  Aggregate : 7.73
                </Box>
              </Grid>
            </Grid>
          </TabPanel>
        </Container>
      </Box>
    </>
  );
};

export default Profile;

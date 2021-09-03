import React from "react";
import { Grid, Box, Slider, withStyles } from "@material-ui/core";
import TabPanel from "../../tabPanel/TabPanel";

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

const Education = (props) => {
  return (
    <>
      <TabPanel value={props.value} index={props.index}>
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
    </>
  );
};

export default Education;

import React from "react";
import { Box, Typography, Slider, withStyles } from "@material-ui/core";

const PrettoSlider = withStyles({
  root: {
    border: "1px solid #eee",
    padding: "5px 0",
    height: 12,
    borderRadius: 10,
  },
  thumb: { display: "none" },
  track: {
    height: 12,
    borderRadius: 10,
    backgroundImage: "linear-gradient(90deg,#766dff 0%,#88f3ff 100%)",
  },
  rail: {
    height: 12,
    borderRadius: 10,
  },
})(Slider);
const AboutSkill = (props) => {
  return (
    <>
      <Box mb={2}>
        <Typography
          id="disabled-slider"
          gutterBottom
          style={{ fontWeight: 500 }}
        >
          {props.title}
        </Typography>
        <PrettoSlider
          disabled
          aria-label="pretto slider"
          defaultValue={props.value}
        />
      </Box>
    </>
  );
};

export default AboutSkill;

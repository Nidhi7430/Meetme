import React from "react";
import { Slider, withStyles } from "@material-ui/core";

const PrettoSlider = withStyles({
  thumb: {
    minHeight: 10,
    minWidth: 10,
    backgroundColor: "rgba(255, 255, 255,0.7)",
  },
  rail: {
    height: 50,
    borderRadius: 10,
    minWidth: "20%",
    background: "rgba(255, 255, 255,0.6)",
  },
})(Slider);
const ProfileSlider = (props) => {
  return (
    <>
      <PrettoSlider
        orientation="vertical"
        min={0}
        max={100}
        disabled
        defaultValue={props.marks.map((x) => x.value)}
        marks={props.marks}
        track={false}
      />
    </>
  );
};

export default ProfileSlider;

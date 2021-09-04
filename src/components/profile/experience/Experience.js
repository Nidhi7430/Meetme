import React from "react";
import TabPanel from "../../tabPanel/TabPanel";
import { makeStyles, withStyles, Box, Slider } from "@material-ui/core";
import ProfileList from "../profileList/ProfileList";

const useStyles = makeStyles({
  root: {
    height: 170,
  },
});
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
const marks = [
  {
    value: 50,
    label: (
      <ProfileList
        year="Nov.2018 to Jan.2020"
        field="Front End Developer"
        college="(Digital Science Web Technologies)"
        mark="Ahmedabad, India"
      />
    ),
  },
];
const Experience = (props) => {
  const classes = useStyles();

  return (
    <>
      <TabPanel value={props.value} index={props.index}>
        <Box direction="row" style={{ textAlign: "center" }} marginRight={-3}>
          <div className={classes.root}>
            <PrettoSlider
              orientation="vertical"
              min={0}
              max={100}
              disabled
              defaultValue={marks.map((x) => x.value)}
              marks={marks}
              track={false}
            />
          </div>
        </Box>
      </TabPanel>
    </>
  );
};

export default Experience;

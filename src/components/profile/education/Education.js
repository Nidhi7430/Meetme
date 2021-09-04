import React from "react";
import TabPanel from "../../tabPanel/TabPanel";
import { makeStyles, withStyles, Box, Slider } from "@material-ui/core";
import ProfileList from "../profileList/ProfileList";

const useStyles = makeStyles({
  root: {
    height: 350,
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
    value: 15,
    label: (
      <ProfileList
        year="2011"
        field="S.S.C"
        college="(M.B.Patel High School (G.S.E.B))"
        mark="Percentile Rank : 99.54"
      />
    ),
  },
  {
    value: 50,
    label: (
      <ProfileList
        year="2013"
        field="H.S.C (science)"
        college="(M.B.Patel High School (G.S.H.E.B))"
        mark="Percentile Rank : 76.42"
      />
    ),
  },

  {
    value: 85,
    label: (
      <ProfileList
        year="2017"
        field="Bachelor of Engineering : I.T"
        college="(Vishwakarma Government Engineering College (GTU))"
        mark="Aggregate : 7.73"
      />
    ),
  },
];
const Education = (props) => {
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

export default Education;

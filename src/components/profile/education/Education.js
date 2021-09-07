import React from "react";
import TabPanel from "../../tabPanel/TabPanel";
import { makeStyles, Box } from "@material-ui/core";
import ProfileList from "../profileList/ProfileList";
import ProfileSlider from "../profileslider/ProfileSlider";

const useStyles = makeStyles({
  root: {
    height: 350,
  },
});
const marks = [
  {
    value: 15,
    label: (
      <ProfileList
        year="2011"
        field="S.S.C"
        college="(M.B.Patel High School (G.S.E.B))"
        result="Percentile Rank : 99.54"
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
        result="Percentile Rank : 76.42"
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
        result="Aggregate : 7.73"
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
            <ProfileSlider marks={marks} />
          </div>
        </Box>
      </TabPanel>
    </>
  );
};

export default Education;

import React from "react";
import TabPanel from "../../tabPanel/TabPanel";
import { makeStyles, Box } from "@material-ui/core";
import ProfileList from "../profileList/ProfileList";
import ProfileSlider from "../profileslider/ProfileSlider";

const useStyles = makeStyles({
  root: {
    height: 170,
  },
});

const marks = [
  {
    value: 50,
    label: (
      <ProfileList
        year="Nov.2018 to Jan.2020"
        field="Front End Developer"
        company="Digital Science Web Technologies"
        location="Ahmedabad, India"
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
            <ProfileSlider marks={marks} />
          </div>
        </Box>
      </TabPanel>
    </>
  );
};

export default Experience;

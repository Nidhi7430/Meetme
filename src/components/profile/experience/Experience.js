import React from "react";
import TabPanel from "../../tabPanel/TabPanel";
import { makeStyles, Typography, Box, Grid, Slider } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    height: 300,
  },
});

const marks = [
  {
    value: 25,
    label: (
      <>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          style={{ position: "absolute", left: -75, top: -40 }}
        >
          <Box marginRight={4} style={{ backgroundColor: "red" }}>
            2017
          </Box>
          {/* <Box width={60}></Box> */}
          <Box marginLeft={4} style={{ backgroundColor: "red" }}>
            <p>GEC Gandhinagar</p>
            <p>GEC Gandhinagar</p>
          </Box>
        </Box>
      </>
    ),
  },
  {
    value: 75,
    label: <h2>World</h2>,
  },

  {
    value: 90,
    label: <h2>Nidhi</h2>,
  },
];
const Experience = (props) => {
  const classes = useStyles();

  return (
    <>
      <TabPanel value={props.value} index={props.index}>
        <Box
          direction="row"
          justifyContent="center"
          alignItems="center"
          style={{ textAlign: "center" }}
        >
          <div className={classes.root}>
            <Slider
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

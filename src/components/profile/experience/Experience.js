import React from "react";
import TabPanel from "../../tabPanel/TabPanel";
import { makeStyles, Typography, Slider } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    height: 300,
  },
});

function valuetext(value) {
  return `${value}°C`;
}

const marks = [
  {
    value: 0,
    label: "0°C",
  },
  {
    value: 20,
    label: "20°C",
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
const Experience = (props) => {
  const classes = useStyles();
  const temp = () => <div>hello</div>;

  return (
    <>
      <TabPanel value={props.value} index={props.index}>
        <React.Fragment>
          <div className={classes.root}>
            <Slider
              orientation="vertical"
              defaultValue={[20, 37]}
              aria-labelledby="vertical-slider"
              getAriaValueText={valuetext}
              marks={marks}
              ThumbComponent={temp}
            />
          </div>
        </React.Fragment>
      </TabPanel>
    </>
  );
};

export default Experience;

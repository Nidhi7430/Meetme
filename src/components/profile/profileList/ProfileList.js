import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import WorkOutlineOutlinedIcon from "@material-ui/icons/WorkOutlineOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import SchoolOutlinedIcon from "@material-ui/icons/SchoolOutlined";
import DescriptionIcon from "@material-ui/icons/Description";

const useStyles = makeStyles((theme) => ({
  profileText: {
    margin: "5px 0",
  },
  profileTitle: {
    margin: "5px 0",
    textTransform: "uppercase",
    fontWeight: 500,
  },
  profileIcon: { marginRight: 7 },
  profileBody: { [theme.breakpoints.down("sm")]: { whiteSpace: "normal" } },
}));

const ProfileList = (props) => {
  const classes = useStyles();
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        style={{ position: "absolute", left: -118, top: -42 }}
      >
        <Box marginRight={4} width={76} whiteSpace="normal" textAlign="right">
          <Typography variant="body2">{props.year}</Typography>
        </Box>
        <Box marginLeft={4} textAlign="left" className={classes.profileBody}>
          <Typography variant="h6" className={classes.profileTitle}>
            {props.field}
          </Typography>
          {props.company && (
            <Box display="flex" alignItems="center">
              <WorkOutlineOutlinedIcon
                fontSize="small"
                className={classes.profileIcon}
              />
              <Typography variant="body2" className={classes.profileText}>
                {props.company}
              </Typography>
            </Box>
          )}
          {props.location && (
            <Box display="flex" alignItems="center">
              <LocationOnOutlinedIcon
                fontSize="small"
                className={classes.profileIcon}
              />
              <Typography variant="body2" className={classes.profileText}>
                {props.location}
              </Typography>
            </Box>
          )}
          {props.college && (
            <Box display="flex" alignItems="center">
              <SchoolOutlinedIcon
                fontSize="small"
                className={classes.profileIcon}
              />
              <Typography variant="body2" className={classes.profileText}>
                {props.college}
              </Typography>
            </Box>
          )}
          {props.result && (
            <Box display="flex" alignItems="center">
              <DescriptionIcon
                fontSize="small"
                className={classes.profileIcon}
              />
              <Typography variant="body2" className={classes.profileText}>
                {props.result}
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default ProfileList;

import React from "react";
import { Box } from "@material-ui/core";
// import WorkIcon from "@material-ui/icons/Work";
import WorkOutlineOutlinedIcon from "@material-ui/icons/WorkOutlineOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import SchoolOutlinedIcon from "@material-ui/icons/SchoolOutlined";
import DescriptionIcon from "@material-ui/icons/Description";

const ProfileList = (props) => {
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        style={{ position: "absolute", left: -118, top: -42 }}
      >
        <Box marginRight={4} width={76} whiteSpace="normal" textAlign="right">
          {props.year}
        </Box>
        <Box marginLeft={4} textAlign="left">
          <h3
            style={{
              margin: "5px 0",
              textTransform: "uppercase",
              whiteSpace: "normal",
            }}
          >
            {props.field}
          </h3>
          {props.company && (
            <Box display="flex" alignItems="center">
              <WorkOutlineOutlinedIcon
                fontSize="small"
                style={{ marginRight: 7 }}
              />
              <p
                style={{
                  margin: "5px 0",
                  whiteSpace: "normal",
                }}
              >
                {props.company}
              </p>
            </Box>
          )}
          {props.location && (
            <Box display="flex" alignItems="center">
              <LocationOnOutlinedIcon
                fontSize="small"
                style={{ marginRight: 7 }}
              />
              <p style={{ margin: "5px 0", whiteSpace: "normal" }}>
                {props.location}
              </p>
            </Box>
          )}
          {props.college && (
            <Box display="flex" alignItems="center">
              <SchoolOutlinedIcon fontSize="small" style={{ marginRight: 7 }} />
              <p style={{ margin: "5px 0", whiteSpace: "normal" }}>
                {props.college}
              </p>
            </Box>
          )}
          {props.result && (
            <Box display="flex" alignItems="center">
              <DescriptionIcon fontSize="small" style={{ marginRight: 7 }} />
              <p style={{ margin: "5px 0", whiteSpace: "normal" }}>
                {props.result}
              </p>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default ProfileList;

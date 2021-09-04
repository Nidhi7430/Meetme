import React from "react";
import { Box } from "@material-ui/core";

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
          <h3 style={{ margin: "5px 0", textTransform: "uppercase" }}>
            {props.field}
          </h3>
          <p style={{ margin: "5px 0" }}>{props.college}</p>
          <p style={{ margin: "5px 0" }}>{props.mark}</p>
          <p style={{ margin: "5px 0" }}>{props.mark1}</p>
          <p style={{ margin: "5px 0" }}>{props.mark2}</p>
        </Box>
      </Box>
    </>
  );
};

export default ProfileList;

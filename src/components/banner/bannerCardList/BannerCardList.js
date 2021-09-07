import React from "react";
import { ListItem, ListItemIcon, ListItemText, Link } from "@material-ui/core";

const BannerCardList = (props) => {
  return (
    <>
      <ListItem disableGutters>
        <ListItemIcon>{props.icon}</ListItemIcon>
        <ListItemText>
          <Link href={props.linkHref} color="inherit" underline="none">
            {props.text}
          </Link>
        </ListItemText>
      </ListItem>
    </>
  );
};

export default BannerCardList;

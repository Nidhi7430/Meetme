import React from "react";
import { Typography } from "@material-ui/core";
import BannerCard from "../bannerCard/BannerCard";

const Banner = () => {
  return (
    <>
      <Typography
        component="div"
        style={{
          position: "relative",
          width: "100%",
          backgroundImage:
            "linear-gradient(90deg, rgb(118, 109, 255) 0%, rgb(136, 243, 255) 100%)",
          marginBottom: "200px",
        }}
      >
        <BannerCard />
      </Typography>
    </>
  );
};

export default Banner;

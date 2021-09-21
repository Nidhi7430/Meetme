import React from "react";
import { Box } from "@material-ui/core";
import BannerCard from "./bannerCard/BannerCard";

const Banner = () => {
  return (
    <>
      <Box
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgb(118, 109, 255) 0%, rgb(136, 243, 255) 100%)",
          // marginBottom: "50px",
        }}
        position="relative"
        width="100%"
      >
        <BannerCard />
      </Box>
    </>
  );
};

export default Banner;

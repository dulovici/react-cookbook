/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

const Slide = ({ url }: any) => {
  return (
    <img style={{ width: "200px", height: "150px" }} src={url} alt="slide" />
  );
};

export default Slide;

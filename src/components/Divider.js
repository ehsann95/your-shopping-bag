import React from "react";

const Divider = ({ height, width }) => {
  return (
    <div
      className="container my-3"
      style={{
        height: height,
        width: width,
        backgroundColor: "#d9d9d9",
      }}
    ></div>
  );
};

export default Divider;

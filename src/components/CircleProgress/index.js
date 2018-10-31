import React from "react";
import CircularProgress from "material-ui/CircularProgress";

const CircleProgress = props => {
  return (
    <div style={{ ...props.style, textAlign: "center" }}>
      <CircularProgress size={25} color="#fd7a46" />
    </div>
  );
};

export default CircleProgress;

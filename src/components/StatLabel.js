import React from "react";

const StatLabel = (props) => {
  const { icon, status } = props.data;
  return (
    <p className="stat">
      <span className={`icon ${icon}`}></span>
      {status}
    </p>
  );
};

export default StatLabel;

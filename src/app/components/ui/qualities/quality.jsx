import React from "react";
import PropTypes from "prop-types";

const Quality = ({ color, name }) => {
  const getQualityClasses = (color) => {
    const classes = `badge bg-${color} m-2`;
    return classes;
  };

  return (
    <>
      <span className={getQualityClasses(color)}>{name}</span>
    </>
  );
};

Quality.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Quality;

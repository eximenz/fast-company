import React from "react";
import PropTypes from "prop-types";

const Qualitie = ({ color, name }) => {
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

Qualitie.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Qualitie;

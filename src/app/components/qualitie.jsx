import React from 'react';

const Qualitie = ({ color, name }) => {

  const getQualityClasses = (color) => {
    let classes = `badge bg-${color} m-2`;
    return classes;
  };

  return (
    <>
      <span 
        className={getQualityClasses(color)}
      >
        {name}
      </span>
    </>
  )
};

export default Qualitie;
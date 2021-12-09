import React from 'react';
// import Qualitie from "./qualitie";
// import BookMark from "./bookmark";

const User = (props) => {

  const getQualityClasses = (color) => {
    let classes = `badge bg-${color} m-2`;
    return classes;
  };

  return (
    <>
      <td>
        {props.name}
      </td>
      <td>
        {props.qualities.map((quality) => {
          return <span 
            key={quality._id}
            className={getQualityClasses(quality.color)}
          >
            {quality.name}
          </span>
        })}
      </td>
      <td>
        {props.profession.name}
      </td>
      <td>
        {props.completedMeetings}
      </td>
      <td>
        {props.rate}
      </td>
      <td>

      </td>
    </>
  )
}

export default User;
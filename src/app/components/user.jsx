import React from 'react';
import Qualitie from "./qualitie";
// import BookMark from "./bookmark";

const User = ({name, qualities, profession, completedMeetings, rate}) => {

  return (
    <>
      <td>
        {name}
      </td>
      <td>
        {qualities.map((quality) => (
          <Qualitie
            key={quality._id}
            {...quality}
          />
        ))}
      </td>
      <td>
        {profession.name}
      </td>
      <td>
        {completedMeetings}
      </td>
      <td>
        {rate}
      </td>
      <td>

      </td>
    </>
  )
}

export default User;
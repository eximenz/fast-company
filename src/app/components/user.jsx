import React from 'react';
import Qualitie from "./qualitie";
import BookMark from "./bookmark";

const User = ({name, qualities, profession, completedMeetings, rate, bookmark, onToggle, _id}) => {

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
        <BookMark
          id = {_id}
          status = {bookmark}
          onToggle = {onToggle}
          />
      </td>
    </>
  )
}

export default User;
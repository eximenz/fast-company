import React from 'react';
import Qualitie from './qualitie';
import BookMark from './bookmark';
import PropTypes from 'prop-types';

const User = ({
  name,
  qualities,
  profession,
  completedMeetings,
  rate,
  bookmark,
  onToggle,
  _id,
}) => {
  return (
    <>
      <td>{name}</td>
      <td>
        {qualities.map((quality) => (
          <Qualitie key={quality._id} {...quality} />
        ))}
      </td>
      <td>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate}</td>
      <td>
        <BookMark id={_id} status={bookmark} onToggle={onToggle} />
      </td>
    </>
  );
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  qualities: PropTypes.array.isRequired,
  profession: PropTypes.object.isRequired,
  completedMeetings: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
  bookmark: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  _id: PropTypes.string.isRequired,
};

export default User;

import React from 'react';
import PropTypes from 'prop-types';

const BookMark = ({ status, onToggle, id }) => {
  const toggleI = () => {
    if (status === true) {
      return <i className='bi bi-bookmark-fill'></i>;
    }

    return <i className='bi bi-bookmark'></i>;
  };

  return (
    <>
      <button onClick={() => onToggle(id)}>{toggleI()}</button>
    </>
  );
};

BookMark.propTypes = {
  status: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default BookMark;

import React from 'react';

const BookMark = ({ status, onToggle, id }) => {

  const toggleI = () => {
    if (status === true) {
      return <i className="bi bi-bookmark-fill"></i>;
    }

    return <i className="bi bi-bookmark"></i>;
  }

  return (
    <>
      <button
        onClick={()=> onToggle(id)}
      >
        {toggleI()}
      </button>
    </>
  )
};

export default BookMark;
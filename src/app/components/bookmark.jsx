import React from "react";
import PropTypes from "prop-types";

const BookMark = ({ status, ...rest }) => {
  const toggleI = () => {
    if (status === true) {
      return <i className="bi bi-bookmark-fill"></i>;
    }

    return <i className="bi bi-bookmark"></i>;
  };

  return (
    <>
      <button {...rest}>{toggleI()}</button>
    </>
  );
};

BookMark.propTypes = {
  status: PropTypes.bool.isRequired,
};

export default BookMark;

import React from 'react';
import PropTypes from 'prop-types';

const SearchStatus = ({ length }) => {
  const renderPhrase = (number) => {
    const message =
      number >= 2 && number <= 4 ? 'человека тусанут' : 'человек тусанет';

    return `${number} ${message} с тобой сегодня`;
  };

  return (
    <>
      <span className='badge bg-primary m-2'>{renderPhrase(length)}</span>
    </>
  );
};

SearchStatus.propTypes = {
  length: PropTypes.number.isRequired,
};

export default SearchStatus;

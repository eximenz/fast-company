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
      <span
        className={'badge ' + (length > 0 ? 'bg-primary' : 'bg-danger')}
      >
        {length > 0
          ? renderPhrase(length)
          : 'Никто с тобой не тусанет'}
      </span>
    </>
  );
};

SearchStatus.propTypes = {
  length: PropTypes.number.isRequired,
};

export default SearchStatus;

import React from 'react';

const SearchStatus = ({ length }) => {

  const renderPhrase = (number) => {
    let message = (number >=2 && number <=4) ? "человека тусанут" : "человек тусанет";

    return `${number} ${message} с тобой сегодня`;
  };

  return (
    <>
      <span
        className="badge bg-primary m-2"
      >
        {renderPhrase(length)}
      </span>
    </>
  )
};

export default SearchStatus;
import React, { useState } from "react";
import PropTypes from "prop-types";

const SearchForm = ({ onGetValue }) => {
  const [value, setValue] = useState();

  return (
    <form className="d-flex mb-3 mt-3">
      <input
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className="form-control me-2"
        type="search"
        name="searchForm"
        placeholder="Введите имя"
        aria-label="Search"
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          onGetValue(value);
        }}
        className="btn btn-outline-secondary"
        type="submit"
      >
        Найти
      </button>
    </form>
  );
};

SearchForm.propTypes = {
  onGetValue: PropTypes.func,
};

export default SearchForm;

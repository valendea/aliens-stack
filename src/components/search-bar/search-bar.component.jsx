import React from 'react';

import './search-bar.styles.css';

export const SearchBar = ({ placeholder, handleChange }) => {
  return (
    <input
      type="search"
      className="search-bar"
      placeholder={placeholder}
      onChange={handleChange}
    />
  )
}
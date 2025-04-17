import React, { useState } from 'react';
import './Search.css'

const Search = ({ searchQuery, handleSearchChange }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchChange}
        id='search'
      />
    </div>
  );
};


export default Search;

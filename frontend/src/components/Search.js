import React from "react";

function Search({ search, onSearchChange }) {
  return (
    <div className="filter">
      <input 
        id="search-bar" 
        type="text" 
        placeholder="Search Notes" 
        value={search}
        onChange={e => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default Search;

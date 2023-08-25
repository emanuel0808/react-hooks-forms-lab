import React, { useState } from 'react';

function Filter({ search, onSearchChange }) {
  const [searchText, setSearchText] = useState(search);

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
          onSearchChange(e.target.value);
        }}
      />
    </div>
  );
}

export default Filter;

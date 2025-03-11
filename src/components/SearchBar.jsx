import React, { useState } from 'react';
import { TextField } from '@mui/material';

const SearchBar = ({ onSearch }) => {
  // State to manage the search query
  const [query, setQuery] = useState('');

  // Function to handle changes in the search input
  const handleSearch = (e) => {
    // Update the query state with the new input value
    setQuery(e.target.value);

    // Call the `onSearch` function passed as a prop with the new query
    onSearch(e.target.value);
  };

  return (
    // Material-UI TextField component for the search bar
    <TextField
      label="Search Tasks"
      fullWidth
      value={query}
      onChange={handleSearch}
      sx={{ marginBottom: 2 }}
    />
  );
};

export default SearchBar;
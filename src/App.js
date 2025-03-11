import React, { useState } from 'react';
import { Box } from '@mui/material';
import KanbanBoard from './components/KanbanBoard';
import AddTaskButton from './components/AddTaskButton';
import SearchBar from './components/SearchBar';
import ResetButton from './components/ResetButton';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Box p={4}>
      {/* Search Bar */}
      <SearchBar onSearch={handleSearch} />

      {/* Kanban Board */}
      <KanbanBoard searchQuery={searchQuery} />

      {/* Buttons Container */}
      <Box
        display="flex"
        justifyContent="center" // Center the buttons horizontally
        gap={2} // Add gap between buttons
        mt={2} // Add margin at the top
      >
        {/* Add Task Button */}
        <AddTaskButton />

        {/* Reset Button */}
        <ResetButton />
      </Box>
    </Box>
  );
};

export default App;
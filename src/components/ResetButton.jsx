import React from 'react';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { resetTasks } from '../redux/tasksSlice';

const ResetButton = () => {
  // Access the Redux dispatch function
  const dispatch = useDispatch();

  // Function to handle the reset button click
  const handleReset = () => {
    // Dispatch the resetTasks action to clear all tasks
    dispatch(resetTasks());
  };

  return (
    // Material-UI Button component
    <Button variant="contained" color="secondary" onClick={handleReset}>
      Reset Tasks
    </Button>
  );
};

export default ResetButton;
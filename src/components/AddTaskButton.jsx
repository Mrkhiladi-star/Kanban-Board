import React, { useState } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/tasksSlice';

const AddTaskButton = () => {
  // State to manage the dialog's open/close state
  const [open, setOpen] = useState(false);

  // State to manage the task title input
  const [title, setTitle] = useState('');

  // State to manage the task description input
  const [description, setDescription] = useState('');

  // Redux dispatch function to trigger actions
  const dispatch = useDispatch();

  // Function to handle adding a new task
  const handleAddTask = () => {
    // Create a new task object with a unique ID, title, and description
    const newTask = { id: Date.now().toString(), title, description };

    // Dispatch the 'addTask' action to add the new task to the 'todo' column
    dispatch(addTask({ column: 'todo', task: newTask }));

    // Close the dialog and reset the input fields
    setOpen(false);
    setTitle('');
    setDescription('');
  };

  return (
    <>
      {/* Button to open the dialog */}
      <Button variant="contained" onClick={() => setOpen(true)}>
        Add Task
      </Button>

      {/* Dialog for adding a new task */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add New Task</DialogTitle>
        <DialogContent>
          {/* Input field for the task title */}
          <TextField
            label="Title"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            sx={{ marginBottom: 2 }}
          />

          {/* Input field for the task description */}
          <TextField
            label="Description"
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          {/* Button to cancel and close the dialog */}
          <Button onClick={() => setOpen(false)}>Cancel</Button>

          {/* Button to add the task and close the dialog */}
          <Button onClick={handleAddTask}>Add</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddTaskButton;
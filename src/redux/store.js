import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';

// Create the Redux store
export const store = configureStore({
  reducer: {
    // Register the tasks reducer under the 'tasks' slice
    tasks: tasksReducer,
  },
});
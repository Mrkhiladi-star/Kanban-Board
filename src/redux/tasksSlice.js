import { createSlice } from '@reduxjs/toolkit';

// Load tasks from localStorage (if they exist)
const loadTasksFromLocalStorage = () => {
  const tasks = localStorage.getItem('tasks');
  return tasks ? JSON.parse(tasks) : {
    todo: [],
    inProgress: [],
    peerReview: [],
    done: [],
  };
};

// Save tasks to localStorage
const saveTasksToLocalStorage = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Initialize state with tasks from localStorage
const initialState = {
  tasks: loadTasksFromLocalStorage(),
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    // Reducer to add a new task
    addTask: (state, action) => {
      const { column, task } = action.payload;
      state.tasks[column].push(task);
      saveTasksToLocalStorage(state.tasks); // Save to localStorage
    },

    // Reducer to move a task between columns
    moveTask: (state, action) => {
      const { source, destination } = action.payload;
      const [task] = state.tasks[source.droppableId].splice(source.index, 1);
      state.tasks[destination.droppableId].splice(destination.index, 0, task);
      saveTasksToLocalStorage(state.tasks); // Save to localStorage
    },

    // Reducer to reset tasks (optional)
    resetTasks: (state) => {
      state.tasks = {
        todo: [],
        inProgress: [],
        peerReview: [],
        done: [],
      };
      localStorage.removeItem('tasks'); // Clear localStorage
    },
  },
});

export const { addTask, moveTask, resetTasks } = tasksSlice.actions;
export default tasksSlice.reducer;
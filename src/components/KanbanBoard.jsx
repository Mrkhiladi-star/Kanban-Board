import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useSelector, useDispatch } from 'react-redux';
import { moveTask } from '../redux/tasksSlice';
import TaskCard from './TaskCard';
import { Box, Typography, Paper, useMediaQuery } from '@mui/material';

const KanbanBoard = ({ searchQuery }) => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  // Check if the screen size is small (mobile)
  const isMobile = useMediaQuery('(max-width:600px)');

  // Filter tasks based on the search query
  const filteredTasks = {
    todo: tasks.todo.filter((task) => task.title.includes(searchQuery)),
    inProgress: tasks.inProgress.filter((task) => task.title.includes(searchQuery)),
    peerReview: tasks.peerReview.filter((task) => task.title.includes(searchQuery)),
    done: tasks.done.filter((task) => task.title.includes(searchQuery)),
  };

  // Handle drag-and-drop events
  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;
    dispatch(moveTask({ source, destination }));
  };

  // Define the columns
  const columns = [
    { id: 'todo', title: 'To Do' },
    { id: 'inProgress', title: 'In Progress' },
    { id: 'peerReview', title: 'Peer Review' },
    { id: 'done', title: 'Done' },
  ];

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Box
        display="flex"
        flexDirection={isMobile ? 'column' : 'row'} // Stack columns vertically on mobile
        justifyContent="space-around"
        p={2}
        gap={2} // Add gap between columns
      >
        {columns.map((column) => (
          <Droppable key={column.id} droppableId={column.id}>
            {(provided) => (
              <Paper
                ref={provided.innerRef}
                {...provided.droppableProps}
                sx={{ width: isMobile ? '100%' : '22%', padding: 2 }} // Full width on mobile
              >
                <Typography variant="h6">{column.title}</Typography>
                {filteredTasks[column.id].map((task, index) => (
                  <TaskCard key={task.id} task={task} index={index} />
                ))}
                {provided.placeholder}
              </Paper>
            )}
          </Droppable>
        ))}
      </Box>
    </DragDropContext>
  );
};

export default KanbanBoard;
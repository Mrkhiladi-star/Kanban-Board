import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Paper, Typography } from '@mui/material';

const TaskCard = ({ task, index }) => {
  return (
    // Draggable component to enable drag-and-drop functionality
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        // Task card container
        <Paper
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          sx={{ padding: 2, marginBottom: 2 }}
        >
          {/* Task title */}
          <Typography variant="h6">{task.title}</Typography>

          {/* Task description */}
          <Typography variant="body2">{task.description}</Typography>
        </Paper>
      )}
    </Draggable>
  );
};

export default TaskCard;
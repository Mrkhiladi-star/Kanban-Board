# Kanban Board

A fully functional Kanban Board built using ReactJS, allowing users to manage tasks seamlessly across different stages with drag-and-drop functionality and search capabilities. The board includes four stages: **To Do**, **In Progress**, **Peer Review**, and **Done**.

## Features

###  Drag-and-Drop Functionality
- Move tasks between columns effortlessly.
- Supports reordering within the same column and across columns.

###  Task Management
- Add new tasks to the **To Do** column.
- Task cards display **Title** and **Short Description**.
- Dynamic updates using Redux for state management.

### Search Functionality
- Real-time filtering of tasks based on the search query.
- Updates task visibility as you type.

### Responsive Design
- Fully mobile-friendly UI with adaptive layouts.
- Optimized for all screen sizes using Material-UI.

### State Management
- Uses **Redux Toolkit** for centralized task management.

## Technologies Used

- **Frontend:** ReactJS
- **UI Components:** Material-UI (MUI)
- **Drag-and-Drop:** React Beautiful DnD
- **State Management:** Redux Toolkit
- **Storage:** Local Storage (for persistence)

## Folder Structure

kanban-board/
│── src/
│   │── components/
│   │   │── KanbanBoard.js
│   │   │── TaskCard.js
│   │── redux/
│   │   │── store.js
│   │   │── taskSlice.js
│   │── App.js
│   │── index.js
│── public/
│── package.json
│── README.md


## Contribution
Feel free to fork this repository and contribute by opening a pull request.

## License
This project is licensed under the MIT License.


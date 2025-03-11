import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';

// Render the application
ReactDOM.render(
  // Provide the Redux store to the application
  <Provider store={store}>
    {/* Root component */}
    <App />
  </Provider>,
  // Mount the application in the DOM element with id 'root'
  document.getElementById('root')
);
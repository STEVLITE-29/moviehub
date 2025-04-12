import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Main App component

// Create a root and render the App inside StrictMode (for highlighting potential problems)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"
export const API_Link = "https://648843930e2469c038fd5d25.mockapi.io/AdminDashboard"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

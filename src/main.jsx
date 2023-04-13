import React from 'react';
import { RouterProvider } from 'react-router';
import ReactDOM from 'react-dom/client';
import './index.css';
import { router } from './router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

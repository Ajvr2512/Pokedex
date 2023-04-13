import React from 'react';
import { RouterProvider } from 'react-router';
import ReactDOM from 'react-dom/client';
import './index.css';
import { router } from './router';
import { UserProvider } from './contexts/UserContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
     <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>,
);

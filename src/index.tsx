// src/index.tsx ou src/App.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ToastContainer /> {/* Adicione o ToastContainer aqui */}
  </React.StrictMode>,
  document.getElementById('root')
);

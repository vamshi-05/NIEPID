import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { toast, ToastContainer } from "react-toastify";


ReactDOM.render(
  <React.StrictMode>
    <App />
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById('root')
);


import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { CalendarApp } from './CalendarApp';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CalendarApp />
  </StrictMode>
)

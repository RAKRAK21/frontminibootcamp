import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Tailwind CSS가 포함된 CSS 파일
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

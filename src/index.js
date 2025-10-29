import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { NotificationProvider } from './context/NotificationContext'; // ✅ Import the provider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NotificationProvider> {/* ✅ Wrap App with provider */}
      <App />
    </NotificationProvider>
  </React.StrictMode>
);

reportWebVitals();

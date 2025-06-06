import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './i18n.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <React.Suspense
      fallback={
        <div className="flex items-center justify-center h-screen bg-white">
          <div className="flex flex-col items-center space-y-4 animate-pulse">
            <img src="/logo/base-white-logo.png" alt="Logo" className="w-96 h-auto" />
          </div>
        </div>
      }
    >
      <App />
    </React.Suspense>
  </React.StrictMode>
);

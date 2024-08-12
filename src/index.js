import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './Context/AuthProvider';
import { CandWDataProvider } from './Components/HomePage/WhatWeDo/CertificationAndWorkShopContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <CandWDataProvider>
        <Router>
          <App />
        </Router>
      </CandWDataProvider>
    </AuthProvider>
  </React.StrictMode>
);

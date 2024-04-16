import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import CustomerDetails from './components/CustomerDetails.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='customer-details/:query' element={<CustomerDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Register from './pages/Register';
import Account from './pages/Account';

const App = () => (
  <div>
    <Routes>
      <Route path="/" element={<Welcome />} /> {/* Welcome page */}
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/account" element={<Account />} />
    </Routes>
  </div>
);

export default App;

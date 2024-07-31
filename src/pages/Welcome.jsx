// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="container text-center">
      <h1>Welcome to the App!</h1>
      <p>Manage your account easily.</p>
      <Link to="/register" className="btn btn-primary">Get Started</Link>
    </div>
  );
};

export default Welcome;

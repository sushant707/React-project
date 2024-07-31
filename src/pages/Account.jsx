// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Notification from '../components/Notification'; // Importing the Notification component for user feedback

const Account = () => {
  // State variables to hold user information and notifications
  const [name, setName] = useState(''); // State for user's name
  const [email, setEmail] = useState(''); // State for user's email
  const [password, setPassword] = useState(''); // State for user's password
  const [notification, setNotification] = useState(''); // State for notification messages
  const navigate = useNavigate(); // Hook to programmatically navigate to different routes

  // useEffect to run side effects on component mount
  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser'); // Retrieve logged-in user email from local storage
    if (!loggedInUser) {
      setNotification({ message: 'Please log in to view account information.', type: 'danger' });
      setTimeout(() => navigate('/login'), 2000); // Redirect to login after 2 seconds if not logged in
      return; // Exit if there is no logged-in user
    }

    // Get user details from local storage
    const user = JSON.parse(localStorage.getItem(loggedInUser)); // Retrieve user data using email
    setName(user.name); // Set name state with user's name
    setEmail(user.email); // Set email state with user's email
    setPassword(user.password); // Set password state with user's password
    setNotification({ message: 'You can edit your account details.', type: 'info' }); // Show message for editing account details
  }, [navigate]); // Dependency array with navigate to avoid warnings

  // Function to handle form submission for saving account details
  const handleSave = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    const updatedUser = {
      name,
      email,
      password,
    };

    // Update user data in local storage
    localStorage.setItem(email, JSON.stringify(updatedUser)); // Save updated user data using email as the key
    // Also update the logged-in user reference
    localStorage.setItem('loggedInUser', email); // Update logged-in user's email

    setNotification({ message: 'Account details saved! Redirecting to login...', type: 'success' });

    // Redirect to login after a delay
    setTimeout(() => {
      navigate('/login'); // Redirect to Login page
    }, 2000); // 2 seconds delay
  };

  return (
    <div className="container"> {/* Container for the account form */}
      <h2>Account Page</h2> {/* Heading for the account page */}
      <Notification message={notification.message} type={notification.type} /> {/* Display notification if any */}
      <form onSubmit={handleSave}> {/* Form for editing account details */}
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)} // Update name state on input change
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update email state on input change
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update password state on input change
          />
        </div>
        <button type="submit" className="btn btn-success">Save</button> {/* Save button */}
      </form>
    </div>
  );
};

export default Account; // Export the Account component

// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'; // Import React and useState hook
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import Notification from '../components/Notification'; // Import Notification component for user feedback

const Login = () => {
  // State variables to hold email, password, and notifications
  const [email, setEmail] = useState(''); // State for user's email
  const [password, setPassword] = useState(''); // State for user's password
  const [notification, setNotification] = useState(''); // State for notification messages
  const navigate = useNavigate(); // Hook to programmatically navigate to different routes

  // Function to handle form submission for login
  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const user = JSON.parse(localStorage.getItem(email)); // Retrieve user data from local storage using email as key

    // Check if user exists and password matches
    if (user && user.password === password) {
      localStorage.setItem('loggedInUser', email); // Store logged-in user email in local storage
      navigate('/account'); // Redirect to Account page
    } else {
      // Show notification for invalid credentials
      setNotification({ message: 'Invalid email or password.', type: 'danger' });
    }
  };

  return (
    <div className="container"> {/* Container for the login form */}
      <h2>Login</h2> {/* Heading for the login page */}
      <Notification message={notification.message} type={notification.type} /> {/* Display notification if any */}
      <form onSubmit={handleLogin}> {/* Form for user login */}
        <div className="mb-3"> {/* Margin-bottom class for spacing */}
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update email state on input change
          />
        </div>
        <div className="mb-3"> {/* Margin-bottom class for spacing */}
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update password state on input change
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button> {/* Login button */}
      </form>
    </div>
  );
};

export default Login; // Export the Login component

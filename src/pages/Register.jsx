// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Notification from "../components/Notification"; // Importing the Notification component for user feedback

const Register = () => {
  // State variables to hold form inputs and notifications
  const [name, setName] = useState(""); // State for user's name
  const [email, setEmail] = useState(""); // State for user's email
  const [password, setPassword] = useState(""); // State for user's password
  const [notification, setNotification] = useState(""); // State for notification messages
  const navigate = useNavigate(); // Hook to programmatically navigate to different routes

  // Function to handle form submission
  const handleRegister = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Check if all fields are filled
    if (!name || !email || !password) {
      setNotification({
        message: "Please fill in all fields.",
        type: "danger",
      });
      return; // Exit the function if any field is empty
    }

    // Create user object to save in local storage
    const user = { name, email, password }; // Save password as well
    localStorage.setItem(email, JSON.stringify(user)); // Save user data in local storage using email as the key
    setNotification({
      message: "Registration complete! Redirecting to account page...",
      type: "success",
    });

    // Redirect to Account page after a brief delay
    setTimeout(() => {
      localStorage.setItem("loggedInUser", email); // Save the logged-in user's email in local storage
      navigate("/account"); // Navigate to the Account page
    }, 2000); // 2 seconds delay
  };

  return (
    <div className="container">
      {" "}
      {/* Container for the registration form */}
      <h2>Register</h2> {/* Heading for the registration page */}
      <Notification
        message={notification.message}
        type={notification.type}
      />{" "}
      {/* Display notification if any */}
      <form onSubmit={handleRegister}>
        {" "}
        {/* Form for user registration */}
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
        <button type="submit" className="btn btn-primary">
          Register
        </button>{" "}
        {/* Register button */}
      </form>
    </div>
  );
};

export default Register; // Export the Register component

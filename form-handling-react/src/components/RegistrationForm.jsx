import React, { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    let formErrors = {};

    if (!username) formErrors.username = "Username is required";
    if (!email) formErrors.email = "Email is required";
    if (!password) formErrors.password = "Password is required";

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      console.log("User registered:", { username, email, password });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && <div>{errors.username}</div>} {/* Display error */}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <div>{errors.email}</div>} {/* Display error */}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <div>{errors.password}</div>} {/* Display error */}
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;

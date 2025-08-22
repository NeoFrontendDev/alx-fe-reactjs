import { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const mockApiCall = async (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("User registered:", data);
        resolve({ success: true });
      }, 1000);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password) {
      setError("All fields are required!");
      return;
    }

    if (!email) {
      setError("All fields are required!");
      return;
    }

    if (!username) {
      setError("All fields are required!");
      return;
    }

    setError("");
    const response = await mockApiCall({ username, email, password });

    if (response.success) {
      alert("Registration successful!");
      setUsername("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Controlled Registration Form</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;

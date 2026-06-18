import React, { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [user, setUser] = useState([]);

  // --- NEW STATE FOR API DATA ---
  const [apiUsers, setApiUsers] = useState([]);

  // --- NEW: useEffect hook to fetch API data on component load ---
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users?_limit=3")
      .then((response) => response.json())
      .then((data) => setApiUsers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // Empty dependency array means this runs exactly once when the component mounts

  const handlesubmit = (e) => {
    e.preventDefault();
    let formError = {};

    if (name.trim() === "") {
      formError.name = "name is required";
    }
    if (!email.includes("@")) {
      formError.email = "email must contain @";
    }
    if (password.length < 6) {
      formError.password = "password must be atleast 6 characters";
    }
    setErrors(formError);

    if (Object.keys(formError).length === 0) {
      const newUser = {
        name: name,
        email: email,
      };

      setUser([...user, newUser]);
      setSuccess("Registration Successful");
      setName("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="container" style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h2>Registration Form</h2>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {/* Dynamic error message for name */}
        <p className="error" style={{ color: "red" }}>{errors.name}</p>

        <input
          type="text"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="error" style={{ color: "red" }}>{errors.email}</p>

        <input
          type="password" /* Changed to password type to hide characters */
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="error" style={{ color: "red" }}>{errors.password}</p>

        <button type="submit">Register</button>
      </form>
      <p className="success" style={{ color: "green" }}>{success}</p>

      {/* Local Registered Users */}
      {user.length > 0 && (
        <div className="apidata">
          <h3>Registered user :</h3>
          <ul>
            {user.map((user, index) => (
              <li key={index}>
                {user.name} - {user.email}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* --- NEW: Displaying the data fetched via useEffect --- */}
      <hr style={{ margin: "20px 0" }} />
      <div className="fetched-data">
        <h3>Fetched Users from API (via useEffect):</h3>
        {apiUsers.length === 0 ? (
          <p>Loading API data...</p>
        ) : (
          <ul>
            {apiUsers.map((apiUser) => (
              <li key={apiUser.id}>
                <strong>{apiUser.name}</strong> — {apiUser.email}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
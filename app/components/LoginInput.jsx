
"use client";

import React, {useState} from 'react'

const LoginInput = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = () => {
    if (email && password) {
      alert(`Email: ${email}\nPassword: ${password}`);
    } else {
      alert("Please fill in both fields");
    }
  };
  return (
    <div>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /><br />

      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />

      <button onClick={handleSubmit}>
        Submit
      </button>
    </div>
    </div>
  )
}

export default LoginInput

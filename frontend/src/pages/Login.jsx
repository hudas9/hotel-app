import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // using axios to make a post request to the backend, and set cookie in the browser
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post("http://localhost:3000/login", {
      email,
      password,
    });

    localStorage.setItem("token", response.data.token);
  };

  return (
    <>
      <h1>Login</h1>
      <form>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </>
  );
}

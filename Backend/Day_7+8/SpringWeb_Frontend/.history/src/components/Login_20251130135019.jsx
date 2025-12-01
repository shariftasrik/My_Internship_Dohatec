import { useState } from "react";

export default function Login() {
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    const res = await fetch("http://localhost:8080/login");
    const text = await res.text();
    setMessage(text);
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
      <p>{message}</p>
    </div>
  );
}

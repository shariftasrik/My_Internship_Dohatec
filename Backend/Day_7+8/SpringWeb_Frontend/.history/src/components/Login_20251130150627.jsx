import { useState } from "react";

export default function Login() {
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    const res = await fetch("http://localhost:8080/login");
    const text = await res.text();
    setMessage(text);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl text-gray-900 dark:text-white mb-4">Login Page</h2>

      <button
        onClick={handleLogin}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Login
      </button>

      <p className="mt-4 text-gray-700 dark:text-gray-300">{message}</p>
    </div>
  );
}

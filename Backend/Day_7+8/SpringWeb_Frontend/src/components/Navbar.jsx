import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-md px-6 py-4 flex justify-between items-center fixed top-0 z-50">
      <a href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
        Telusko
      </a>

      <div className="flex gap-6 items-center">
        <a className="text-gray-900 dark:text-gray-300 hover:underline" href="/">
          Home
        </a>
        <a className="text-gray-900 dark:text-gray-300 hover:underline" href="/add_product">
          Add Product
        </a>

        <button
          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md"
          onClick={toggleTheme}
        >
          {theme === "dark" ? "🌙 Dark" : "☀ Light"}
        </button>
      </div>
    </nav>
  );
}

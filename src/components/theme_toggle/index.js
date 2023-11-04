import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
const ThemeToggle = () => {
  const [dark, setDark] = useState();

  useEffect(() => {
    const root = document.getElementsByTagName("html")[0];
    const preferece = localStorage.getItem("dark");
    if (preferece === undefined) {
      localStorage.setItem("dark", "true");
      root.classList.add("dark");
      setDark(true);
    } else if (preferece === "true") {
      root.classList.add("dark");
      setDark(true);
    } else {
      root.classList.remove("dark");
      setDark(false);
    }
  }, [dark]);

  const handleClick = () => {
    const root = document.getElementsByTagName("html")[0];
    if (dark) {
      localStorage.setItem("dark", "false");
      root.classList.add("dark");
      setDark(false);
    } else {
      localStorage.setItem("dark", "true");
      root.classList.remove("dark");
      setDark(true);
    }
  };
  return (
    <button
      onClick={handleClick}
      className="hover:cursor-pointer text-3xl mx-4 my-6 md:my-0 cursor-pointer"
    >
      {dark && <FaSun className="text-yellow-500" />}
      {!dark && <FaMoon className="text-lighCharcoal" />}
    </button>
  );
};

export default ThemeToggle;

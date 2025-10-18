"use client";
import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export function ThemeToggle() {
 const [isLight, setIsLight] = useState(false);

 useEffect(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
   setIsLight(savedTheme === 'light');
   document.documentElement.classList.toggle('light', savedTheme === 'light');
  }
 }, []);

 const toggleTheme = () => {
  const newTheme = !isLight;
  setIsLight(newTheme);
  localStorage.setItem('theme', newTheme ? 'light' : 'dark');
  document.documentElement.classList.toggle('light', newTheme);
 };

 return (
  <button
   onClick={toggleTheme}
   className="hidden md:flex items-center justify-center px-3 py-2 rounded-lg bg-[#1a1f2e] border border-[#c4c8bd]/40 hover:bg-[#c4c8bd]/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#c4c8bd]/40 cursor-pointer hover:cursor-pointer group"
   title={isLight ? "Dark Mode" : "Light Mode"}
  >
   {isLight ? (
    <FaMoon className="w-5 h-5 text-blue-400 group-hover:-rotate-12 transition-transform duration-500" />
   ) : (
    <FaSun className="w-5 h-5 text-yellow-400 group-hover:rotate-180 transition-transform duration-500" />
   )}
  </button>
 );
}
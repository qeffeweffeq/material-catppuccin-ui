import React from 'react';

export interface ThemeToggleProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export function ThemeToggle({ darkMode, setDarkMode }: ThemeToggleProps) {
  return (
    <button 
      onClick={() => setDarkMode(!darkMode)}
      className={`cursor-pointer w-10 h-10 flex items-center justify-center rounded-full border transition-colors opacity-70 hover:opacity-100 ${
        darkMode 
          ? 'border-[#45475a] text-[#a6adc8] hover:bg-[#313244]' 
          : 'border-[#ccd0da] text-[#6c6f85] hover:bg-[#e6e9ef]'
      }`}
      title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <span className="material-symbols-outlined text-[18px]">
        {darkMode ? 'light_mode' : 'dark_mode'}
      </span>
    </button>
  );
}

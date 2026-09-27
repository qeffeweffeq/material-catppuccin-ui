import React from 'react';

export interface ThemeToggleProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export function ThemeToggle({ darkMode, setDarkMode }: ThemeToggleProps) {
  return (
    <button 
      onClick={() => setDarkMode(!darkMode)}
      className={`cursor-pointer w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors ${
        darkMode 
          ? 'border-[#a6adc8] text-[#a6adc8] hover:border-[#cdd6f4] hover:text-[#cdd6f4]' 
          : 'border-[#6c6f85] text-[#6c6f85] hover:border-[#4c4f69] hover:text-[#4c4f69]'
      }`}
      title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <span className="material-symbols-outlined text-[14px]">
        {darkMode ? 'light_mode' : 'dark_mode'}
      </span>
    </button>
  );
}

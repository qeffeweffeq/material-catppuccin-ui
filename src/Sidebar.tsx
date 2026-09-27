import React from 'react';

export interface SidebarProps {
  darkMode: boolean;
  setDarkMode?: (val: boolean) => void;
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export function Sidebar({ darkMode, setDarkMode, title = "Material", subtitle = "Dashboard", children }: SidebarProps) {
  return (
    <aside className={`fixed inset-y-0 left-0 z-20 w-80 border-r flex flex-col ${darkMode ? 'border-[#313244] bg-[#181825]' : 'border-[#ccd0da] bg-[#e6e9ef]'}`}>
      <div className="p-8 pb-6">
        <h1 className={`text-3xl font-bold tracking-tight ${darkMode ? 'text-[#cdd6f4]' : 'text-[#4c4f69]'}`}>
          {title}
        </h1>
        <p className={`text-xs mt-1 uppercase tracking-widest font-semibold ${darkMode ? 'text-[#a6adc8]' : 'text-[#6c6f85]'}`}>
          {subtitle}
        </p>
      </div>
      
      <div className="px-8 mt-6 flex-1 overflow-y-auto">
        {children}
      </div>

    </aside>
  );
}

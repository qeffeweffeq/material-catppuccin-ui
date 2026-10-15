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
    <aside className={`fixed inset-y-0 left-0 z-20 w-80 h-screen border-r flex flex-col ${darkMode ? 'border-cat-surface0 bg-cat-crust' : 'border-cat-surface0 bg-cat-mantle'}`}>
      <div className="pt-6 px-8 pb-0">
        <h1 className="text-2xl font-bold tracking-tight text-cat-text">
          {title}
        </h1>
        <p className="text-xs font-medium uppercase tracking-wider text-cat-subtext0">
          {subtitle}
        </p>
      </div>
      
      <div className="px-8 pt-4 mt-0 flex-1 overflow-y-auto flex flex-col">
        {children}
        {/* Spacer to fix WebKit flex overflow padding bug */}
        <div className="shrink-0 h-8 w-full"></div>
      </div>

    </aside>
  );
}

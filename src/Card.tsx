import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  darkMode: boolean;
  selected?: boolean;
  children: React.ReactNode;
}

export function Card({ darkMode, selected = false, children, className = '', ...props }: CardProps) {
  return (
    <div 
      className={`rounded-xl border shadow-sm flex flex-col transition-all duration-200 group ${
        darkMode 
          ? 'bg-[#181825] border-[#313244] hover:border-[#89b4fa]' 
          : 'bg-white border-[#ccd0da] hover:border-[#1e66f5]'
      } ${selected ? (darkMode ? 'ring-2 ring-[#89b4fa] border-transparent' : 'ring-2 ring-[#1e66f5] border-transparent') : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

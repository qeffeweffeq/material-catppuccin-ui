import React from 'react';
import { Trash2 } from 'lucide-react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  darkMode: boolean;
  selected?: boolean;
  onDelete?: () => void;
  children: React.ReactNode;
}

export function Card({ darkMode, selected = false, onDelete, children, className = '', ...props }: CardProps) {
  return (
    <div 
      className={`rounded-xl border shadow-sm flex flex-col transition-all duration-200 group relative ${
        darkMode 
          ? 'bg-[#181825] border-[#313244] hover:border-[#89b4fa]' 
          : 'bg-white border-[#ccd0da] hover:border-[#1e66f5]'
      } ${selected ? (darkMode ? 'ring-2 ring-[#89b4fa] border-transparent' : 'ring-2 ring-[#1e66f5] border-transparent') : ''} ${className}`}
      {...props}
    >
      {onDelete && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
          className={`absolute top-3 right-3 p-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity z-10 ${
            darkMode 
              ? 'text-[#f38ba8] hover:bg-[#313244]' 
              : 'text-[#d20f39] hover:bg-[#e6e9ef]'
          }`}
          title="Delete"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      )}
      {children}
    </div>
  );
}

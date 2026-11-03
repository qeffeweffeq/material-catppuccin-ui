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
          ? 'bg-cat-mantle border-cat-surface0 hover:border-cat-accent' 
          : 'bg-cat-base border-cat-surface0 hover:border-cat-accent'
      } ${selected ? 'ring-2 ring-cat-accent border-transparent' : ''} ${className}`}
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
              ? 'text-cat-red hover:bg-cat-surface0' 
              : 'text-cat-red hover:bg-cat-surface1'
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

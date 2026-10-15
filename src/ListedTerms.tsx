import React from 'react';
import { Plus, X } from 'lucide-react';

export interface ListedTermsProps {
  darkMode: boolean;
  terms: string[];
  colors: string[];
  onChange: (index: number, value: string) => void;
  onAdd: () => void;
  onRemove: (index: number) => void;
  maxTerms?: number;
}

export function ListedTerms({ darkMode, terms, colors, onChange, onAdd, onRemove, maxTerms = 5 }: ListedTermsProps) {
  return (
    <div className="flex flex-col gap-2">
      {terms.map((term, idx) => (
        <div key={idx} className={`flex items-center rounded border transition-colors ${
          darkMode ? 'border-cat-surface0 bg-cat-base' : 'border-cat-surface0 bg-cat-base'
        }`}>
          <div className={`w-3 h-3 shrink-0 rounded-full ml-3 ${darkMode ? 'opacity-80' : ''}`} style={{ backgroundColor: colors[idx % colors.length] }}></div>
          <input 
            type="text" 
            value={term} 
            onChange={(e) => onChange(idx, e.target.value)}
            className="w-full p-2 pl-4 text-sm focus:outline-none bg-transparent text-cat-text"
          />
          {terms.length > 1 && (
            <button 
              onClick={() => onRemove(idx)}
              className="p-2 transition-colors text-cat-subtext0 hover:bg-cat-surface1"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      ))}
      
      {terms.length < maxTerms && (
        <button 
          onClick={onAdd}
          className={`flex items-center justify-center rounded border p-2 mt-1 border-dashed transition-colors ${
            darkMode 
              ? 'border-cat-surface1 text-cat-subtext0 hover:bg-cat-surface0 hover:text-cat-text' 
              : 'border-cat-surface0 text-cat-subtext0 hover:bg-cat-surface1 hover:text-cat-text'
          }`}
        >
          <Plus className="w-4 h-4 mr-1.5" />
          <span className="text-xs font-medium uppercase tracking-wide">Add term</span>
        </button>
      )}
    </div>
  );
}

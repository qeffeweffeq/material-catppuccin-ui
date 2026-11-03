import React from 'react';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  darkMode: boolean;
  label?: string;
  options: { value: string; label: string }[];
}

export function Select({ darkMode, label, options, className = '', ...props }: SelectProps) {
  const inputClass = `w-full p-2 text-sm rounded border focus:outline-none focus:ring-2 transition-colors ${
    darkMode 
      ? 'bg-cat-mantle border-cat-surface0 text-cat-text focus:ring-cat-accent focus:border-transparent' 
      : 'bg-cat-base border-cat-surface0 text-cat-text focus:ring-cat-accent focus:border-transparent'
  }`;
  
  const labelClass = 'block text-[10px] font-semibold uppercase tracking-wider mb-1 text-cat-subtext0';

  return (
    <div className={className}>
      {label && <label className={labelClass}>{label}</label>}
      <select className={inputClass} {...props}>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  );
}

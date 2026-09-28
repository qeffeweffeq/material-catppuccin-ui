import React from 'react';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  darkMode: boolean;
  label?: string;
  options: { value: string; label: string }[];
}

export function Select({ darkMode, label, options, className = '', ...props }: SelectProps) {
  const inputClass = `w-full p-2 text-sm rounded border focus:outline-none focus:ring-2 transition-colors ${
    darkMode 
      ? 'bg-[#181825] border-[#313244] text-[#cdd6f4] focus:ring-[#89b4fa] focus:border-transparent' 
      : 'bg-white border-[#ccd0da] text-[#4c4f69] focus:ring-[#1e66f5] focus:border-transparent'
  }`;
  
  const labelClass = `block text-[10px] font-semibold uppercase tracking-wider mb-1 ${darkMode ? 'text-[#a6adc8]' : 'text-[#6c6f85]'}`;

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

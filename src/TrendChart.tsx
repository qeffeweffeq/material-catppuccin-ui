import React, { useState } from 'react';
import { Download, ChevronDown, ChevronUp } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export interface TrendChartProps {
  darkMode: boolean;
  title?: string;
  data: any[];
  lines: { key: string; color: string }[];
  onDownload?: () => void;
}

export function TrendChart({ darkMode, title = "Interest over time", data, lines, onDownload }: TrendChartProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`rounded-xl border shadow-sm flex flex-col transition-all duration-200 w-full ${
      darkMode ? 'bg-cat-mantle border-cat-surface0' : 'bg-cat-base border-cat-surface0'
    }`}>
      <div 
        className={`flex items-center justify-between p-4 cursor-pointer select-none transition-colors ${isOpen ? 'border-b border-cat-surface0' : ''} hover:bg-cat-surface0/30`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2">
          {isOpen ? <ChevronUp className="w-4 h-4 text-cat-subtext0" /> : <ChevronDown className="w-4 h-4 text-cat-subtext0" />}
          <h3 className="text-base font-semibold text-cat-text">{title}</h3>
        </div>
        <div className="flex items-center gap-4 text-cat-subtext0">
          <Download 
            className="w-4 h-4 cursor-pointer hover:opacity-70" 
            onClick={(e) => {
              e.stopPropagation();
              if (onDownload) onDownload();
            }}
          />
        </div>
      </div>
      
      {isOpen && (
        <div className="py-6 h-[450px] w-full">
          {data && data.length > 0 ? (
            <ResponsiveContainer width="99%" height="100%">
              <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid vertical={false} stroke="var(--cat-surface0)" />
                <XAxis 
                  dataKey="time" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: 'var(--cat-subtext0)', fontSize: 9 }} 
                  dy={10}
                  dx={-10}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: 'var(--cat-subtext0)', fontSize: 12 }} 
                  ticks={[0, 25, 50, 75, 100]}
                />
                <Tooltip 
                  contentStyle={{ 
                    borderRadius: '8px', 
                    border: '1px solid var(--cat-surface0)', 
                    backgroundColor: 'var(--cat-mantle)',
                    color: 'var(--cat-text)',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' 
                  }}
                />
                {lines.map((line, idx) => (
                  <Line 
                    key={idx}
                    type="monotone" 
                    dataKey={line.key} 
                    stroke={line.color} 
                    strokeWidth={2.5} 
                    dot={false}
                    activeDot={{ r: 4, strokeWidth: 0, fill: line.color }} 
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <div className="h-full flex items-center justify-center text-cat-subtext0">
              No data available for the selected parameters.
            </div>
          )}
        </div>
      )}
    </div>
  );
}

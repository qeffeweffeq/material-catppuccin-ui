import React from 'react';
import { Download, Code, Share2 } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export interface TrendChartProps {
  darkMode: boolean;
  title?: string;
  data: any[];
  lines: { key: string; color: string }[];
}

export function TrendChart({ darkMode, title = "Interest over time", data, lines }: TrendChartProps) {
  return (
    <div className={`rounded-xl border shadow-sm flex flex-col transition-all duration-200 w-full ${
      darkMode ? 'bg-[#181825] border-[#313244]' : 'bg-white border-[#ccd0da]'
    }`}>
      <div className={`flex items-center justify-between p-4 border-b ${darkMode ? 'border-[#313244]' : 'border-[#ccd0da]'}`}>
        <div className="flex items-center gap-2">
          <h3 className={`text-base font-semibold ${darkMode ? 'text-[#cdd6f4]' : 'text-[#202124]'}`}>{title}</h3>
        </div>
        <div className={`flex items-center gap-4 ${darkMode ? 'text-[#a6adc8]' : 'text-[#5F6368]'}`}>
          <Download className="w-4 h-4 cursor-pointer hover:opacity-70" />
          <Code className="w-4 h-4 cursor-pointer hover:opacity-70" />
          <Share2 className="w-4 h-4 cursor-pointer hover:opacity-70" />
        </div>
      </div>
      
      <div className="py-6 h-[450px] w-full">
        {data && data.length > 0 ? (
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid vertical={false} stroke={darkMode ? '#313244' : '#E8EAED'} />
              <XAxis 
                dataKey="time" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: darkMode ? '#a6adc8' : '#70757A', fontSize: 12 }} 
                dy={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: darkMode ? '#a6adc8' : '#70757A', fontSize: 12 }} 
                ticks={[0, 25, 50, 75, 100]}
              />
              <Tooltip 
                contentStyle={{ 
                  borderRadius: '8px', 
                  border: `1px solid ${darkMode ? '#313244' : '#ccd0da'}`, 
                  backgroundColor: darkMode ? '#181825' : '#ffffff',
                  color: darkMode ? '#cdd6f4' : '#202124',
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
          <div className={`h-full flex items-center justify-center ${darkMode ? 'text-[#a6adc8]' : 'text-gray-500'}`}>
            No data available for the selected parameters.
          </div>
        )}
      </div>
    </div>
  );
}

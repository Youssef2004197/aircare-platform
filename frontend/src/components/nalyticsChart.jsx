import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesiansGrid, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import chartData from '../data/mockChartData.json';

function AnalyticsChart() {
  return (
    <div style={{ backgroundColor: '#1e1e24', padding: '20px', borderRadius: '12px', border: '1px solid #2d2d34', marginTop: '30px' }}>
      <h3 style={{ margin: '0 0 20px 0', color: '#ffffff', fontSize: '1.1rem' }}>Air Quality Index (AQI) Trend</h3>
      
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2d2d34" />
            <XAxis dataKey="time" stroke="#a0a0ab" fontSize={12} />
            <YAxis stroke="#a0a0ab" fontSize={12} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1e1e24', borderColor: '#2d2d34', color: '#fff' }}
              itemStyle={{ color: '#ff9800' }}
            />
            <Line 
              type="monotone" 
              dataKey="aqi" 
              stroke="#ff9800" 
              strokeWidth={3} 
              activeDot={{ r: 8 }} 
              name="AQI Level"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default AnalyticsChart;
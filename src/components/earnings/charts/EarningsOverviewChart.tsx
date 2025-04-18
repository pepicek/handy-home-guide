
import React from "react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

interface ChartData {
  month?: string;
  day?: string;
  earnings: number;
}

interface EarningsOverviewChartProps {
  data: ChartData[];
  timeFrame: "monthly" | "weekly";
}

const EarningsOverviewChart = ({ data, timeFrame }: EarningsOverviewChartProps) => {
  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        {timeFrame === 'monthly' ? (
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorEarnings" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#fbbf24" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#fbbf24" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} />
            <YAxis 
              tickFormatter={(value) => `$${value}`}
              tick={{ fontSize: 12 }}
            />
            <Tooltip 
              formatter={(value) => [`$${value}`, 'Earnings']}
              contentStyle={{ background: '#fff', border: '1px solid #ddd', borderRadius: '8px' }}
            />
            <Area 
              type="monotone" 
              dataKey="earnings" 
              stroke="#f59e0b" 
              fillOpacity={1} 
              fill="url(#colorEarnings)" 
              strokeWidth={2}
            />
          </AreaChart>
        ) : (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="day" tick={{ fontSize: 12 }} />
            <YAxis 
              tickFormatter={(value) => `$${value}`}
              tick={{ fontSize: 12 }}
            />
            <Tooltip 
              formatter={(value) => [`$${value}`, 'Earnings']}
              contentStyle={{ background: '#fff', border: '1px solid #ddd', borderRadius: '8px' }}
            />
            <Bar dataKey="earnings" fill="#fbbf24" radius={[4, 4, 0, 0]} />
          </BarChart>
        )}
      </ResponsiveContainer>
    </div>
  );
};

export default EarningsOverviewChart;

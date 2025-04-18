
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

interface ServiceEarning {
  name: string;
  earnings: number;
}

interface ServiceEarningsChartProps {
  data: ServiceEarning[];
}

const ServiceEarningsChart = ({ data }: ServiceEarningsChartProps) => {
  return (
    <div className="h-[250px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 80, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
          <XAxis type="number" tickFormatter={(value) => `$${value / 1000}k`} />
          <YAxis 
            type="category" 
            dataKey="name" 
            tick={{ fontSize: 12 }}
            width={80}
          />
          <Tooltip 
            formatter={(value) => [`$${value.toLocaleString()}`, 'Earnings']}
            contentStyle={{ background: '#fff', border: '1px solid #ddd', borderRadius: '8px' }}
          />
          <Bar dataKey="earnings" fill="#fbbf24" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ServiceEarningsChart;

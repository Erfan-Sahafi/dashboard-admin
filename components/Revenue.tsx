import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
//import data from '@../data.ts'
import { allData } from "@/data";

const Revenue: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <AreaChart
        data={allData}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="ny" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="ly" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="newYear"
          stroke="#8884d8"
          strokeWidth={3}
          fillOpacity={1}
          fill="url(#ny)"
        />
        <Area
          type="monotone"
          dataKey="lastYear"
          stroke="#82ca9d"
          strokeWidth={3}
          fillOpacity={1}
          fill="url(#ly)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Revenue;

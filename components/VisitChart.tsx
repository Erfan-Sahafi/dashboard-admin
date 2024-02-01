import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { visitData } from "@/data";


const VisitChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={visitData}>
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="visit" fill="#0ea5e9" barSize={20} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default VisitChart;

import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { visitData } from "@/data";

const VisitChart: React.FC = () => {
  return (
    <BarChart width={730} height={250} data={visitData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="visit" fill="#8884d8" />
    </BarChart>
  );
};

export default VisitChart;

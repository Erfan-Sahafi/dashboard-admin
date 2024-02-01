import React, { useEffect, useState } from "react";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { productsData } from "@/data";
const TopProducts: React.FC = () => {
  const COLORS = ["#f43f5e", "#22c55e", "#6366f1", "#facc15", "#06b6d4"];

  const [topProducts, setTopProducts] = useState<productType>([]);

  useEffect(() => {
    let sortedProducts = [...productsData]
      .sort((a, b) => b.salesNumber - a.salesNumber)
      .slice(0, 3);
    setTopProducts(sortedProducts);
  }, []);

  return (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart className="text-[12px] pb-3">
        <Pie
          data={topProducts}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#f97316"
          dataKey="salesNumber"
          nameKey="title"
        >
          {productsData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default TopProducts;

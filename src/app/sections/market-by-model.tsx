"use client";

import React, { useState } from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { getAllData } from "../../../actions/charts";

export default function MarketByModel() {
  const [model, setmodel] = useState<{ name: string; value: number }[]>([]);

  React.useEffect(() => {
    getAllData().then((res) => {
      setmodel(res.model);
    });
  }, []);

  if (!model) return null;
  return (
    <div className="h-[300px] bg-white p-2 rounded">
      <h3 className="text-lg mb-5">Market By Model</h3>
      <ResponsiveContainer width="80%" height="80%">
        <BarChart width={150} height={40} data={model}>
          <Bar dataKey="value" fill="#8884d8" />
          <XAxis dataKey="name" />
          <YAxis dataKey={"value"} />
          <Tooltip />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

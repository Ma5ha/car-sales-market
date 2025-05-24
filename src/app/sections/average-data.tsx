"use client";

import React, { useState } from "react";

import { getAllData } from "../../../actions/charts";

export default function MarketByBrand() {
  const [data, setData] = useState<Record<string, string | number>[]>([]);

  React.useEffect(() => {
    getAllData().then(({ avgMilage, avgPrice, median }) => {
      setData([
        { name: "Avg milage", value: avgMilage },
        { name: "Avg price", value: avgPrice },
        { name: "Median price", value: median },
      ]);
    });
  }, []);

  return (
    <div className=" bg-white p-5 rounded ">
      <h3 className="text-lg mb-5">Market averages</h3>

      <div className="flex flex-wrap gap-2">
        {data.map((item) => (
          <div className="rounded p-11 bg-background" key={item.name}>
            <span>{item.name}</span>
            <p className="text-center font-extrabold text-align-center text-3xl mt-auto">
              {Math.round(item.value as number)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

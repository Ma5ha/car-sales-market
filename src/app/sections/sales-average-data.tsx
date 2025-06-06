"use client";

import React, { useState } from "react";

import { getAllData } from "../../../actions/charts";

export default function MarketByBrand() {
  const [data, setData] = useState<Record<string, string | number>[]>([]);

  React.useEffect(() => {
    getAllData().then(
      ({
        avgSoldMilage,
        avgSoldPrice,
        soldMedian,
        soldCars,
        totalSalesSum,
        averageSalesPerDay,
        daysDifference,
        started,
      }) => {
        setData([
          {
            name: "Avg milage",
            value: new Intl.NumberFormat("sr-BA").format(avgSoldMilage),
          },
          {
            name: "Avg price",
            value: new Intl.NumberFormat("sr-BA", {
              style: "currency",
              currency: "BAM",
            }).format(avgSoldPrice),
          },
          {
            name: "Median price",
            value: new Intl.NumberFormat("sr-BA", {
              style: "currency",
              currency: "BAM",
            }).format(soldMedian),
          },
          {
            name: "Sold cars",
            value: new Intl.NumberFormat("sr-BA").format(soldCars.length),
          },

          {
            name: "Total market sales sum",
            value: new Intl.NumberFormat("sr-BA", {
              style: "currency",
              currency: "BAM",
            }).format(totalSalesSum),
          },
          {
            name: "Average sales per day",

            value: new Intl.NumberFormat("sr-BA").format(averageSalesPerDay),
          },

          {
            name: "Days tracking",
            value: new Intl.NumberFormat("sr-BA").format(daysDifference),
          },

          {
            name: "Tracking started at",
            value: new Intl.DateTimeFormat("sr-BA").format(started),
          },
        ]);
      }
    );
  }, []);

  return (
    <div className=" bg-white p-5 rounded ">
      <h3 className="text-lg mb-5">Market sales averages</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {data.map((item) => (
          <div className="rounded p-11 bg-background " key={item.name}>
            <span>{item.name}</span>
            <p className="text-center font-extrabold text-align-center text-3xl mt-auto">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

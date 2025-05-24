"use server";

import { PrismaClient } from "../generated/prisma";

export const getAllData = async () => {
  const client = new PrismaClient();
  client.$connect();

  const data = await client.car.findMany();

  const brandCount = data.reduce((curr, acc) => {
    curr[acc.brand] = curr[acc.brand] ? curr[acc.brand] + 1 : 1;
    return curr;
  }, {} as Record<string, number>);

  const brand = Array.from(Object.entries(brandCount), ([name, value]) => ({
    name,
    value,
  }));

  const modelCount = data.reduce((curr, acc) => {
    curr[acc.model] = curr[acc.model] ? curr[acc.model] + 1 : 1;
    return curr;
  }, {} as Record<string, number>);

  const model = Array.from(Object.entries(modelCount), ([name, value]) => ({
    name,
    value,
  }));

  const avgPrice =
    data.reduce((curr, acc) => {
      return curr + acc.price;
    }, 0) / data.length;

  const median = data.sort((a, b) => a.price - b.price)[
    Math.round(data.length / 2)
  ].price;

  const avgMilage =
    data.reduce((curr, acc) => {
      return curr + acc.milage;
    }, 0) / data.length;

  client.$disconnect();
  return { brand, model, median, avgMilage, avgPrice };
};

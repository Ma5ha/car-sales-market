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

  const modelViewsCount = data.reduce((curr, acc) => {
    curr[acc.model] = curr[acc.model] ? curr[acc.model] + acc.views : acc.views;
    return curr;
  }, {} as Record<string, number>);

  const modelViews = Array.from(
    Object.entries(modelViewsCount),
    ([name, value]) => ({
      name,
      value,
    })
  );

  const brandViewsCount = data.reduce((curr, acc) => {
    curr[acc.brand] = curr[acc.brand] ? curr[acc.brand] + acc.views : acc.views;
    return curr;
  }, {} as Record<string, number>);

  const brandViews = Array.from(
    Object.entries(brandViewsCount),
    ([name, value]) => ({
      name,
      value,
    })
  );

  const soldCars = await client.car.findMany({
    where: {
      sold: {
        not: null,
      },
    },
  });

  const avgSoldMilage =
    soldCars.reduce((curr, acc) => {
      return curr + acc.milage;
    }, 0) / soldCars.length;

  const avgSoldPrice =
    soldCars.reduce((curr, acc) => {
      return curr + acc.price;
    }, 0) / soldCars.length;

  const soldModelCount = soldCars.reduce((curr, acc) => {
    curr[acc.model] = curr[acc.model] ? curr[acc.model] + 1 : 1;
    return curr;
  }, {} as Record<string, number>);

  const soldModel = Array.from(
    Object.entries(soldModelCount),
    ([name, value]) => ({
      name,
      value,
    })
  );

  const soldBrandCount = soldCars.reduce((curr, acc) => {
    curr[acc.brand] = curr[acc.brand] ? curr[acc.brand] + 1 : 1;
    return curr;
  }, {} as Record<string, number>);

  const soldBrand = Array.from(
    Object.entries(soldBrandCount),
    ([name, value]) => ({
      name,
      value,
    })
  );

  const soldModelViewsCount = soldCars.reduce((curr, acc) => {
    curr[acc.model] = curr[acc.model] ? curr[acc.model] + acc.views : acc.views;
    return curr;
  }, {} as Record<string, number>);

  const soldModelViews = Array.from(
    Object.entries(soldModelViewsCount),
    ([name, value]) => ({
      name,
      value,
    })
  );

  const soldBrandViewsCount = soldCars.reduce((curr, acc) => {
    curr[acc.brand] = curr[acc.brand] ? curr[acc.brand] + acc.views : acc.views;
    return curr;
  }, {} as Record<string, number>);

  const soldBrandViews = Array.from(
    Object.entries(soldBrandViewsCount),
    ([name, value]) => ({
      name,
      value,
    })
  );

  const soldMedian = soldCars.sort((a, b) => a.price - b.price)[
    Math.round(soldCars.length / 2)
  ].price;

  const totalSalesSum = soldCars.reduce((curr, acc) => {
    return curr + acc.price;
  }, 0);

  const { createdAt } = (await client.car.findFirst({
    where: {
      id: 1,
    },
  }))!;

  const started = new Date(createdAt);
  const today = new Date();

  const timeDifference = today.getTime() - started.getTime();
  const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  const averageSalesPerDay = soldCars.length / daysDifference;

  client.$disconnect();
  return {
    brand,
    model,
    median,
    started,
    averageSalesPerDay,
    daysDifference,
    totalSalesSum,
    soldCars,
    avgMilage,
    avgPrice,
    modelViews,
    brandViews,
    avgSoldMilage,
    avgSoldPrice,
    soldModel,
    soldBrand,
    soldModelViews,
    soldBrandViews,
    soldMedian,
  };
};

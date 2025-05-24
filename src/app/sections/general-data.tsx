import { Suspense } from "react";
import MarketByBrand from "./market-by-brand";
import MarketByModel from "./market-by-model";
import AverageData from "./average-data";
import MarketViewsByBrand from "./market-views-by-brand";
import MarketViewsByModel from "./market-views-by-model";

export default function GeneralData() {
  return (
    <section>
      <h2 className="text-3xl font-bold">General Data</h2>
      <div className="grid grid-cols-2 gap-4 mt-10">
        <MarketByBrand />
        <MarketByModel />
        <MarketViewsByBrand />
        <MarketViewsByModel />
        <AverageData />
      </div>
    </section>
  );
}

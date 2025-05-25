import MarketByBrand from "./market-by-brand";
import MarketByModel from "./market-by-model";
import AverageData from "./average-data";
import MarketViewsByBrand from "./market-views-by-brand";
import MarketViewsByModel from "./market-views-by-model";
import MarketSalesByBrand from "./market-sales-by-brand";
import MarketSalesByModel from "./market-sales-by-model";
import MarketSalesAverageData from "./sales-average-data";

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

      <h2 className="text-3xl font-bold">General Sales Data</h2>
      <div className="grid grid-cols-2 gap-4 mt-10">
        <MarketSalesByBrand />
        <MarketSalesByModel />
        <MarketSalesAverageData />
      </div>
    </section>
  );
}

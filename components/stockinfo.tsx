"use client";
import { ChangeEvent, useState } from "react";
import StockBox from "./stockbox";
import fetchData from "@/app/api/fetchdata";
import { Loader as LucideLoader } from "lucide-react";

export default function StockInfo() {
  const [title, setTitle] = useState<string | null>("");
  const [stockPrice, setStockPrice] = useState<string | null | undefined>("");
  const [variance, setVariance] = useState<string | null | undefined>("");
  const [yearReturns, setYearReturns] = useState<string | null | undefined>("");
  const [monthReturns, setMonthReturns] = useState<string | null | undefined>(
    ""
  );
  const [isInitialRender, setInitialRender] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  async function getPrice(e: ChangeEvent<HTMLSelectElement>) {
    setInitialRender(false);
    setIsLoading(true);
    let index = e.target.selectedIndex;
    let title = e.target[index].textContent;
    let stock = e.target.value;
    const data = await fetchData(stock);
    setStockPrice(data.price);
    setVariance(data.variance);
    setMonthReturns(data.monthReturns);
    setYearReturns(data.yearReturns);
    setTitle(title);
    setIsLoading(false);
  }

  return (
    <div>
      <div className="mb-5 flex flex-col items-center">
        <select
          onChange={getPrice}
          className="select select-primary w-50 md:w-96 max-w-xs"
          defaultValue="selected"
        >
          <option
            disabled
            value="selected"
          >
            Select a stock
          </option>
          <option value="TATAMOTORS">Tata Motors</option>
          <option value="TATASTEEL">Tata Steel</option>
          <option value="ASHOKLEY">Ashok Leyland</option>
          <option value="DBREALTY">Dbrealty</option>
        </select>
      </div>
      {!isInitialRender && (
        <div className="w-fit min-w-80 h-fit min-h-60 flex items-center justify-center rounded-md">
          {isLoading ? (
            <div className={`flex items-center justify-center`}>
              <LucideLoader
                size={24}
                color="white"
                className="animate-spin"
                aria-label="Loading"
              />
            </div>
          ) : (
            <StockBox
              title={title}
              price={stockPrice}
              variance={variance}
              monthReturns={monthReturns}
              yearReturns={yearReturns}
            />
          )}
        </div>
      )}
    </div>
  );
}

import StockInfo from "@/components/stockinfo";

export default function Home() {
  return (
    <div className="p-5 w-full flex flex-col pt-14 items-center">
      <div className="mb-10">
        <h1 className="page-desc text-6xl md:text-7xl text-center font-semibold md:font-bold">
          Easy <br />
          Convenient <br />
          Fast
        </h1>
      </div>
      <div>
        <p className="text-xl mb-5 text-center">
          <span className="font-semibold">Stockex </span>is a minimal place to
          take a quick check on your stock <br /> holdings
        </p>
      </div>
      <StockInfo />
    </div>
  );
}

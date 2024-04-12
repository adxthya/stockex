import Image from "next/image";
import graph from "@/public/TradingView.jpg";

export default function Home() {
  return (
    <div className="p-5 w-full flex flex-col pt-14 items-center">
      <div className="mb-10">
        <h1 className="page-desc text-6xl md:text-8xl text-center font-inter  font-semibold md:font-bold">
          Easy <br />
          Convinient <br />
          Fast
        </h1>
      </div>
      <div>
        <p className="text-lg mb-5 text-center">
          <span className="font-semibold">Stock trade </span>is a minimal place
          to take a quick check on your stock <br /> holdings
        </p>
      </div>
      <div className="mb-5">
        <select className="select select-primary w-50 md:w-96 max-w-xs">
          <option
            disabled
            selected
          >
            Select a stock
          </option>
          <option>Svelte</option>
          <option>Vue</option>
          <option>React</option>
        </select>
      </div>
      <div className="w-fit border-2 border-gray-600 rounded-md p-2">
        <Image
          src={graph}
          alt="graph image"
          width={500}
          className="rounded-md"
        />
      </div>
    </div>
  );
}

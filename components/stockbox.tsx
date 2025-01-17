interface StockBoxProps {
  title: String | null;
  price?: string | null;
  variance?: string | null;
  yearReturns?: string | null;
  monthReturns?: string | null;
}

export default function StockBox({
  title,
  price,
  variance,
  monthReturns,
  yearReturns,
}: StockBoxProps) {
  return (
    <div className="w-full flex flex-col items-center gap-1">
      <p className="text-3xl font-semibold">{title}</p>
      <div className="flex justify-center space-x-2 text-lg">
        <p>Current Price:</p>
        <p>{price}</p>
      </div>
      <div className="flex justify-center space-x-2 text-lg">
        <p>Variance:</p>
        <p>{variance}</p>
      </div>
      <div className="flex justify-center space-x-2 text-lg">
        <p>Month Returns:</p>
        <p>{monthReturns}</p>
      </div>
      <div className="flex justify-center space-x-2 text-lg">
        <p>Year Returns:</p>
        <p>{yearReturns}</p>
      </div>
    </div>
  );
}

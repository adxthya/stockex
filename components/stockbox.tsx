interface StockBoxProps {
  title: String | null;
  price?: string | null;
  variance?: string | null;
}

export default function StockBox({ title, price, variance }: StockBoxProps) {
  return (
    <div className="w-full flex flex-col items-center p-5 gap-1">
      <p className="text-3xl font-semibold">{title}</p>
      <div className="flex justify-center space-x-2 text-lg">
        <p>Current Price:</p>
        <p>{price}</p>
      </div>
      <div className="flex justify-center space-x-2 text-lg">
        <p>Variance:</p>
        <p>{variance}</p>
      </div>
    </div>
  );
}

import { AiOutlineStock } from "react-icons/ai";
export default function Navbar() {
  return (
    <div className="h-10 w-full absolute px-5 py-2">
      <p className="flex items-center gap-1 text-lg font-poppins nav-title">
        <AiOutlineStock
          color="blue"
          size={20}
        />{" "}
        Stockex
      </p>
    </div>
  );
}

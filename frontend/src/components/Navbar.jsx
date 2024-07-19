import { RiRobot2Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 w-full h-24 bg-white text-red-600 shadow-md flex justify-between items-center px-6">
      <div className="flex items-center cursor-pointer" onClick={() => navigate("/")}>
        <RiRobot2Line size={50} className="mr-2" />
        <span className="text-2xl font-bold">HOLLY</span>
      </div>
      <div className="flex space-x-4 font-semibold">
        <button
          onClick={() => navigate("/search")}
          className="rounded-md border-2 text-black/75 border-slate-50 flex justify-center items-center hover:bg-gray-50 p-2 hover:scale-110 hover:text-black ease-in duration-100"
        >
          Search
        </button>
        <button
          onClick={() => navigate("/results")}
          className="rounded-md border-2 text-black/75 border-slate-50 flex justify-center items-center hover:bg-gray-50 p-2 hover:scale-110 hover:text-black ease-in duration-100"
        >
          Results
        </button>
      </div>
    </div>
  );
}

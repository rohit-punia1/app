import { useNavigate } from "react-router-dom";
import { parts } from "../data/parts";
import Card from "../components/card";

const Parts = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full ">
      <h1 className="my-5 text-center text-lg py-2 font-medium border-b-2">
        Select components for your PC
      </h1>
      <div className="flex overflow-x-scroll bg-[#F8FBFF] gap-10">
        {parts.map((part) => {
          return <Card key={part.name} part={part} />;
        })}
      </div>
      <button
        onClick={() => {
          navigate("/assamble");
        }}
        className="bg-red-500 px-4 py-2 rounded-lg text-white text-base block mx-auto my-5"
      >
        Assamble
      </button>
    </div>
  );
};

export default Parts;

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { selectedPartsContext } from "../context/selected-part-context";

const Fisnish = () => {
  const { choosenParts, clearContextData } = useContext(selectedPartsContext);
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-center text-2xl text-red-500 font-medium my-4">
        Your Computer Has Been Built With The Following Parts
      </h1>
      {choosenParts.map((choosenPart) => {
        return (
          <div
            key={choosenPart.id}
            className={` bg-blue-400 rounded-md max-w-sm my-2 mx-auto `}
          >
            <h1 className="px-2 py-4 text-sm text-white text-center">
              {choosenPart.name}
            </h1>
          </div>
        );
      })}
      <button
        onClick={() => {
          navigate("/");
          clearContextData();
        }}
        className="bg-red-500 px-4 py-2 rounded-lg text-white text-base block mx-auto my-5"
      >
        Assamble
      </button>
    </div>
  );
};

export default Fisnish;

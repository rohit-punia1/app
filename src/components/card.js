import { useContext } from "react";
import { selectedPartsContext } from "../context/selected-part-context";

const Card = ({ part }) => {
  const { selectedParts, addSelectedPart, removeSelectedPart } =
    useContext(selectedPartsContext);

  let ispartSelected = selectedParts.some((x) => x.name === part.name);
  const handlePartClick = (part) => {
    if (ispartSelected) {
      removeSelectedPart(part);
    } else {
      addSelectedPart(part);
    }
  };
  return (
    <div>
      <div className="flex justify-center ">
        <div className="rounded-lg shadow-lg bg-white w-80 ">
          <img className="rounded-t-lg aspect-video " src={part.img} alt="" />
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              {part.name}
            </h5>
            <p className="text-gray-700 text-base mb-4 truncate-3-lines ">
              {part.description}
            </p>
            <button
              type="button"
              onClick={() => handlePartClick(part)}
              className={`${
                ispartSelected
                  ? "bg-green-600 hover:bg-green-700 hover:shadow-lg "
                  : "bg-blue-600 hover:bg-blue-700 hover:shadow-lg "
              } inline-block px-6 py-2.5  text-white font-medium text-xs leading-tight uppercase rounded shadow-md  active:shadow-lg transition duration-150 ease-in-out`}
            >
              {ispartSelected ? "Selected" : "Select this Part"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

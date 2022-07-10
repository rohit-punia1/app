import React, { useState } from "react";

export const selectedPartsContext = React.createContext();
const PartsContext = ({ children }) => {
  const [selectedParts, setSelectedParts] = useState([]);
  const [choosenParts, setChoosenParts] = useState([]);

  const addSelectedPart = (part) => {
    setSelectedParts([...selectedParts, part]);
  };
  const removeSelectedPart = (part) => {
    let filteredPartsArray = selectedParts.filter((x) => x.name !== part.name);

    setSelectedParts(filteredPartsArray);
  };

  const clearContextData = () => {
    setSelectedParts([]);
    setChoosenParts([]);
  };
  return (
    <selectedPartsContext.Provider
      value={{
        selectedParts,
        addSelectedPart,
        removeSelectedPart,
        choosenParts,
        setChoosenParts,
        setSelectedParts,
        clearContextData,
      }}
    >
      {children}
    </selectedPartsContext.Provider>
  );
};

export default PartsContext;

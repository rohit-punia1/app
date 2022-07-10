import { React, useContext } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useNavigate } from "react-router-dom";
import { selectedPartsContext } from "../context/selected-part-context";

const Assamble = () => {
  const { selectedParts, choosenParts, setSelectedParts, setChoosenParts } =
    useContext(selectedPartsContext);
  const navigate = useNavigate();

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) {
      return;
    }
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    let add,
      selected = selectedParts,
      choosen = choosenParts;
    if (source.droppableId === "Selected-Parts") {
      add = selected[source.index];
      selected.splice(source.index, 1);
    } else {
      add = choosen[source.index];
      choosen.splice(source.index, 1);
    }

    if (destination.droppableId === "Selected-Parts") {
      selected.splice(destination.index, 0, add);
    } else {
      choosen.splice(destination.index, 0, add);
    }
    setSelectedParts(selected);
    setChoosenParts(choosen);
  };
  return (
    <div className="max-w-7xl  mx-1/4  ">
      <h1 className="text-center text-2xl text-red-500 font-medium">
        Drag & Drop To Assemble Your Computer
      </h1>
      <div className="md:flex md:justify-around ">
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="w-full md:w-96 ">
            <span className="text-lg font-semibold my-1 ">Available Parts</span>
            <Droppable droppableId={"Selected-Parts"}>
              {(Provided, droppableSnapshot) => (
                <div
                  className={`${
                    droppableSnapshot.isDraggingOver
                      ? "bg-indigo-200"
                      : "bg-indigo-100"
                  } h-80 py-2 `}
                  ref={Provided.innerRef}
                  {...Provided.droppableProps}
                >
                  {selectedParts.map((selectedPart, index) => (
                    <Draggable
                      key={selectedPart.id}
                      draggableId={`${selectedPart.id}`}
                      index={index}
                    >
                      {(draggableProvided, draggableSnapshot) => (
                        <div
                          ref={draggableProvided.innerRef}
                          {...draggableProvided.draggableProps}
                          {...draggableProvided.dragHandleProps}
                        >
                          <div
                            className={`${
                              draggableSnapshot.isDragging
                                ? "shadow-lg bg-cyan-400"
                                : null
                            }  bg-blue-400 my-2 mx-4 rounded-md `}
                          >
                            <h1 className="px-2 py-4 text-sm text-white text-center">
                              {selectedPart.name}
                            </h1>
                          </div>
                          <span className="hidden">{Provided.placeholder}</span>
                        </div>
                      )}
                    </Draggable>
                  ))}
                </div>
              )}
            </Droppable>
          </div>
          <div className="w-full md:w-96">
            <span className="text-lg font-semibold my-1 ">Choose Parts</span>

            <Droppable droppableId={"Choosen-Parts"}>
              {(Provided, droppableSnapshot) => (
                <div
                  className={`${
                    droppableSnapshot.isDraggingOver
                      ? "bg-indigo-200"
                      : "bg-indigo-100"
                  } h-80 py-2 `}
                  ref={Provided.innerRef}
                  {...Provided.droppableProps}
                >
                  {choosenParts.map((choosenPart, index) => (
                    <Draggable
                      key={choosenPart.id}
                      draggableId={`${choosenPart.id}`}
                      index={index}
                    >
                      {(draggableProvided, draggableSnapshot) => (
                        <div
                          ref={draggableProvided.innerRef}
                          {...draggableProvided.draggableProps}
                          {...draggableProvided.dragHandleProps}
                        >
                          <div
                            className={`${
                              draggableSnapshot.isDragging
                                ? "shadow-lg bg-cyan-400"
                                : null
                            }  bg-blue-400 my-2 mx-4 rounded-md `}
                          >
                            <h1 className="px-2 py-4 text-sm text-white text-center">
                              {choosenPart.name}
                            </h1>
                          </div>
                          <span className="hidden">{Provided.placeholder}</span>
                        </div>
                      )}
                    </Draggable>
                  ))}
                </div>
              )}
            </Droppable>
          </div>
        </DragDropContext>
      </div>
      <button
        onClick={() => {
          navigate("/finish", { state: { fromAssamblyPage: true } });
        }}
        className="bg-red-500 px-4 py-2 rounded-lg text-white text-base block mx-auto my-5"
      >
        Finish Assembly
      </button>
    </div>
  );
};

export default Assamble;

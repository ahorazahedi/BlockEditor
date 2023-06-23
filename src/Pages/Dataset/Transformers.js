import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { updataTransformers } from "../../Store/actions";
import { v4 } from "uuid";

const idGenerator = v4;

const BUILT_IN_TRANSFORMERS = [
  { id: idGenerator(), name: "To Tensor Built", type: "to_tensor", params: {} },
  {
    id: idGenerator(),
    name: "Resize",
    type: "resize",
    params: { to: 100 },
  },
];

const TransformerItem = ({ element }) => {
  return (
    <div className="flex flex-col justify-start items-start bg-white border border-red-300 my-1 ">
      This is Transformer Item
      <h1>{element.id}</h1>
      <h1>{element.name}</h1>
      <h1>{element.type}</h1>
    </div>
  );
};

const DataSetTransformers = () => {
  const dispatch = useDispatch();
  const transformers = useSelector((state) => state.dataset.transformers);

  const UpdateTransformers = (new_list) => {
    dispatch(updataTransformers(new_list));
  };

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    if (result.source.droppableId == "TRANSFORMER_TYPE") {
      let insert_index = result.destination.index;
      let item = {
        ...BUILT_IN_TRANSFORMERS[result.source.index],
        id: idGenerator(),
      };
      const items = Array.from(transformers);
      items.splice(insert_index, 0, item);
      UpdateTransformers(items);
    }

    if (result.source.droppableId == "TRANSFORMER") {
      const items = Array.from(transformers);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);

      UpdateTransformers(items);
    }
  };

  return (
    <div>
      Transformers
      <div className="flex flex-row">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <div className="flex flex-col flex-1 bg-violet-600">
            {" "}
            <Droppable droppableId="TRANSFORMER_TYPE" isDropDisabled={true}>
              {(provided, snapshot) => (
                <ul
                  className="characters"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {BUILT_IN_TRANSFORMERS.map((element, index) => {
                    return (
                      <Draggable
                        key={element.id}
                        draggableId={element.id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <>
                            <li
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <TransformerItem element={element} />
                            </li>

                            {snapshot.isDragging && (
                              <TransformerItem element={element} />
                            )}
                          </>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </div>

          <div className="flex flex-col flex-1 bg-gray-600">
            <Droppable droppableId="TRANSFORMER">
              {(provided) => (
                <ul
                  className="characters"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {transformers.map((element, index) => {
                    return (
                      <Draggable
                        key={element.id}
                        draggableId={element.id}
                        index={index}
                      >
                        {(provided) => (
                          <li
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <TransformerItem element={element} />
                          </li>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </div>
        </DragDropContext>
      </div>
    </div>
  );
};
export default DataSetTransformers;

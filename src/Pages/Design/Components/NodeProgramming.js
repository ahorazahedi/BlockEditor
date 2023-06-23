import React from "react";
import ReactFlow, { Background, Controls } from "react-flow-renderer";

import NeuralNode from "../../../FlowComponents/NeuralComponent";
import { useDispatch, useSelector } from "react-redux";
import {
  setAddBlockModalStatus,
  setRightClickLocation,
  addModelGraphEdge,
  removeModelGraphElement,
  setActiveModelLayerId,
  updateNodePosition,
} from "../../../Store/actions";
const snapGrid = [20, 20];

const nodeTypes = {
  neuralNode: NeuralNode,
};

export default () => {
  const active_block_type_id = useSelector(
    (state) => state.ui.active_block_type_id
  );

  const whole_block_types = useSelector((state) => state.blocks.block_types);

  const active_block_type = whole_block_types.find(
    (x) => x.id == active_block_type_id
  );

  if (active_block_type == undefined) {
    return "NONE";
  }

  console.log("whole_block_types", whole_block_types);
  console.log("active_block_type", active_block_type);

  let block_layers = active_block_type.layers;
  let block_edges = active_block_type.edges;

  // block_layers = [];
  // block_edges = [];

  //  console.log("Ahora" , active_block_type.layers)
  //  console.log("Ahora" , active_block_type.edges)

  const dispatch = useDispatch();

  console.log("block_layers", block_layers);

  const NodeElements = block_layers.map((layer_item) => {
    return {
      name: "AHORA",
      id: layer_item.id,
      type: "neuralNode",
      data: {
        name: "AHora",
        layer_type: layer_item.layerType,
        layer_id: layer_item.id,
        layer: layer_item,
        onRemove: () => {
          if (
            layer_item.layerType != "INPUT" &&
            layer_item.layerType != "OUTPUT"
          ) {
            dispatch(
              removeModelGraphElement(
                [{ id: layer_item.id }],
                active_block_type_id
              )
            );
          } else {
            alert("You Cannot Delete This ");
          }
        },
      },
      position: layer_item?.clientLocation,
    };
  });

  console.log("Node Elements", NodeElements);
  const EdgeElements = block_edges;

  // console.log("Renderd Elements", elements);

  return (
    <div style={{ height: "100%" }}>
      <ReactFlow
        onPaneClick={(event) => {}}
        onElementClick={(event, element) => {
          // console.log(event , element)

          if (element.type == "neuralNode") {
            dispatch(setActiveModelLayerId(element.id));
          }
        }}
        // elements={initialElements}
        elements={[...NodeElements, ...EdgeElements]}
        snapGrid={snapGrid}
        defaultZoom={1}
        nodeTypes={nodeTypes}
        onElementsRemove={(data) => {
          console.log("onElement Remove", data);
          let layert_type = data[0]["data"]["layer_type"];

          if (layert_type != "INPUT" && layert_type != "OUTPUT") {
            dispatch(removeModelGraphElement(data, active_block_type_id));
          } else {
            alert("You Cannot Delete This ");
          }
        }}
        onConnect={(data) => {
          dispatch(addModelGraphEdge(data, active_block_type_id));
        }}
        onSelectionDragStop={(e) => {
          console.log("onSelectionDragStop", e);
          // alert('Final Pause')
        }}
        onNodeDragStop={(event, node) => {
          // alert("Node Drag Stop")
          console.log("OnNodeDragStop", event, node);

          dispatch(updateNodePosition(node, active_block_type_id));
        }}
        onPaneContextMenu={(e) => {
          e.preventDefault();

          // dispatch(setAddBlockModalStatus("show"));
          dispatch(
            setRightClickLocation({
              x: e.nativeEvent.offsetX,
              y: e.nativeEvent.offsetY,
            })
          );
          console.log("rightClick on Canvas ", e);
        }}
        deleteKeyCode={46} /* 'delete'-key */
      >
        <Background
          style={{ backgroundColor: "#0D0C1D" }}
          color="#374151"
          variant="dots"
          gap={12}
          size={1}
        />
        <Controls />
      </ReactFlow>
    </div>
  );
};

import {
  ADD_LAYER_TO_MODEL,
  ADD_MODEL_GRAPH_EDGE,
  REMOVE_MODEL_GRAPH_ELEMENTS,
} from "../actionTypes";

import uuid from "uuid-random";
import { addEdge, removeElements } from "react-flow-renderer/dist/ReactFlow";
const initialState = {
  id: 1123,
  isPublic: false,
  createdAt: null,
  datasetConfig: {
    sampleCount: 8000,
    datasetName: "mnist",
    datasetInputType: "image",
    datasetOutputType: "label",
    inputShape: [28, 28],
    outputShape: [10],
    labelsNameMap: {
      0: "0",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
    },
  },
  hyperparameters: {
    batchSize: 10,
    epochs: 10,
    learningRate: 0.1,
  },
  lastSaveTime: 1234,
  layers: [],
  edges: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    // case ADD_LAYER_TO_MODEL:{
    //   const { layer, location } = action.payload;

    //   let config_obj = {};
    //   for (const key in layer.configParams) {
    //     if (layer.configParams.hasOwnProperty(key)) {
    //       const element = layer.configParams[key];
    //       config_obj[key] = element.defult;
    //     }
    //   }

    //   let new_layer = {
    //     id: uuid(),
    //     name: layer.name,
    //     // name:"aaa" ,
    //     layerType: layer.type,
    //     config: config_obj,
    //     clientLocation: { x: location.x, y: location.y },
    //   };
    //   return {
    //     ...state,
    //     layers: [...state.layers, new_layer],
    //   };}

    // case ADD_MODEL_GRAPH_EDGE: {
    //   const { data } = action.payload;
    //   console.log("ADD_MODEL", data);
    //   return {
    //     ...state,
    //     edges: addEdge(data, state.edges),
    //   };
    // }

  
    default:
      return state;
  }
}

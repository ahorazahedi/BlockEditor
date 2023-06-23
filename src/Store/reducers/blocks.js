import { v4 } from "uuid";
import {
  CREATE_NEW_BLOCK_TYPE,
  ADD_LAYER_TO_MODEL,
  ADD_MODEL_GRAPH_EDGE,
  REMOVE_MODEL_GRAPH_ELEMENTS,
  UPDATE_MODEL_LAYER_CONFIG,
  UPDATE_NODE_POSITION,
} from "../actionTypes";
import { addEdge, removeElements } from "react-flow-renderer/dist/ReactFlow";

import LayerDetails from "../../Constants/LayerDetails";

// import {} from '../../Constants/LayerTypes'
const idGenerator = v4;

const getLayerTypeInputsById = (blocks, layer_id) => {
  let layer_type = "";
  blocks.forEach((block) => {
    block.layers.forEach((layer) => {
      if (layer.id == layer_id) {
        layer_type = layer.layerType;
      }
    });
  });

  if (layer_type != "") {
    return LayerDetails[layer_type]["input_count"];
  }
  return 0;
};

const NEW_BLOCK_ARCHITECUTER = {
  id: idGenerator(),
  name: "BLOCK2",
  type: "CUSTOM_BLOCK_TYPE",
  params: {},
  description: "lorem ipsum is type of place holder that i love",

  layers: [
    {
      id: idGenerator(),
      name: "Input",
      layerType: "INPUT",
      config: {},
      clientLocation: {
        x: 200,
        y: 300,
      },
    },
    {
      id: idGenerator(),
      name: "Output",
      layerType: "OUTPUT",
      config: {},
      clientLocation: {
        x: 600,
        y: 450,
      },
    },
  ],

  edges: [],
};

const GenerateModel = () => {
  return {
    id: "MODEL",
    name: "MAIN MODEL",
    type: "MODEL",
    params: {},
    description: "This is Main Model`",

    layers: [
      {
        id: idGenerator(),
        name: "Input",
        layerType: "INPUT",
        config: {},
        clientLocation: {
          x: 172,
          y: 310,
        },
      },
      {
        id: idGenerator(),
        name: "Output",
        layerType: "OUTPUT",
        config: {},
        clientLocation: {
          x: 630,
          y: 477,
        },
      },
    ],

    edges: [],
  };
};

const initialState = {
  block_types: [GenerateModel()],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_NEW_BLOCK_TYPE: {
      const { name, description } = action.payload;
      const new_block = {
        ...NEW_BLOCK_ARCHITECUTER,
        name,
        description,
        id: idGenerator(),
      };
      return {
        ...state,
        block_types: [...state.block_types, new_block],
      };
    }

    case ADD_LAYER_TO_MODEL: {
      const { layer, location, active_block_type_id } = action.payload;

      let default_config_obj = {};
      for (let key in layer.configParams) {
        // if (layer.configParams.hasOwnProperty(key)) {
        const element = layer.configParams[key];
        // console.log(element["key"] , element['default'])
        default_config_obj[element["key"]] = element["default"];
        // }
      }

      console.log("Create new Layer default Config", default_config_obj, layer);

      let new_layer = {
        id: idGenerator(),
        name: layer.name,
        // name:"aaa" ,
        layerType: layer.type,
        config: default_config_obj,
        clientLocation: { x: location.x, y: location.y },
      };

      console.log("New Layer object", new_layer);
      let new_block_types = state.block_types.map((item) => {
        if (item.id == active_block_type_id) {
          item.layers = [...item.layers, new_layer];
        }
        return item;
      });

      return {
        ...state,

        block_types: new_block_types,
      };
    }

    case ADD_MODEL_GRAPH_EDGE: {
      const { data, active_block_type_id } = action.payload;
      console.log("ADD_EDGE", data);

      const { target, source } = data;

      let allowed_number_of_edges = getLayerTypeInputsById(
        state.block_types,
        target
      );

      let new_block_types = state.block_types.map((item) => {
        if (item.id == active_block_type_id) {
          let current_count_of_inputs = item.edges.filter(
            (x) => x.target == target
          ).length;

          if (current_count_of_inputs >= allowed_number_of_edges) {
            item.edges = addEdge(
              data,
              item.edges.filter((x) => x.target != target)
            );
          } else {
            item.edges = addEdge(data, item.edges);
          }
        }
        return item;
      });

      return {
        ...state,
        block_types: new_block_types,
      };
    }

    case REMOVE_MODEL_GRAPH_ELEMENTS: {
      const { data, active_block_type_id } = action.payload;

      ////Data is in Array Type
      console.log("REMOVE_MODEL_GRAPH_ELEMENTS", data);

      let new_block_types = state.block_types.map((item) => {
        if (item.id == active_block_type_id) {
          item.edges = addEdge(data, item.edges);

          item.edges = removeElements(data, item.edges);
          item.layers = removeElements(data, item.layers);
        }
        return item;
      });

      return {
        ...state,

        block_types: new_block_types,
      };
    }

    case UPDATE_MODEL_LAYER_CONFIG: {
      const { data } = action.payload;
      const { name, active_block_type_id, selected_layer_id, new_value } = data;
      let new_block_types = state.block_types.map((item) => {
        if (item.id == active_block_type_id) {
          item.layers = item.layers.map((layer_item) => {
            if (layer_item.id == selected_layer_id) {
              layer_item.config = { ...layer_item.config, [name]: new_value };
            }
            return layer_item;
          });
        }
        return item;
      });

      return {
        ...state,
        block_types: new_block_types,
      };
    }

    case UPDATE_NODE_POSITION: {
      const { node, active_block_type_id } = action.payload;
      let new_block_types = state.block_types.map((item) => {
        if (item.id == active_block_type_id) {
          item.layers = item.layers.map((layer_item) => {
            if (layer_item.id == node.id) {
              layer_item.clientLocation = node.position;
            }
            return layer_item;
          });
        }
        return item;
      });

      return {
        ...state,
        block_types: new_block_types,
      };
    }
    default:
      return state;
  }
}

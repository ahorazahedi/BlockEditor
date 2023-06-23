import {
  INIT_APP,
  SET_MODEL_LAYER_PARAM,
  SET_ADD_BLOCK_MODAL_STATUS,
  ADD_LAYER_TO_MODEL,
  SET_RIGHT_CLICK_LOCATION,
  ADD_MODEL_GRAPH_EDGE,
  REMOVE_MODEL_GRAPH_ELEMENTS,
  SET_ACTIVE_MODEL_LAYER_ID,
  SET_TERMINAL_UI_STATE,
  SET_CREATE_BLOCK_MODAL_STATUS,
  CREATE_NEW_BLOCK_TYPE,
  SET_ACTIVE_BLOCK_TYPE,
  UPDATE_MODEL_LAYER_CONFIG,
  UPDATE_NODE_POSITION,
  SET_DATASET_MODAL_STATUS,
  LOAD_DATA_SET,
  UPDATE_DATASET_TRANSFORMERS,
  UPDATE_MODEL_PARAMETERS,
  SET_MODEL_OPTIMIZER,
  UPDATE_MODEL_OPTIMIZER_PARAM,
  SET_MODEL_LOSS_FUNCTION,
  SET_RUNTIME_CONNECTION_STATUS,
  SET_RUNTIME_CONNECTION_PARAMS,
  SET_RUNTIME_CONNECTION_MODAL_STATUS,
  SET_RUNTIME_CONNECTION_ERROR,
} from "./actionTypes";

export const setActiveModelLayerId = (id) => {
  return {
    type: SET_ACTIVE_MODEL_LAYER_ID,
    payload: {
      id,
    },
  };
};

export const addModelGraphEdge = (data, active_block_type_id) => {
  return {
    type: ADD_MODEL_GRAPH_EDGE,
    payload: { data, active_block_type_id },
  };
};
export const removeModelGraphElement = (data, active_block_type_id) => {
  return {
    type: REMOVE_MODEL_GRAPH_ELEMENTS,
    payload: { data, active_block_type_id },
  };
};

export const setModelLayerParam = (layer_id, name, value) => {
  return {
    type: SET_MODEL_LAYER_PARAM,
    payload: {
      layer_id,
      name,
      value,
    },
  };
};

export const setAddBlockModalStatus = (new_status) => {
  return { type: SET_ADD_BLOCK_MODAL_STATUS, payload: { new_status } };
};

export const setCreateBlockModalStatus = (new_status) => {
  return { type: SET_CREATE_BLOCK_MODAL_STATUS, payload: { new_status } };
};

export const setRuntimeConnectionModalStatus = (new_status) => {
  return { type: SET_RUNTIME_CONNECTION_MODAL_STATUS, payload: { new_status } };
};

export const addLayerToModel = (layer, location, active_block_type_id) => {
  return {
    type: ADD_LAYER_TO_MODEL,
    payload: {
      layer,
      location,
      active_block_type_id,
    },
  };
};

export const setRightClickLocation = (location) => {
  return {
    type: SET_RIGHT_CLICK_LOCATION,
    payload: { location },
  };
};

export const initApp = () => {
  return {
    type: INIT_APP,
  };
};

export const setTerminalState = (terminal_state) => {
  return {
    type: SET_TERMINAL_UI_STATE,
    payload: { terminal_state },
  };
};

export const createNewBlockType = ({ name, description }) => {
  return {
    type: CREATE_NEW_BLOCK_TYPE,
    payload: { name, description },
  };
};

export const setActiveBlockType = ({ id }) => {
  return {
    type: SET_ACTIVE_BLOCK_TYPE,
    payload: {
      id,
    },
  };
};

export const updateModelLayerConfig = (data) => {
  return {
    type: UPDATE_MODEL_LAYER_CONFIG,
    payload: {
      data,
    },
  };
};

export const updateNodePosition = (node, active_block_type_id) => {
  return {
    type: UPDATE_NODE_POSITION,
    payload: {
      node,
      active_block_type_id,
    },
  };
};

export const setDataSetModalStatus = (new_status) => {
  return {
    type: SET_DATASET_MODAL_STATUS,
    payload: {
      new_status,
    },
  };
};

export const loadDataset = (dataset) => {
  return {
    type: LOAD_DATA_SET,
    payload: {
      dataset,
    },
  };
};

export const updataTransformers = (new_list) => {
  return {
    type: UPDATE_DATASET_TRANSFORMERS,
    payload: {
      new_list,
    },
  };
};

export const updateModelParameters = (name, new_value) => {
  return {
    type: UPDATE_MODEL_PARAMETERS,
    payload: {
      name,
      new_value,
    },
  };
};

export const setModelOptimizer = (optimizer) => {
  return {
    type: SET_MODEL_OPTIMIZER,
    payload: {
      optimizer,
    },
  };
};

export const updateModelOptimizerParam = (name, new_value) => {
  return {
    type: UPDATE_MODEL_OPTIMIZER_PARAM,
    payload: {
      name,
      new_value,
    },
  };
};

export const setModelLossFunction = (loss_fn) => {
  return {
    type: SET_MODEL_LOSS_FUNCTION,
    payload: {
      loss_fn,
    },
  };
};

export const setRuntimeConnectionStatus = (new_status) => {
  return {
    type: SET_RUNTIME_CONNECTION_STATUS,
    payload: {
      new_status,
    },
  };
};

export const setRuntimeConnctionParams = (name, new_value) => {
  return {
    type: SET_RUNTIME_CONNECTION_PARAMS,
    payload: {
      name,
      new_value,
    },
  };
};

export const setRuntimeConnectionError = (error) => {
  return {
    type: SET_RUNTIME_CONNECTION_ERROR,
    payload: {
      error,
    },
  };
};

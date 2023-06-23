import {
  ADD_LAYER_TO_MODEL,
  SET_ADD_BLOCK_MODAL_STATUS,
  SET_RIGHT_CLICK_LOCATION,
  SET_ACTIVE_MODEL_LAYER_ID,
  REMOVE_MODEL_GRAPH_ELEMENTS,
  SET_TERMINAL_UI_STATE,
 
  SET_ACTIVE_BLOCK_TYPE,
  SET_DATASET_MODAL_STATUS,
  LOAD_DATA_SET,
  SET_RUNTIME_CONNECTION_MODAL_STATUS,
} from "../actionTypes";

const initialState = {
  selected_layer_id: null,
  add_block_modal_status: "hide",

 

  select_dataset_status: "hide",

  right_click_location: {},

  active_file_name: "model",
  active_component_id: "conv",
  terminal_state: "hide",

  runtime_connection_modal_status: "hide",

  active_block_type_id: "MODEL",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case REMOVE_MODEL_GRAPH_ELEMENTS: {
      return { ...state, selected_layer_id: null };
    }
    
    case SET_RUNTIME_CONNECTION_MODAL_STATUS: {
      const { new_status } = action.payload;
      return {
        ...state,
        runtime_connection_modal_status: new_status,
      };
    }
    
    case LOAD_DATA_SET: {
      return {
        ...state,
        select_dataset_status: "hide",
      };
    }

    case SET_DATASET_MODAL_STATUS: {
      let { new_status } = action.payload;
      return {
        ...state,
        select_dataset_status: new_status,
      };
    }

    case SET_TERMINAL_UI_STATE: {
      let { terminal_state } = action.payload;
      return {
        ...state,
        terminal_state,
      };
    }
    case SET_ACTIVE_MODEL_LAYER_ID: {
      let { id } = action.payload;
      return {
        ...state,
        selected_layer_id: id,
      };
    }
    case SET_ADD_BLOCK_MODAL_STATUS: {
      let { new_status } = action.payload;

      return {
        ...state,
        add_block_modal_status: new_status,
      };
    }

 
    case ADD_LAYER_TO_MODEL: {
      return {
        ...state,
        add_block_modal_status: "hide",
      };
    }
    case SET_RIGHT_CLICK_LOCATION: {
      const { location } = action.payload;
      return {
        ...state,
        right_click_location: location,
        add_block_modal_status: "show",
      };
    }

    case SET_ACTIVE_BLOCK_TYPE: {
      const { id } = action.payload;
      return {
        ...state,
        active_block_type_id: id,
      };
    }
    default:
      return state;
  }
}

import {
  SET_RUNTIME_CONNECTION_ERROR,
  SET_RUNTIME_CONNECTION_PARAMS,
  SET_RUNTIME_CONNECTION_STATUS,
} from "../actionTypes";

const initialState = {
  connection_status: "disconnect",
  runtime_address: "localhost",
  runtime_port: 5000,
  runtime_log: [],
  runtime_error: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_RUNTIME_CONNECTION_ERROR: {
      const { error } = action.payload;
      return {
        ...state,
        runtime_error: error,
      };
    }
    case SET_RUNTIME_CONNECTION_STATUS: {
      const { new_status } = action.payload;

      return {
        ...state,
        connection_status: new_status,
        runtime_error: "",

      };
    }

    case SET_RUNTIME_CONNECTION_PARAMS: {
      const { name, new_value } = action.payload;
      return {
        ...state,
        [name]: new_value,
        runtime_error: "",
      };
    }
    default:
      return state;
  }
}

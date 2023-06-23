import * as ParameterTypes from "../../Constants/ParameterTypes";
import * as LossFnTypes from "../../Constants/LossFnTypes";
import * as OptimizerTypes from "../../Constants/OptimizerTypes";
import {
  SET_MODEL_LOSS_FUNCTION,
  SET_MODEL_OPTIMIZER,
  UPDATE_MODEL_OPTIMIZER_PARAM,
  UPDATE_MODEL_PARAMETERS,
} from "../actionTypes";

const initialState = {
  [ParameterTypes.BATCH_SIZE]: 10,
  [ParameterTypes.EPOCH_COUNT]: 10,
  [ParameterTypes.LEARNING_RATE]: 0.1,

  [ParameterTypes.LOSS_FUNCTION]: LossFnTypes.MSE,
  [ParameterTypes.OPTIMIZER]: OptimizerTypes.SGD,
  [ParameterTypes.OPTIMIZER_CONFIG]: {},
};

export default function (state = initialState, action) {
  switch (action.type) {

    case SET_MODEL_LOSS_FUNCTION : 
    {
      let {loss_fn} = action.payload
      return {
        ...state , 
        [ParameterTypes.LOSS_FUNCTION] : loss_fn
      }
    }
    case UPDATE_MODEL_OPTIMIZER_PARAM: {
      let { name, new_value } = action.payload;

      return {
        ...state,
        [ParameterTypes.OPTIMIZER_CONFIG]: {
          ...state[ParameterTypes.OPTIMIZER_CONFIG],
          [name]: new_value,
        },
      };
    }
    case SET_MODEL_OPTIMIZER: {
      let { optimizer } = action.payload;

      let default_config_obj = {};
      for (let key in optimizer.configParams) {
        // if (layer.configParams.hasOwnProperty(key)) {
        const element = optimizer.configParams[key];
        // console.log(element["key"] , element['default'])
        default_config_obj[element["key"]] = element["default"];
        // }
      }

      console.log(
        "Create new Optimizer default Config",
        default_config_obj,
        optimizer
      );

      return {
        ...state,
        [ParameterTypes.OPTIMIZER]: optimizer.type,
        [ParameterTypes.OPTIMIZER_CONFIG]: default_config_obj,
      };
    }
    case UPDATE_MODEL_PARAMETERS: {
      let { name, new_value } = action.payload;
      return {
        ...state,
        [name]: new_value,
      };
    }
    default:
      return state;
  }
}

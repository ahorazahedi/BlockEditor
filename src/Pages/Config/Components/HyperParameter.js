import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Hyperparameters from "../../../Constants/Hyperparameters";
import {
  BATCH_SIZE,
  EPOCH_COUNT,
  LEARNING_RATE,
} from "../../../Constants/ParameterTypes";
import { updateModelParameters } from "../../../Store/actions";
import ModelSettingItem from "./SettingItem";

export default function HyperParameter() {
  const dispatch = useDispatch();
  const model_parameters = useSelector((state) => state.hyperparameters);

  return (
    <div className="bg-white m-6 p-6 rounded">
      <div className="flex flex-row">
        <div className="flex-1 ">
          <div className="text-black">
            <ModelSettingItem
              element={Hyperparameters.BATCH_SIZE.configParams}
              user_element_value={model_parameters[BATCH_SIZE]}
              onChange={(name, new_value) => {
                dispatch(updateModelParameters(name, new_value));
              }}
              show_description
            />
            <ModelSettingItem
              element={Hyperparameters.LEARNING_RATE.configParams}
              user_element_value={model_parameters[LEARNING_RATE]}
              onChange={(name, new_value) => {
                dispatch(updateModelParameters(name, new_value));
              }}
              show_description
            />
            <ModelSettingItem
              element={Hyperparameters.EPOCH_COUNT.configParams}
              user_element_value={model_parameters[EPOCH_COUNT]}
              onChange={(name, new_value) => {
                dispatch(updateModelParameters(name, new_value));
              }}
              show_description
            />
          </div>
        </div>
      </div>
    </div>
  );
}

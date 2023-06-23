import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Hyperparameters from "../../../Constants/Hyperparameters";
import LossFnDetails from "../../../Constants/LossFnDetails";
import OptimizerDetails from "../../../Constants/OptimizerDetails";
import {
  BATCH_SIZE,
  EPOCH_COUNT,
  LEARNING_RATE,
} from "../../../Constants/ParameterTypes";
import {
  setModelOptimizer,
  updateModelParameters,
  updateModelOptimizerParam,
  setModelLossFunction,
} from "../../../Store/actions";
import ModelSettingItem from "./SettingItem";

export default function Optimizer() {
  const dispatch = useDispatch();
  const model_parameters = useSelector((state) => state.hyperparameters);

  const selected_optimizer = useSelector(
    (state) => state.hyperparameters.OPTIMIZER
  );

  const optimizer_setting = useSelector(
    (state) => state.hyperparameters.OPTIMIZER_CONFIG
  );

  const loss_fn = useSelector((state) => state.hyperparameters.LOSS_FUNCTION);
  // alert(selected_optimizer)

  console.log("Model Hyper parameters", model_parameters);
  return (
    <div className="bg-white m-6 p-6 rounded">
      <div className="flex flex-col">
        <div>
          <label
            htmlFor="paddingType"
            className="block text-sm font-medium text-gray-700"
          >
            Loss Fucntion
          </label>
          <select
            onChange={(e) => {
              let new_loss_fn = e.target.value;
              dispatch(setModelLossFunction(new_loss_fn));
            }}
            value={loss_fn}
            id="paddingType"
            name="paddingType"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            {Object.keys(LossFnDetails).map((loss_fn_key) => {
              let single_loss_fn = LossFnDetails[loss_fn_key];
              return (
                <option value={single_loss_fn.type}>
                  {single_loss_fn.name}
                </option>
              );
            })}
          </select>
          <label className="block text-sm font-medium text-gray-700">
            Select Loss Function for Your Model
          </label>
        </div>

        <div>
          <label
            htmlFor="paddingType"
            className="block text-sm font-medium text-gray-700"
          >
            Optimizer
          </label>
          <select
            id="paddingType"
            name="paddingType"
            onChange={(e) => {
              console.log(e.target.value);
              let selected_optimizer = e.target.value;

              dispatch(setModelOptimizer(OptimizerDetails[selected_optimizer]));
            }}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            {Object.keys(OptimizerDetails).map((optimizer_name) => {
              let optimizer_element = OptimizerDetails[optimizer_name];
              return (
                <option value={optimizer_element.type}>
                  {optimizer_element.name}
                </option>
              );
            })}
          </select>
          <label className="block text-sm font-medium text-gray-700">
            Select Optimizer of Your Model
          </label>
        </div>
      </div>

      {Object.keys(OptimizerDetails[selected_optimizer].configParams).length >
        0 && <h1 className="mt-10">Optimizer HyperParameters</h1>}
      {/* Render Optimizer Setting Items */}
      {/* <div className="flex flex-col bg-red-500"> */}
      {Object.keys(OptimizerDetails[selected_optimizer].configParams).map(
        (item) => {
          let element =
            OptimizerDetails[selected_optimizer]["configParams"][item];

          return (
            <ModelSettingItem
              element={element}
              user_element_value={optimizer_setting[item]}
              onChange={(name, new_value) => {
                dispatch(updateModelOptimizerParam(name, new_value));
              }}
            />
          );
        }
      )}
      {/* </div> */}
    </div>
    // </div>
  );
}

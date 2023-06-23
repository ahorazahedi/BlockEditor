import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as InputTypes from "../../../../Constants/InputTypes";

import { Switch } from "@headlessui/react";
import { updateModelLayerConfig } from "../../../../Store/actions";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SettingItem({
  setting_element,
  selected_layer_id,
  user_element_value,
  active_block_type_id,
}) {
  const dispatch = useDispatch();

  // const [value, setValue] = useState(user_element_value);
  // alert(user_element_value)

  const value = user_element_value

  const updateParameter = (name , new_value) => {
    dispatch(
      updateModelLayerConfig(
        {
          name , 
          active_block_type_id,
          selected_layer_id,
          new_value,
          active_block_type_id
        },
        // active_block_type_id
      )
    );
  };
  switch (setting_element.type) {
    case InputTypes.INTEGER: {
      return (
        <div>
          <label className="block text-sm font-medium text-gray-700">
            {setting_element.title}
          </label>
          <div className="mt-1">
            <input
              type="number"
              value={value}
              onChange={e=>{
                updateParameter(setting_element.key , e.target.value)
              }}
              className=" border border-gray-300  focus:border-gray-300 block w-full sm:text-sm border-gray-300 rounded-md p-2"
            />
          </div>
        </div>
      );
    }
    case InputTypes.FLOAT: {
      return (
        <div>
          <label className="block text-sm font-medium text-gray-700">
            {setting_element.title}
          </label>
          <div className="mt-1">
            <input
             
              type="number"
            
              value={value}
              onChange={e=>{
                updateParameter(setting_element.key , e.target.value)

              }}

              className=" border border-gray-300  focus:border-gray-300 block w-full sm:text-sm border-gray-300 rounded-md p-2"
            />
          </div>
        </div>
      );
    }
    case InputTypes.BOOLEAN: {
      let enabled = value;

      return (
        <div>
          <label className="block text-sm font-medium text-gray-700">
            {setting_element.title}
          </label>
          <div className="mt-1">
            <Switch
            onClick={()=>{
              if(value){
                updateParameter(setting_element.key , 0)

                // updateParameter(0)
              }else{
                updateParameter(setting_element.key ,1)

                // updateParameter(1)
              }
            }}
              className={classNames(
                enabled ? "bg-indigo-600" : "bg-gray-200",
                "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              )}
            >
              <span
                aria-hidden="true"
                className={classNames(
                  enabled ? "translate-x-5" : "translate-x-0",
                  "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                )}
              />
            </Switch>
          </div>
        </div>
      );
      // return (
      //   <Switch
      //     className={classNames(
      //       enabled ? "bg-indigo-600" : "bg-gray-200",
      //       "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      //     )}
      //   >
      //     <span className="sr-only">Use setting</span>
      //     <span
      //       aria-hidden="true"
      //       className={classNames(
      //         enabled ? "translate-x-5" : "translate-x-0",
      //         "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
      //       )}
      //     />
      //   </Switch>
      // );
    }

    case InputTypes.STRING: {
      return (
        <div>
          <label className="block text-sm font-medium text-gray-700">
            {setting_element.title}
          </label>
          <div className="mt-1">
            <input
              type="text"
              onChange={e=>{
                updateParameter(e.target.value)
              }}
              value = {value}
              //     value={64}
              className=" border border-gray-300  focus:border-gray-300 block w-full sm:text-sm border-gray-300 rounded-md p-2"
            />
          </div>
        </div>
      );
    }

    case InputTypes.ACTIVATION_FUNCTION: {
      return (
        <div>
          <label
            htmlFor="paddingType"
            className="block text-sm font-medium text-gray-700"
          >
            {setting_element.title}
          </label>
          <select

            id="paddingType"
            name="paddingType"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="noactivation">No Activation</option>
            <option value="sigmoid">Sigmoid</option>
            <option value="relu">Relu</option>
            <option value="leakyRelu">Leaky Relu</option>
          </select>
        </div>
      );
    }

    case InputTypes.PADDING_TYPES:
      return (
        <div>
          <label
            htmlFor="paddingType"
            className="block text-sm font-medium text-gray-700"
          >
            {setting_element.title}
          </label>
          <select
            id="paddingType"
            name="paddingType"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="valid">Valid</option>
            <option value="same">Same</option>
          </select>
        </div>
      );

    case InputTypes.VALUE_INITIALIZER:
      return (
        <div>
          <label
            htmlFor="paddingType"
            className="block text-sm font-medium text-gray-700"
          >
            {setting_element.title}
          </label>
          <select
            id="valueInitilizer"
            name="valueInitilizer"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="zeros">Zeros</option>
            <option value="randNormal">Random Normal</option>
          </select>
        </div>
      );
  }

  return null;
}

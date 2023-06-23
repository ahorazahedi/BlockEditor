import React from "react";
import { useDispatch } from "react-redux";
import * as InputTypes from "../../../Constants/InputTypes";

import { Switch } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ModelSettingItem({
  element,
  onChange,
  user_element_value,
  show_description = false,
}) {
  const value = user_element_value;

  const updateParameter = (name, new_value) => {
    onChange(name, new_value);
  };
  let setting_element = element;



  console.log("sobhan" , element)
  // return null;
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
              onChange={(e) => {
                updateParameter(setting_element.key, e.target.value);
              }}
              className=" border border-gray-300  focus:border-gray-300 block w-full sm:text-sm border-gray-300 rounded-md p-2"
            />
          </div>
          <label className="block text-sm font-medium text-gray-700">
            {element.description}
          </label>
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
              onChange={(e) => {
                updateParameter(setting_element.key, e.target.value);
              }}
              className=" border border-gray-300  focus:border-gray-300 block w-full sm:text-sm border-gray-300 rounded-md p-2"
            />
          </div>
          <label className="block text-sm font-medium text-gray-700">
            {element.description}
          </label>
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
              onClick={() => {
                if (value) {
                  updateParameter(setting_element.key, 0);

                  // updateParameter(0)
                } else {
                  updateParameter(setting_element.key, 1);

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
          <label className="block text-sm font-medium text-gray-700">
            {element.description}
          </label>
        </div>
      );
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
              onChange={(e) => {
                updateParameter(e.target.value);
              }}
              value={value}
              //     value={64}
              className=" border border-gray-300  focus:border-gray-300 block w-full sm:text-sm border-gray-300 rounded-md p-2"
            />
          </div>
          <label className="block text-sm font-medium text-gray-700">
            {element.description}
          </label>
        </div>
      );
    }

    case InputTypes.LOSS_FUNCTION: {
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
            <option value="noactivation">MSE</option>
            <option value="sigmoid">Cross Entropy</option>
          </select>
          <label className="block text-sm font-medium text-gray-700">
            {element.description}
          </label>
        </div>
      );
    }
  }

  return null;
}

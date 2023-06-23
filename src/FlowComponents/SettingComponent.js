import React from "react";

export default function SettingComponent({
  setting_element,
  selected_layer_id,
  user_element_value,
}) {
  return (
    <div className="component-setting-item">
      <label className="block text-sm font-medium text-gray-700">
        {setting_element.title}
      </label>
      <div className="mt-1">
        <input
          disabled
          type="number"
          value={64}
          className=" border border-gray-300  focus:border-gray-300 block w-full sm:text-sm border-gray-300 rounded-md p-2 bg-dark"
        />
      </div>
    </div>
  );
}

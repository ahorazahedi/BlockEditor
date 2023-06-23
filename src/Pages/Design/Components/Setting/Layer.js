import React from "react";
import { useSelector } from "react-redux";

import LayerDetails from "../../../../Constants/LayerDetails";
import SettingItem from "./SettingItem";
export default function LayerSetting({}) {
  const selected_layer_id = useSelector((state) => state.ui.selected_layer_id);
  const selected_block_id = useSelector(
    (state) => state.ui.active_block_type_id
  );
  const whole_block_types = useSelector((state) => state.blocks.block_types);

  const active_block_type = whole_block_types.find(
    (x) => x.id == selected_block_id
  );

  const model_layer = active_block_type.layers.find(
    (x) => x.id == selected_layer_id
  );

  const model_layer_detail = LayerDetails[model_layer.layerType];

  const configParams = model_layer_detail.configParams;

  console.log(
    "Layer Compoenent",
    model_layer,
    model_layer_detail,
    configParams
  );

  return (
    <div className="bg-white m-6 p-6 rounded">
      <leagend>Layer Setting</leagend>
      {Object.keys(configParams).map(function (key, index) {
        let setting_element = configParams[key];

        console.log("Setting Element", setting_element);
        let user_element_value = model_layer["config"][setting_element["key"]];

        console.log("USER ELEMENT VLAUE", user_element_value);

        return (
          <div className="mt-4">
            <SettingItem
              setting_element={setting_element}
              selected_layer_id={selected_layer_id}
              user_element_value={user_element_value}
              active_block_type_id={selected_block_id}
            />
          </div>
        );
      })}
    </div>
  );
}

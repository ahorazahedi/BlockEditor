import React, { memo } from "react";

import { Handle } from "react-flow-renderer";
import SettingComponent from "./SettingComponent";
import LayerDetails from "./../Constants/LayerDetails";
import { useSelector } from "react-redux";
import classnames from "classnames";
const Styles = {
  container: {
    borderColor: "#474973",
    borderWidth: "2px",
    borderRadius: "9px",
    backgroundColor: "#161B33",
    width: "200px",
    color: "white",
    padding: "11px 19px",
    border: "2px solid #474973",
  },
  // selectedContainer: {
  //   borderColor: "rgb(255, 255, 255)",
  //   borderWidth: "5px",
  // },
  handle: {
    background: "#474973",
    height: "60px",
    width: "10px",
    borderRadius: "5px",
    borderColor: "transparent",
    borderWidth: "0px",
  },
};

export default ({ data, isConnectable }) => {
  let LayerDetail = LayerDetails[data.layer_type];

  // console.log("Neural Component", data, LayerDetail);

  const selected_layer_id = useSelector((state) => state.ui.selected_layer_id);
  const model_layer_detail = LayerDetails[data.layer.layerType];
  const configParams = model_layer_detail.configParams;
  return (
    <>
      {LayerDetail["input_count"] > 0 && (
        <Handle
          type="target"
          position="left"
          id="input"
          style={{
            ...Styles.handle,
          }}
          onConnect={(params) => console.log("handle onConnect", params)}
          isConnectable={isConnectable}
        />
      )}

      <div
        style={Styles.container}
        className={classnames({
          "border-white": selected_layer_id == data.layer_id,
        })}
      >
        <div
          className="w-full flex
          flex-col
          items-start justify-between px-4"
        >
          <div className="flex flex-col items-start justify-center">
            <span style={{ fontSize: 15 }}>{LayerDetail.name}</span>
            <span style={{ fontSize: 12 }}>conv1d8989890890-2</span>
          </div>
        </div>
        <div>
          {Object.keys(configParams).map(function (key, index) {
            let setting_element = configParams[key];
            let user_element_value = data.layer["config"][key];

            if (setting_element.show_in_detail) {
              return (
                <div className="mt-4">
                  <SettingComponent
                    setting_element={setting_element}
                    selected_layer_id={selected_layer_id}
                    user_element_value={user_element_value}
                  />
                </div>
              );
            }
          })}
        </div>
        {/* This is Features of component */}
      </div>
      {LayerDetail["output_count"] > 0 && (
        <Handle
          type="source"
          position="right"
          id="output"
          style={{
            ...Styles.handle,
          }}
          isConnectable={isConnectable}
        />
      )}
    </>
  );
};

import React, { useState } from "react";

import ResizePanel from "react-resize-panel";
import LayerSetting from "./Setting/Layer";

import { useSelector } from "react-redux";

const tabs = [{ name: "Layer", href: "#", current: false }];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Side() {
  const selected_layer_id = useSelector((state) => state.ui.selected_layer_id);
  const selected_block_id = useSelector(
    (state) => state.ui.active_block_type_id
  );
  const whole_block_types = useSelector((state) => state.blocks.block_types);

  const active_block_type = whole_block_types.find(
    (x) => x.id == selected_block_id
  );

  // const layer_exist_and_selected = useSelector(
  //   (state) =>
  //     state.model.layers.findIndex((x) => x.id == selected_layer_id) > -1
  // );

  const layer_exist_and_selected =
    active_block_type.layers.findIndex((x) => x.id == selected_layer_id) > -1;

  // return null;
  return (
    // <ResizePanel direction="w" style={{ flexGrow: 1 }}>
    <aside className="block  bg-white border-l  overflow-y-auto bg-dark   w-96">
      <div className="flex flex-col ">
        {layer_exist_and_selected ? (
          <div className="flex flex-col h-full">
            {/* Layer Exist */}
            <LayerSetting
              selected_layer_id={selected_layer_id}
              selected_block_id={selected_block_id}
            />
          </div>
        ) : (
          <div className="flex flex-1 ">
            <div className="flex flex-col justify-center items-center w-full h-full ">
              <span className="text-white">
                Select Element To Change Properties
              </span>
            </div>
          </div>
        )}
      </div>
    </aside>
    // </ResizePanel>
  );
}

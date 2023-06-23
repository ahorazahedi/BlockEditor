import React from "react";
import NodeProgramming from "./Components/NodeProgramming";
import Side from "./Components/Side";

import { useDispatch, useSelector } from "react-redux";

export default function ModelDesign() {
  const active_block_type_id = useSelector(
    (state) => state.ui.active_block_type_id
  );
  const dispatch = useDispatch();

  return (
    <div className="flex-1 flex items-stretch overflow-hidden ">

      <main className="flex-1 overflow-y-auto grow">
        <section
          aria-labelledby="primary-heading"
          className="min-w-0 flex-1 h-full flex flex-col lg:order-last"
        >
          <NodeProgramming />
        </section>
      </main>

      <Side />
    </div>
  );
}

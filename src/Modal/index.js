import React from "react";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";
import { setAddBlockModalStatus } from "../Store/actions";

import SelectComponentModal from "./SelectComponentModal";
import CreateBlockModal from "./CreateBlockModal";
import SelectDatasetModal from "./SelectDatasetModal";
import RuntimeConnectionModal from "./RuntimeConnectionModal";
export default function ModalContainer() {
  const add_block_modal_status = useSelector(
    (state) => state.ui.add_block_modal_status
  );

  const create_block_modal_status = useSelector(
    (state) => state.ui.create_block_modal_status
  );

  const select_dataset_status = useSelector(
    (state) => state.ui.select_dataset_status
  );

  const runtime_connection_modal_status = useSelector(
    (state) => state.ui.runtime_connection_modal_status
  );

  const dispatch = useDispatch();
  return (
    <>
      <div
        className={classNames(
          "w-full h-full fixed top-0 right-0 left-0 bottom-0 z-50 flex justify-center items-center ",
          {
            visible: add_block_modal_status == "show",
            // create_block_modal_status == "show",
            invisible: add_block_modal_status == "hide",
            // create_block_modal_status == "hide",
          }
        )}
        style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
      >
        {add_block_modal_status == "show" && <SelectComponentModal />}
      </div>

    

      <div
        className={classNames(
          "w-full h-full fixed top-0 right-0 left-0 bottom-0 z-50 flex justify-center items-center ",
          {
            visible: select_dataset_status == "show",
            invisible: select_dataset_status == "hide",
          }
        )}
        style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
      >
        {select_dataset_status == "show" && <SelectDatasetModal />}
      </div>

      <div
        className={classNames(
          "w-full h-full fixed top-0 right-0 left-0 bottom-0 z-50 flex justify-center items-center ",
          {
            visible: runtime_connection_modal_status == "show",
            invisible: runtime_connection_modal_status == "hide",
          }
        )}
        style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
      >
        {runtime_connection_modal_status == "show" && (
          <RuntimeConnectionModal />
        )}
      </div>
    </>
  );
}

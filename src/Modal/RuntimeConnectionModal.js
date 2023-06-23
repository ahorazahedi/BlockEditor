import LayerDetails from "../Constants/LayerDetails";
import { ChipIcon } from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import {
  setRuntimeConnctionParams,
  setRuntimeConnectionModalStatus,
} from "../Store/actions";
import AddBlockItem from "./components/AddBlockItem";
import classNames from "classnames";
export default function RuntimeConnectionModal() {
  const dispatch = useDispatch();
  const runtimeState = useSelector((state) => state.runtime);

  const connection_status = runtimeState["connection_status"];

  const runtime_address = runtimeState["runtime_address"];
  const runtime_port = runtimeState["runtime_port"];

  const runtime_log = runtimeState["runtime_log"];

  const runtime_error = runtimeState["runtime_error"];

  const updateParameter = (name, new_value) => {
    dispatch(setRuntimeConnctionParams(name, new_value));
  };

  const RequestToConnectRunTime = () => {
    const event = new Event("connect_to_runtime");
    window.dispatchEvent(event);
    console.log("DISPATHCING EVENT");
  };

  const RequestToDisconnectRunTime = () => {
    const event = new Event("disconnect_from_runtime");

    console.log("DISPATHCING EVENT");
    window.dispatchEvent(event);
  };

  return (
    <div className="library-container">
      <div
        className="library-close"
        onClick={() => {
          dispatch(setRuntimeConnectionModalStatus("hide"));
        }}
      >
        x
      </div>
      RunTime Connection Modal
      <div className="library-content flex flex-row">
        <div className="library-side-container">
          <h2 className="text-xl text-white pt-2 pb-3">Setting</h2>
          <input className="library-search text-white" placeholder="search" />

          <div className="flex-row flex justify-start items-center px-2 py-2">
            <ChipIcon color="white" className=" h-5 w-5 mt-2 mb-2 mr-2" />
            <span className="text-sm text-white">Connection</span>
          </div>

          <div className="flex-row flex justify-start items-center px-2 py-2">
            <ChipIcon color="white" className=" h-5 w-5 mt-2 mb-2 mr-2" />
            <span className="text-sm text-white">Log</span>
          </div>
        </div>
        <div className="w-full">
          <div className="w-full">
            <h2 className="text-white text-2xl p-3">Connect To Runtime</h2>
          </div>
          <div className="w-full p-3 ">
            <div className="flex flex-col w-full">
              {runtime_error != "" && (
                <div
                  className={classNames(
                    " rounded px-4 py-2 text-white bg-red-400 mb-2"
                  )}
                >
                  {runtime_error}
                </div>
              )}

              <div className="w-1/2">
                <div
                  className={classNames(" rounded px-4 py-2 text-white", {
                    "bg-green-800": connection_status == "connect",
                    "bg-blue-800": connection_status == "connecting",
                    "bg-red-800": connection_status == "disconnect",
                  })}
                >
                  Current Status : {connection_status}
                </div>

                {/* ////////RunTime Connection Address And Port ///// */}

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    RunTime Ip
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      onChange={(e) => {
                        updateParameter("runtime_address", e.target.value);
                      }}
                      value={runtimeState["runtime_address"]}
                      //     value={64}
                      className=" border    focus:border-gray-300 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                    />
                  </div>
                  <label className="block text-sm font-medium text-gray-700">
                    for Example : 127.0.0.1
                  </label>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Port
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      onChange={(e) => {
                        updateParameter("runtime_port", e.target.value);
                      }}
                      value={runtimeState["runtime_port"]}
                      //     value={64}
                      className=" border   focus:border-gray-300 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                    />
                  </div>
                  <label className="block text-sm font-medium text-gray-700">
                    for Example : 5000
                  </label>
                </div>
              </div>

              <div className="w-full flex justify-end items-center">
                {runtimeState["connection_status"] != "connect" && (
                  <button
                    className="rounded bg-light p-2 px-4 text-white "
                    onClick={() => {
                      RequestToConnectRunTime();
                    }}
                  >
                    Connect
                  </button>
                )}

                {runtimeState["connection_status"] == "connect" && (
                  <button
                    className="rounded   bg-red-700 p-2 px-4 text-white "
                    onClick={() => {
                      RequestToDisconnectRunTime();
                    }}
                  >
                    Disconnect
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import LayerDetails from "../Constants/LayerDetails";
import { ChipIcon } from "@heroicons/react/outline";
import { useDispatch } from "react-redux";
import {
  setCreateBlockModalStatus,
  createNewBlockType,
} from "../Store/actions";
import AddBlockItem from "./components/AddBlockItem";
import { useState } from "react";
export default function CreateBlockModal() {
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [description, setDescription] = useState();

  const createNew = () => {
    dispatch(createNewBlockType({ name, description }));
    setName("");
    setDescription("");
    dispatch(setCreateBlockModalStatus("hide"));
  };

  return (
    <div className="library-container">
      <div
        className="library-close"
        onClick={() => {
          dispatch(setCreateBlockModalStatus("hide"));
        }}
      >
        x
      </div>

      <div className="library-content flex flex-row min-h-max">
        <div className="w-full">
          <h2 className="text-white text-2xl p-3">Create New Block Type</h2>
        <p className="text-white p-3">
Ipsum consequat adipisicing dolore aliqua nostrud eu incididunt quis sunt cillum proident est laborum incididunt.Elit cillum minim minim aliqua ad.
        </p>
        </div>

        <div className="flex flex-col w-full">
          <div className="mt-3">
            <label className="block text-sm font-medium text-gray-700">
              Block Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
                //     value={64}
                className=" border border-gray-300  focus:border-gray-300 block w-full sm:text-sm border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          <div className="mt-3">
            <label className="block text-sm font-medium text-gray-700">
              Block Description
            </label>
            <div className="mt-1">
              <input
                type="text"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                value={description}
                //     value={64}
                className=" border border-gray-300  focus:border-gray-300 block w-full sm:text-sm border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          <div className="w-full flex flex-row justify-end mt-2">
            <button
              className="bg-light text-white font-bold py-2 px-4 rounded flex-col flex mb-2 mt-2 text-center"
              onClick={() => {
                createNew();
              }}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

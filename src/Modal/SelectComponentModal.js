import LayerDetails from "../Constants/LayerDetails";
import { ChipIcon } from "@heroicons/react/outline";
import { useDispatch } from "react-redux";
import { setAddBlockModalStatus } from "../Store/actions";
import AddBlockItem from "./components/AddBlockItem";
export default function SelectComponentModal() {
  const dispatch = useDispatch();
  return (
    <div className="library-container">
      <div
        className="library-close"
        onClick={() => {
          dispatch(setAddBlockModalStatus("hide"));
        }}
      >
        x
      </div>
      This is Select Component Modal
      <div className="library-content flex flex-row">
        <div className="library-side-container">
          <h2 className="text-xl text-white pt-2 pb-3">Blocks</h2>
          <input className="library-search text-white" placeholder="search" />

          <div className="flex-row flex justify-start items-center px-2 py-2">
            <ChipIcon color="white" className=" h-5 w-5 mt-2 mb-2 mr-2" />
            <span className="text-sm text-white">Image Layers</span>
          </div>
        </div>
        <div>
          <div className="w-full">
            <h2 className="text-white text-2xl p-3">Image Based Layers</h2>
          </div>
          <div className="library-items-container ">
            {Object.keys(LayerDetails).map(function (key, index) {
              let element = LayerDetails[key];

              if (element["show_in_modal"]) {
                return <AddBlockItem element={element} />;
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

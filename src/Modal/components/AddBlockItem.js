import { ChipIcon } from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import LayerDetails from "../../Constants/LayerDetails";
import { addLayerToModel } from "../../Store/actions";

export default function AddBlockItem({ element }) {
  const dispatch = useDispatch();

  const active_block_type_id = useSelector(
    (state) => state.ui.active_block_type_id
  );




  const right_click_location = useSelector(
    (state) => state.ui.right_click_location
  );
  return (
    <div
      className="library-item"
      onClick={() => {
        dispatch(addLayerToModel(element, right_click_location , active_block_type_id));
      }}
    >
      <ChipIcon color="white" className="text-sm h-8 w-8 mt-2 mb-2" />
      <span
        style={{
          boxSizing: "border-box",
          margin: "0px 0px 8px",
          minWidth: "0px",
          fontSize: "16px",
          fontWeight: "700",
        }}
      >
        {element["name"]}
      </span>
      <span
        style={{
          boxSizing: "border-box",
          margin: "0px",
          minWidth: "0px",
          color: "rgb(197, 203, 210)",
        }}
      >
        {element["description"]}
      </span>
    </div>
  );
}

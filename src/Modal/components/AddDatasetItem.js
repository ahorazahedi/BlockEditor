import { ChipIcon } from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import { loadDataset } from "../../Store/actions";

export default function AddDataSetItem({ element }) {
  const dispatch = useDispatch();

  return (
    <div
      className="library-item"
      onClick={() => {
        dispatch(loadDataset(element));
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

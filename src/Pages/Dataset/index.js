import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setDataSetModalStatus } from "../../Store/actions";
import DataSetTransformers from "./Transformers";
import DataSetInformation from "./Information";
export default function DatasetPage() {
  const dispatch = useDispatch();
  const ui = useSelector((state) => state.ui);
  const dataset = useSelector((state) => state.dataset);

  if (dataset.is_selected) {
    return (
      <div>
        {dataset.pytorch_default_dataset && (
          <div>
            <h1>Currently Using Prepared Dataset </h1>

            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                dispatch(setDataSetModalStatus("show"));
              }}
            >
              Change DataSet
            </button>
          </div>
        )}

        <DataSetInformation />
        <DataSetTransformers />
      </div>
    );
  } else {
    return (
      <div>
        <div>
          Currently No DataSet is Avaliable
          <h1>Please Select Data Set First </h1>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              dispatch(setDataSetModalStatus("show"));
            }}
          >
            Select
          </button>
        </div>
      </div>
    );
  }
}

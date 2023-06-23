import { v4 } from "uuid";
import { LOAD_DATA_SET, UPDATE_DATASET_TRANSFORMERS } from "../actionTypes";
const idGenerator = v4;

const initialState = {
  is_selected: false,
  pytorch_default_dataset: true,
  type: "image",
  transformers: [
    { id: idGenerator(), name: "To Tensor", type: "to_tensor", params: {} },
    {
      id: idGenerator(),
      name: "Resize",
      type: "resize",
      params: { to: 100 },
    },
  ],
  dataset_detail: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOAD_DATA_SET: {
      const { dataset } = action.payload;

      return {
        ...state,
        dataset_detail: dataset,
        is_selected: true,
        pytorch_default_dataset: true,
        transformers: [],
      };
    }

    case UPDATE_DATASET_TRANSFORMERS: {
      const { new_list } = action.payload;

      return {
        ...state,
        transformers: new_list,
      };
    }
    default:
      return state;
  }
}

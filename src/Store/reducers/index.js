import { combineReducers } from "redux";
import model from "./model";
import ui from "./ui";
import hyperparameters from "./hyperparameters";
import blocks from "./blocks";
import dataset from "./dataset";
import runtime from "./runtime";

export default combineReducers({
  model,
  ui,
  dataset,
  blocks,
  runtime,
  hyperparameters,
});

import * as ParameterTypes from "./ParameterTypes";
import * as InputTypes from "./InputTypes";

 

const Hyperparameters = {
  [ParameterTypes.BATCH_SIZE]: {
    type: ParameterTypes.BATCH_SIZE,
    name: "Batch Size",
    description: "Batch Size of Each Epoch ",
    configParams: {
      title: "Batch Size",
      type: InputTypes.INTEGER,
      default: true,
      key: "BATCH_SIZE",
    },
    show_in: "hyperparameters",
    statement: true,
  },
  [ParameterTypes.LEARNING_RATE]: {
    type: ParameterTypes.LEARNING_RATE,
    name: "Learning Rate",
    description: "Learning Rate",
    configParams: {
      title: "Learning Rate",
      type: InputTypes.INTEGER,
      default: true,
      key: "LEARNING_RATE",
    },
    show_in: "hyperparameters",
    statement: true,
  },
  [ParameterTypes.EPOCH_COUNT]: {
    type: ParameterTypes.EPOCH_COUNT,
    name: "EPOCH_COUNT",
    description: "EPOCH_COUNT ",
    configParams: {
      title: "EPOCH_COUNT",
      type: InputTypes.INTEGER,
      default: true,
      key: "EPOCH_COUNT",
    },
    show_in: "hyperparameters",
    statement: true,
  },
};

export default Hyperparameters;

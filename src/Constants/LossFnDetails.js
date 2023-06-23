import * as LossFnTypes from "./LossFnTypes";
import * as InputTypes from "./InputTypes";
const LossFnDetails = {
  [LossFnTypes.MSE]: {
    type: LossFnTypes.MSE,
    name: "MSE",
    description: "Mean Square Error",
    configParams: {},
  },
  [LossFnTypes.CROSS_ENTROPY_LOSS]: {
    type: LossFnTypes.CROSS_ENTROPY_LOSS,
    name: "Cross Entropy Loss",
    description: "Cross Entropy Loss",
    configParams: {},
  },
};

export default LossFnDetails;

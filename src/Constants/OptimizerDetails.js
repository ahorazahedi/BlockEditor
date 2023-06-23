import * as OptimizerTypes from "./OptimizerTypes";
import * as InputTypes from "./InputTypes";
const OptimizerDetails = {
  [OptimizerTypes.SGD]: {
    type: OptimizerTypes.SGD,
    name: "SGD",
    description: "SDG Optimizer",
    configParams: {},
  },
  [OptimizerTypes.ADAM]: {
    type: OptimizerTypes.ADAM,
    name: "ADAM",
    description: "ADAM Optimizer",
    configParams: {
      beta_1: {
        title: "Beta 1 ",
        type: InputTypes.INTEGER,
        default: 3,
        key: "beta_1",
      },
      beta_2: {
        title: "Beta 2 ",
        type: InputTypes.INTEGER,
        default: 3,
        key: "beta_2",
      },
      epsilon: {
        title: "Epsilon ",
        type: InputTypes.INTEGER,
        default: 3,
        key: "epsilon",
      },
    },
  },

  [OptimizerTypes.ADA_DELTA]: {
    type: OptimizerTypes.ADA_DELTA,
    name: "ADA_DELTA",
    description: "ADA_DELTA Optimizer",
    configParams: {
      beta_1: {
        title: "Beta 1 ",
        type: InputTypes.INTEGER,
        default: 3,
        key: "beta_1",
      },
      beta_2: {
        title: "Beta 2 ",
        type: InputTypes.INTEGER,
        default: 3,
        key: "beta_2",
      },
      epsilon: {
        title: "Epsilon ",
        type: InputTypes.INTEGER,
        default: 3,
        key: "epsilon",
      },
    },
  },
};

export default OptimizerDetails;

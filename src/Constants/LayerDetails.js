import * as LayerTypes from "./LayerTypes";
import * as InputTypes from "./InputTypes";
const LayerDetails = {
  [LayerTypes.INPUT]: {
    type: LayerTypes.INPUT,
    name: "Input",
    description: "Input Of Neural Network",
    input_count: 0,
    output_count: 1,
    configParams: {},
    show_in_modal: false,
  },

  [LayerTypes.OUTPUT]: {
    type: LayerTypes.OUTPUT,
    name: "Output",
    description: "Output Of Neural Network",
    input_count: 1,
    output_count: 0,
    configParams: {},
    show_in_modal: false,
  },

  [LayerTypes.DENSE]: {
    type: LayerTypes.DENSE,
    name: "Dense",
    description: "Basic Of Neural Network",
    input_count: 1,
    output_count: 1,
    configParams: {
      trainable: {
        title: "Trainable",
        type: InputTypes.BOOLEAN,
        default: true,
        key: "trainable",

        show_in_detail: false,
      },
      unit: {
        title: "Unit Size",
        type: InputTypes.INTEGER,
        default: 3,
        show_in_detail: true,
        key: "unit_size",
      },
      activation: {
        title: "activation",
        type: InputTypes.ACTIVATION_FUNCTION,
        default: "relu",
        show_in_detail: true,
        key: "activation",
      },
      useBias: {
        title: "useBias",
        type: InputTypes.BOOLEAN,
        default: true,
        show_in_detail: false,
        key: "use_bias",
      },
      biasInitializer: {
        title: "biasInitializer",
        type: InputTypes.VALUE_INITIALIZER,
        default: "zeros",
        show_in_detail: false,
        key: "bias_initializer",
      },
      kernelInitializer: {
        title: "kernelInitializer",
        type: InputTypes.VALUE_INITIALIZER,
        default: "randomNormal",
        show_in_detail: false,
        key: "kernel_initializer",
      },
    },
    show_in_modal: true,
  },

  [LayerTypes.FLATTEN]: {
    type: LayerTypes.FLATTEN,

    name: "Flatten",
    description: "This is Flatten Layer Bitch ",

    input_count: 1,
    output_count: 1,
    configParams: {
      trainable: {
        title: "Trainable",
        type: InputTypes.BOOLEAN,
        default: true,
        show_in_detail: false,
        key: "trainable",
      },
    },
    show_in_modal: true,
  },
  [LayerTypes.CONV2D]: {
    type: LayerTypes.CONV2D,

    name: "Convelutional 2D",
    description: "This is Convelutional Layer Bitch ",

    input_count: 1,
    output_count: 1,
    configParams: {
      trainable: {
        title: "Trainable",
        type: InputTypes.BOOLEAN,
        default: true,
        show_in_detail: false,
        key: "trainable",
      },
      kernel_size: {
        title: "Kernel Size",
        type: InputTypes.INTEGER,
        default: 3,
        show_in_detail: true,
        key: "kernel_size",
      },
      filters: {
        title: "Number of Filters",
        type: InputTypes.INTEGER,
        default: 3,
        show_in_detail: true,
        key: "filter_count",
      },
      activation: {
        title: "activation",
        type: InputTypes.ACTIVATION_FUNCTION,
        default: "relu",
        show_in_detail: true,
        key: "activation",
      },
      strides: {
        title: "strides",
        type: InputTypes.INTEGER,
        default: 1,
        show_in_detail: true,
        key: "strides",
      },
      padding: {
        title: "padding",
        type: InputTypes.PADDING_TYPES,
        default: "valid",
        show_in_detail: true,
        key: "padding",
      },
      useBias: {
        title: "useBias",
        type: InputTypes.BOOLEAN,
        default: true,
        show_in_detail: false,
        key: "use_bias",
      },
      biasInitializer: {
        title: "biasInitializer",
        type: InputTypes.VALUE_INITIALIZER,
        default: "zeros",
        show_in_detail: false,
        key: "bias_initializer",
      },
      kernelInitializer: {
        title: "kernelInitializer",
        type: InputTypes.VALUE_INITIALIZER,
        default: "randomNormal",
        show_in_detail: false,
        key: "kernel_initializer",
      },
    },
    show_in_modal: true,
  },

  [LayerTypes.MAXPOOLING2D]: {
    type: LayerTypes.MAXPOOLING2D,

    name: "MaxPooling 2D",
    input_count: 1,
    output_count: 1,
    description: "POOL IT BABY",

    configParams: {
      trainable: {
        title: "Trainable",
        type: InputTypes.BOOLEAN,
        default: true,
        key: "trainable",

        show_in_detail: false,
      },
      kernel_size: {
        title: "Kernel Size",
        type: InputTypes.INTEGER,
        default: 3,
        show_in_detail: true,
        key: "kernel_size",
      },
      strides: {
        title: "strides",
        type: InputTypes.INTEGER,
        default: 1,
        show_in_detail: true,
        key: "strides",
      },
      padding: {
        title: "padding",
        type: InputTypes.PADDING_TYPES,
        default: "valid",
        show_in_detail: true,
        key: "padding",
      },
    },
    show_in_modal: true,
  },
};

export default LayerDetails;

import shape from "../base/shape";
import colors from "../base/colors";

const baseStyle = {
  borderRadius: shape['--p-border-radius-1'],

  _light: {
    borderColor: colors.customLight['--p-border'],
  },

  _dark: {
    borderColor: colors.customDark['--p-border-on-dark'],
  },
};

export default {
  baseStyle
};
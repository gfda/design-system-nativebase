import colors from '../base/colors';
import typography from '../base/typography';

const baseStyle = {
  color: colors.customLight['--p-text'],
  _dark: {
    color: colors.customDark['--p-text-on-dark'],
  },
  fontSize: typography.fontSizes['p-font-size-100'],
};

export default {
  baseStyle,
};

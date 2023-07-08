import colors from '../base/colors';

const baseStyle = {
  _disabled: {
    borderColor: colors['--p-border-disabled'],
  },

  _invalid: {
    borderColor: colors['--p-interactive-critical'],
    _icon: {
      color: colors['--p-interactive-critical'],
    },
  },

  _light: {
    _pressed: {
      borderColor: colors.customLight['--p-interactive-pressed'],
    },
    _checked: {
      borderColor: colors.customLight['--p-interactive'],
    },
  },

  _dark: {
    _pressed: {
      borderColor: colors.customDark['--p-interactive-pressed-on-dark'],
    },
    _checked: {
      borderColor: colors.customDark['--p-interactive-on-dark'],
    },
  },
};

export default {
  baseStyle,
};

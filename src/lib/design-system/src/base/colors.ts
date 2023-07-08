import {rgba} from 'polished';

const colors = {
  '--p-border-disabled': rgba(210, 213, 216, 1),
  '--p-interactive-critical': rgba(216, 44, 13, 1),

  customLight: {
    '--p-surface': rgba(255, 255, 255, 1),
    '--p-surface-neutral-subdued': rgba(246, 246, 247, 1),
    '--p-surface-pressed': rgba(241, 242, 243, 1),
    '--p-surface-search-field': rgba(241, 242, 243, 1),
    '--p-border': rgba(140, 145, 150, 1),
    '--p-text': rgba(32, 34, 35, 1),
    '--p-interactive': rgba(44, 110, 203, 1),
    '--p-interactive-pressed': rgba(16, 50, 98, 1),
  },

  customDark: {
    '--p-surface-dark': rgba(32, 33, 35, 1),
    '--p-surface-neutral-subdued-dark': rgba(68, 71, 74, 1),
    '--p-surface-pressed-dark': rgba(62, 64, 67, 1),
    '--p-surface-search-field-dark': rgba(47, 49, 51, 1),
    '--p-border-on-dark': rgba(80, 83, 86, 1),
    '--p-text-on-dark': rgba(227, 229, 231, 1),
    '--p-interactive-on-dark': rgba(54, 163, 255, 1),
    '--p-interactive-pressed-on-dark': rgba(136, 188, 255, 1),
  },
};

export default colors;

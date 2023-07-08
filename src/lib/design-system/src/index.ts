import {extendTheme} from 'native-base';
import colors from './base/colors';
import shape from './base/shape';
import typography from './base/typography';
import config from './base/config';

const {fontSizes} = typography;
const customTheme = extendTheme({
  colors,
  shape,
  fontSizes,
  config,
});

export default customTheme;

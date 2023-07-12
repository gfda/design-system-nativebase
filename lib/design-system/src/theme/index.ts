import {extendTheme} from 'native-base';
import base from './base';
import typography from './base/typography';
import components from './components';

const {fontSizes} = typography;
const customTheme = extendTheme({
  ...base,
  components,
});

export default customTheme;

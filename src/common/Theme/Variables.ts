import {Styles} from 'react-native-svg';

/**
 * Colors
 */
export const Colors: Styles = {
  // Example colors:
  transparent: 'rgba(0,0,0,0)',
  inputBackground: '#FFFFFF',
  primrayBorderColor: '#05454F',
  primrayTextColor: '#05454F',
  text: '#212529',
  grayCard: '#E9E9E9',
  indicatorInnerText: '#fff',
  primary: '#E14032',
  success: '#28a745',
  error: '#dc3545',
  cardSelectedBackground: 'rgba(0, 0, 0, 0.08)',
};

/**
 * FontSize
 */
export const FontSize = {
  small: 14,
  regular: 18,
  large: 40,
};

/**
 * Metrics Sizes
 */
const tiny = 8; // 10
const small = tiny * 2; // 16
const regular = tiny * 3; // 24
const large = regular * 2; // 48
export const MetricsSizes = {
  tiny,
  small,
  regular,
  large,
};

export default {
  Colors,
  FontSize,
  MetricsSizes,
};

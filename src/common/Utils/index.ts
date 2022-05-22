import {Dimensions} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {toErrorWithMessage} from './exceptions';
import {
  removeLocalData,
  storeLocalData,
  getLocalData,
  getLocalDataKeys,
} from './localStorage';

const getScreenHeight = () => Dimensions.get('screen').height;

const getScreenWidth = () => Dimensions.get('screen').width;

const getContentWidth = () =>
  Dimensions.get('screen').width - getMainContentPadding() * 2;

const getMainContentPadding = () => 18.5;

const getAppVersion = () => DeviceInfo.getVersion();

const getBottomMenuHeight = () => 78;

const getTopBannerHeight = () => 192;

const log = (...args) => {
  console.log(...args);
};

export {
  getScreenHeight,
  getScreenWidth,
  getAppVersion,
  getBottomMenuHeight,
  getTopBannerHeight,
  toErrorWithMessage,
  log,
  storeLocalData,
  getLocalData,
  removeLocalData,
  getLocalDataKeys,
  getContentWidth,
  getMainContentPadding,
};

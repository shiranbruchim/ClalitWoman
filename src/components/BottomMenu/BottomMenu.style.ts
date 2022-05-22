import {RotateView} from 'common/Theme/animation/RotateView';
import {getContentWidth, getMainContentPadding} from 'common/Utils';
import {StyleSheet} from 'react-native';

export const BottomMenuStyle = StyleSheet.create({
  mainBottomMenuContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  mainBottomBottomMenuContainer: {
    alignContent: 'center',
  },
  bottomImg: {
    marginBottom: -10,
    width: getContentWidth() + getMainContentPadding() * 2,
    resizeMode: 'contain',
  },
  mainMiddleBottomMenuContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgWrapper: {
    backgroundColor: 'red',
  },
  middleImg: {
    width: 66,
    height: 66,
    resizeMode: 'contain',
  },
  Xicon: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
  },
  mainTopBottomMenuContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TopImg: {
    width: getContentWidth(),
    marginBottom: -75,
    resizeMode: 'contain',
  },
});

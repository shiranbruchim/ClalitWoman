import {
  getBottomMenuHeight,
  getScreenHeight,
  getTopBannerHeight,
} from 'common/Utils';
import {Dimensions, StyleSheet} from 'react-native';

export const mainContainerStyles = StyleSheet.create({
  topMenu: {
    position: 'absolute',
    top: 50,
    zIndex: 1,
    width: '100%',
  },
  bottomMenu: {
    position: 'absolute',
    bottom: 0,
    zIndex: 1,
    width: '100%',
    backgroundColor: '#000000',
    height: getBottomMenuHeight(),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  scrollView: {
    height: getScreenHeight() - getTopBannerHeight(),
  },
  contentView: {
    paddingBottom: getBottomMenuHeight() * 2,
    flexDirection: 'column',
    direction: 'rtl',
  },
  bg: {
    height: '100%',
    alignItems: 'center',
    width: '100%',
  },
  mainView: {
    flex: 1,
    height: '100%',
    width: Dimensions.get('window').width - 20,
    paddingHorizontal: 10,
    paddingVertical: 30,
    overflow: 'hidden',
    backgroundColor: '#fff',
    borderRadius: 30,
  },
  banner: {
    height: 190,
  },
  bgRed: {
    marginTop: 50,
  },
});

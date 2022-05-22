import {getContentWidth, getMainContentPadding} from 'common/Utils';
import {StyleSheet} from 'react-native';

export const MainTopBarStyle = StyleSheet.create({
  mainViewContainer: {
    height: 68,
    width: getContentWidth() + getMainContentPadding() * 2,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    flexDirection: 'row-reverse',
    justifyContent: 'center',
  },
  HamburgerContainer: {
    position: 'absolute',
    left: 20,
  },
  childName: {
    color: '#05454F',
    fontSize: 18,
  },
  IconsContainer: {
    position: 'absolute',
    right: 20,
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  bellIcon: {
    width: 20,
    height: 20,
  },
  mainX: {
    color: '#05454F',
    fontSize: 25,
    marginRight: 15,
  },
  IconsIndicator: {
    backgroundColor: '#EB5A5A',
    alignItems: 'center',
    justifyContent: 'center',
    width: 12,
    height: 12,
    borderRadius: 6,
    position: 'absolute',
    bottom: 12,
    right: 12,
    zIndex: 5,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.08,
    shadowRadius: 5,
  },
  IconsIndicatorText: {
    color: '#fff',
    fontSize: 10,
  },
});

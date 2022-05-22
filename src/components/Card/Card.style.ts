import {Colors} from 'common/Theme/Variables';
import {StyleSheet} from 'react-native';

export const CardStyle = StyleSheet.create({
  cardContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 18,
  },
  childCardGray: {
    backgroundColor: '#E9E9E9', // from colors
    borderColor: 'transparent',
  },
  innerChildWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  avatarIndicatorContainer: {
    marginLeft: 13,
  },
  avatarContainer: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 30,
    overflow: 'hidden',
  },
  infoTextContainer: {
    justifyContent: 'center',
    maxWidth: '80%',
    width: '100%',
  },
  text: {
    textAlign: 'right',
  },
  indicator: {
    width: 18,
    height: 18,
    borderRadius: 10,
    backgroundColor: Colors.primrayBorderColor,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  // indicatorColor: {
  //   color: '#fff', // not here - font
  // },
});

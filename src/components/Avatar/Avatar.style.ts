import {Colors} from 'common/Theme/Variables';
import {StyleSheet} from 'react-native';

export const AvatarStyle = StyleSheet.create({
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
  indicator: {
    width: 18,
    height: 18,
    borderRadius: 10,
    backgroundColor: Colors.primrayBorderColor,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 41,
    bottom: 41,
  },
});

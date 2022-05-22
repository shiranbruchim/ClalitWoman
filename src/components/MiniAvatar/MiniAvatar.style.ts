import {StyleSheet} from 'react-native';

export const MiniAvatarStyle = StyleSheet.create({
  avatar: {
    width: '100%',
    height: '100%',
  },
  avatarIndicatorContainer: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.08,
    shadowRadius: 5,
  },
  avatarContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 30,
    overflow: 'hidden',
  },
  avatarContainerLarge: {
    width: 105,
    height: 105,
    borderRadius: 58,
    borderWidth: 10,
    borderColor: '#fff',
  },
});

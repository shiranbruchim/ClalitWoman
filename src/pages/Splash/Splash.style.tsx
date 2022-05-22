import {StyleSheet} from 'react-native';

export const SplashStyles = StyleSheet.create({
  mainView: {
    padding: 0,
    height: '100%',
    width: '100%',
  },
  loading: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textView: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  mainImage: {
    padding: 0,
    height: '100%',
    width: '100%',
  },
  text: {
    color: '#ffffff',
    fontSize: 24,
  },
  splashLogo: {
    marginBottom: 30,
  },
});

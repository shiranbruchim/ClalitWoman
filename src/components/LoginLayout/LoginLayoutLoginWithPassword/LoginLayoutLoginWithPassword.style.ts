import {StyleSheet} from 'react-native';

export const LoginLayoutLoginWithPassword = StyleSheet.create({
  mainTitleContainer: {
    minHeight: 90,
    justifyContent: 'space-between',
  },
  mainTitleText: {
    textAlign: 'center',
    color: '#05454f',
    fontSize: 24,
    fontWeight: 'bold',
  },
  mainButtonContainer: {
    width: '100%',
    height: 82,
    paddingHorizontal: 25,
    justifyContent: 'flex-end',
  },
  errorMessage: {
    fontSize: 14,
    color: '#D31715',
    textAlign: 'center',
    marginBottom: 5,
  },
});

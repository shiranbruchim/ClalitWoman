import {StyleSheet} from 'react-native';

export const LoginLayoutInputStyle = StyleSheet.create({
  InputTitleContainer: {
    marginTop: '4.5%',
  },
  InputTitleText: {
    textAlign: 'right',
    fontSize: 14,
    color: '#05454f',
  },
  InputTitleTextInput: {
    borderBottomWidth: 1,
    borderColor: '#C7E7E8',
    color: '#50757D',
    textAlign: 'right',
    fontSize: 18,
    marginTop: '4.5%',
    paddingVertical: 3,
  },
  InputSubTitleText: {
    textAlign: 'right',
    fontSize: 14,
    color: '#73767E',
    paddingTop: 6,
  },
  InputTitleTextInputBlur: {
    borderColor: 'black',
  },
  InputErrorBorder: {
    borderColor: '#D31715',
  },
  InputBlueBorder: {
    borderColor: '#17A1BA',
  },
  errorMessage: {
    color: '#D31715',
  },
  eyeIconContainer: {
    position: 'absolute',
    bottom: 30,
    left: 10,
  },
  eyeIcon: {
    width: 14,
    height: 14,
  },
});

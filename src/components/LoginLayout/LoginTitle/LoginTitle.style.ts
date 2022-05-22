import {StyleSheet} from 'react-native';

export const LoginTitleStyle = StyleSheet.create({
  mainTitleContainer: {
    minHeight: 90,
  },
  TitleContainer: {
    minHeight: 70,
    alignItems: 'center',
  },
  mainTitleText: {
    color: '#05454f',
    fontSize: 24,
    fontWeight: 'bold',
    width: 'auto',
  },
  mainTitleBackArrow: {
    color: '#05454f',
    fontSize: 24,
    fontWeight: 'bold',
  },
  mainTitleBackArrowButton: {
    position: 'absolute',
    left: 0,
  },
  mainSubTitleText: {
    textAlign: 'right',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00667D',
    paddingHorizontal: 25,
  },
  errorMessage: {
    fontSize: 14,
    color: '#D31715',
    textAlign: 'center',
    marginBottom: 5,
  },
});

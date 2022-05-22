import {StyleSheet} from 'react-native';

export const LoginLayoutCardStyle = StyleSheet.create({
  mainCardContainer: {
    flexGrow: 1,
    // backgroundColor: 'white',
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.08,
    shadowRadius: 10,
    paddingHorizontal: 25,
    paddingTop: '9%',
    marginTop: '9%',
  },
  noMarginTop: {
    marginTop: 0,
  },
});

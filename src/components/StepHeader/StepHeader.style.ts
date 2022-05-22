import {Colors} from 'common/Theme/Variables';
import {StyleSheet} from 'react-native';

export const StepHeaderStyle = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  topLine: {
    width: 98,
    height: 1,
    // backgroundColor: '#c9c9c9',
    marginBottom: 27,
    borderWidth: 3,
    borderColor: '#c9c9c9',
  },
  headerImg: {
    width: 33,
    height: 45,
    marginBottom: 14,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primrayTextColor,
  },
  subTitleStyle: {
    fontSize: 18,
    color: Colors.primrayTextColor,
  },
});

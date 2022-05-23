import {Colors} from 'common/Theme/Variables';
import {StyleSheet} from 'react-native';

export const GraphStyle = StyleSheet.create({
  container: {
    borderRadius: 16,
    borderWidth: 2,
    padding: 20,
    width: '100%',
    backgroundColor: 'white',
    // flex: 1
  },
  textContainer: {
    flexDirection: 'row',
    // width: '100%',
    alignItems: 'center',
    alignContent: 'space-between',
  },
});

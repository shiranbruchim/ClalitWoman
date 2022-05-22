import {getMainContentPadding, getScreenHeight} from 'common/Utils';
import {StyleSheet} from 'react-native';

export const RightMenuStyle = StyleSheet.create({
  mainViewContainer: {},
  mainShapeContainer: {
    width: 20,
    height: 15,
    justifyContent: 'space-between',
  },
  outerShape: {
    width: '100%',
    height: 3,
    backgroundColor: '#05454F',
    borderRadius: 2,
  },
  centerShape: {
    width: '80%',
    height: 3,
    backgroundColor: '#05454F',
    alignSelf: 'flex-end',
    borderRadius: 2,
  },
  mainMenuWindowContainer: {
    position: 'absolute',
    backgroundColor: '#DAF3F3',
    width: 227,
    right: 0,
    marginRight: -getMainContentPadding(),
    height: getScreenHeight() - 60,
    borderTopStartRadius: 32,
    borderBottomStartRadius: 32,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.18,
    shadowRadius: 5,
  },
  exitTextContainer: {
    height: 116,
  },
  exitText: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#919CB2',
  },
  mainButtonsContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  icon: {
    width: 16,
    height: 16,
    marginLeft: 10,
    marginRight: 22,
  },
  mainHr: {
    height: 1,
    width: '80%',
    marginVertical: 20,
    backgroundColor: '#D8D8D8',
    alignSelf: 'center',
  },
});

import {StyleSheet} from 'react-native';
import {getScreenHeight} from 'common/Utils';

export const RightMenuBarStyle = StyleSheet.create({
  mainViewContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
  },
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
    backgroundColor: '#DAF3F3',
    width: 227,
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
  exitTextBotton: {
    width: 40,
    height: 50,
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

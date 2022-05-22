import {StyleSheet} from 'react-native';

export const LoginLayoutScreenModal = StyleSheet.create({
  ModalContainer: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.75)',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  ModalInnerContainer: {
    height: 366,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 27,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.08,
    shadowRadius: 5,
    padding: 16,
    minWidth: 300,
  },
  ModalInnerTopCircul: {
    height: 40,
    width: 40,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#919CB2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ModalInnerTopCirculIcon: {
    color: '#919CB2',
  },
  ModalInnerBottomContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 292,
    paddingVertical: 30,
  },
  ModalInnerBottomTextContainer: {
    paddingHorizontal: 50,
  },
  icon: {
    height: 60,
    width: 60,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#05454F',
    textAlign: 'center',
    marginBottom: 8,
  },
  subTitle: {
    fontSize: 16,
    color: '#05454F',
    textAlign: 'center',
  },
});

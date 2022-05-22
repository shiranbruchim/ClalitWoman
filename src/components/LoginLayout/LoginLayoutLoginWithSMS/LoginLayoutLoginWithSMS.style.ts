import {StyleSheet} from 'react-native';

export const LoginLayoutLoginWithSMSStyle = StyleSheet.create({
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
  CardMainTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: '14.5%',
  },
  CardMainText: {
    color: '#05454f',
    fontSize: 16,
    fontWeight: 'bold',
  },
  mainButtonContainer: {
    width: '100%',
    height: 82,
    paddingHorizontal: 25,
    justifyContent: 'flex-end',
  },
});

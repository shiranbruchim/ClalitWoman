import {StyleSheet} from 'react-native';

export const LoginLayoutWithFaceRecognitionStyle = StyleSheet.create({
  mainTitleContainer: {
    minHeight: 90,
  },
  mainSuccessContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 100,
  },
  mainSuccessTextContainer: {
    alignItems: 'center',
    marginHorizontal: 80,
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
  mainTitleSuccessText: {
    color: '#05454f',
    fontSize: 24,
    fontWeight: 'bold',
    width: 'auto',
    marginVertical: 5,
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
  SubTitleText: {
    fontSize: 18,
    color: '#05454f',
    textAlign: 'center',
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
  errorMessageMarginTop: {
    paddingTop: 10,
  },
  termTextWrapper: {
    flexDirection: 'row-reverse',
    paddingRight: 35,
  },
  termText: {
    textAlign: 'right',
    fontSize: 16,
    color: '#05454F',
    marginBottom: 22,
  },
  termNumber: {
    textAlign: 'right',
    fontSize: 16,
    color: '#05454F',
    marginTop: 2,
    paddingLeft: 13,
  },
  checkboxWrapper: {
    justifyContent: 'flex-end',
    height: 120,
    marginBottom: 20,
  },
  helpButton: {
    paddingRight: 35,
    alignItems: 'flex-end',
  },

  imageSuccessPage: {
    width: 182,
    height: 82,
  },
});

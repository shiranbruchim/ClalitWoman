import {StyleSheet} from 'react-native';

export const ThankYouFeedbackStyle = StyleSheet.create({
  thankYouFeedbackWrapper: {
    paddingHorizontal: 17,
    paddingVertical: 35.5,
    top: 109,
    width: '90%',
    height: 'auto',
    flexDirection: 'column',
    borderRadius: 30,
    alignItems: 'center',
    alignSelf: 'center',
    zIndex: 1,
  },
  imgStyleHeader: {
    width: 180,
    height: 100,
  },
  imgStyleCross: {
    width: 40,
    height: 40,
    position: 'absolute',
    right: 101,
    bottom: -20,
  },

  titleFeedback: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 13,
  },
  btnWrapper: {
    flexDirection: 'row-reverse',
    width: '100%',
    maxWidth: 277,
    height: 52,
    fontSize: 25,
    justifyContent: 'center',
    marginTop: 100,
  },
  btnText: {
    textAlign: 'center',
  },
});

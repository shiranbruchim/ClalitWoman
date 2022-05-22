import {StyleSheet} from 'react-native';

export const QuestionCardStyle = StyleSheet.create({
  mainViewContainer: {
    borderRadius: 18,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    padding: 18,
    marginBottom: 16,
    backgroundColor: 'rgba(255,255,255,0.45)',
    overflow: 'hidden',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.08,
    shadowRadius: 5,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.8)',
  },
  mainIcon: {
    width: 40,
    height: 45,
    marginLeft: 30,
    marginRight: 7,
  },
  title: {
    textAlign: 'right',
    color: '#05454F',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subTitle: {
    textAlign: 'right',
    color: '#05454F',
    fontSize: 16,
  },
});

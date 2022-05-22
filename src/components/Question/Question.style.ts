import {Colors} from 'common/Theme/Variables';
import {StyleSheet} from 'react-native';

export const QuestionStyle = StyleSheet.create({
  questionContainer: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginHorizontal: 0,
  },
  questionText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 26,
    color: Colors.primrayTextColor,
  },
  questionNote: {
    fontSize: 12,
    marginBottom: 20,
    marginTop: 3,
    color: Colors.primrayTextColor,
  },
});

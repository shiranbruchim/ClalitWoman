import TextInfo from 'components/Text/Text';
import React from 'react';
import {View} from 'react-native';
import {QuestionStyle as styles} from './Question.style';
import {QuestionProps} from './Question.types';

const Question = (props: QuestionProps) => {
  const {question, questionNote, children} = props;
  return (
    <View style={styles.questionContainer}>
      <TextInfo style={styles.questionText} text={question} />
      <TextInfo style={styles.questionNote} text={questionNote} />
      {children}
    </View>
  );
};

export default Question;

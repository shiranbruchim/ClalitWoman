import {storiesOf} from '@storybook/react-native';
import MainContainer from 'containers/MainContainer';
import React from 'react';
import Question from './Question';

storiesOf('Question', module).add('Question', () => {
  return (
    <MainContainer>
      <Question question="בן כמה אתה?" questionNote="שים לב לשדה חובה!" />
    </MainContainer>
  );
});

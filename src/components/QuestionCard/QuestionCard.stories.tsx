import {storiesOf} from '@storybook/react-native';
import MainContainer from 'containers/MainContainer';
import React from 'react';
import QuestionCard from './QuestionCard';

storiesOf('QuestionCard', module).add('QuestionCard', () => {
  return (
    <MainContainer>
      <QuestionCard />
    </MainContainer>
  );
});

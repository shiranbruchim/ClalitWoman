import {storiesOf} from '@storybook/react-native';
import MainContainer from 'containers/MainContainer';
import React from 'react';
import QuestionierList from './QuestionierList';

storiesOf('QuestionierList', module).add('QuestionierList', () => {
  return (
    <MainContainer>
      <QuestionierList />
    </MainContainer>
  );
});

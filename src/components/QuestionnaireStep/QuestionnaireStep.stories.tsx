import {storiesOf} from '@storybook/react-native';
import MainContainer from 'containers/MainContainer';
import React from 'react';
import QuestionnaireStep from './QuestionnaireStep';

storiesOf('QuestionnaireStep', module).add('QuestionnaireStep', () => {
  return (
    <MainContainer>
      <QuestionnaireStep />
    </MainContainer>
  );
});

import {storiesOf} from '@storybook/react-native';
import MainContainer from 'containers/MainContainer';
import React from 'react';
import stepsData from '../../../Stubs/questionsStep';
import Steps from './Questionnaire';

storiesOf('Questionnaire', module).add('Questionnaire', () => {
  return (
    <MainContainer>
      <Steps questionnaireData={stepsData} />
    </MainContainer>
  );
});

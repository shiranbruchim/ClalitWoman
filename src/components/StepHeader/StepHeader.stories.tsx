import {storiesOf} from '@storybook/react-native';
import MainContainer from 'containers/MainContainer';
import React from 'react';
import StepHeader from './StepHeader';

storiesOf('StepHeader', module).add('StepHeader', () => {
  return (
    <MainContainer>
      <StepHeader />
    </MainContainer>
  );
});

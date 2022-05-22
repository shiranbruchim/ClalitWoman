import {storiesOf} from '@storybook/react-native';
import MainContainer from 'containers/MainContainer';
import React from 'react';
import TextWithTitle from './TextWithTitle';

storiesOf('TextWithTitle', module).add('TextWithTitle', () => {
  return (
    <MainContainer>
      <TextWithTitle />
    </MainContainer>
  );
});

import {storiesOf} from '@storybook/react-native';
import MainContainer from 'containers/MainContainer';
import React from 'react';
import Text from './Text';

storiesOf('Text', module).add('Text', () => {
  return (
    <MainContainer>
      <Text />
    </MainContainer>
  );
});

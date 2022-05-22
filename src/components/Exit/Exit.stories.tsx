import {storiesOf} from '@storybook/react-native';
import MainContainer from 'containers/MainContainer';
import React from 'react';
import Exit from './Exit';

storiesOf('Exit', module).add('Exit', () => {
  return (
    <MainContainer>
      <Exit />
    </MainContainer>
  );
});

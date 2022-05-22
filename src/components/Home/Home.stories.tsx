import {storiesOf} from '@storybook/react-native';
import MainContainer from 'containers/MainContainer';
import React from 'react';
import Home from './Home';

storiesOf('Home', module).add('Home', () => {
  return (
    <MainContainer>
      <Home />
    </MainContainer>
  );
});

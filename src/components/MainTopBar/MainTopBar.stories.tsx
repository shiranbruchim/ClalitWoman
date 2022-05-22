import {storiesOf} from '@storybook/react-native';
import MainContainer from 'containers/MainContainer';
import React from 'react';
import MainTopBar from './MainTopBar';

storiesOf('MainTopBar', module).add('MainTopBar', () => {
  return (
    <MainContainer>
      <MainTopBar />
    </MainContainer>
  );
});

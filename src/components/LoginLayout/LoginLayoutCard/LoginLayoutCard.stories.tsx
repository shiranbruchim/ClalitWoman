import {storiesOf} from '@storybook/react-native';
import MainContainer from 'containers/MainContainer';
import React from 'react';
import LoginLayoutCard from './LoginLayoutCard';

storiesOf('LoginLayoutCard', module).add('LoginLayoutCard', () => {
  return (
    <MainContainer>
      <LoginLayoutCard />
    </MainContainer>
  );
});

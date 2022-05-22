import {storiesOf} from '@storybook/react-native';
import MainContainer from 'containers/MainContainer';
import React from 'react';
import LoginLayoutInput from './LoginLayoutInput';

storiesOf('LoginLayoutInput', module).add('LoginLayoutInput', () => {
  return (
    <MainContainer>
      <LoginLayoutInput />
    </MainContainer>
  );
});

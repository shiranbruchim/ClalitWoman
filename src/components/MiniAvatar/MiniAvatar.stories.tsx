import {storiesOf} from '@storybook/react-native';
import MainContainer from 'containers/MainContainer';
import React from 'react';
import MiniAvatar from './MiniAvatar';

storiesOf('MiniAvatar', module).add('MiniAvatar', () => {
  return (
    <MainContainer>
      <MiniAvatar />
    </MainContainer>
  );
});

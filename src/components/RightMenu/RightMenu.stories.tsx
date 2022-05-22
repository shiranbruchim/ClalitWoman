import {storiesOf} from '@storybook/react-native';
import MainContainer from 'containers/MainContainer';
import React from 'react';
import RightMenu from './RightMenu';

storiesOf('RightMenu', module).add('RightMenu', () => {
  return (
    <MainContainer>
      <RightMenu />
    </MainContainer>
  );
});

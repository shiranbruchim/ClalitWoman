import {storiesOf} from '@storybook/react-native';
import MainContainer from 'containers/MainContainer';
import React from 'react';
import RightMenuBar from './RightMenuBar';

storiesOf('RightMenuBar', module).add('RightMenuBar', () => {
  return (
    <MainContainer>
      <RightMenuBar />
    </MainContainer>
  );
});

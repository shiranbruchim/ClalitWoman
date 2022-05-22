import {storiesOf} from '@storybook/react-native';
import MainContainer from 'containers/MainContainer';
import React from 'react';
import Loading from './Loading';

storiesOf('Loading', module).add('Loading', () => {
  return (
    <MainContainer>
      <Loading />
    </MainContainer>
  );
});

import {storiesOf} from '@storybook/react-native';
import MainContainer from 'containers/MainContainer';
import React from 'react';
import Avatar from './Avatar';

storiesOf('Avatar', module).add('Avatar', () => (
  <MainContainer>
    <Avatar />
  </MainContainer>
));

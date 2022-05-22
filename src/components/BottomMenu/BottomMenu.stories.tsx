import {storiesOf} from '@storybook/react-native';
import MainContainer from 'containers/MainContainer';
import React from 'react';
import BottomMenu from './BottomMenu';

storiesOf('BottomMenu', module).add('BottomMenu', () => {
  return <BottomMenu />;
});

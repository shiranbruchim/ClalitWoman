import {storiesOf} from '@storybook/react-native';
import MainContainer from 'containers/MainContainer';
import React from 'react';
import Graph from './Graph';

storiesOf('Graph', module).add('Graph', () => (
  <MainContainer>
    <Graph />
  </MainContainer>
));

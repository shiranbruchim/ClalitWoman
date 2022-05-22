import {storiesOf} from '@storybook/react-native';
import MainContainer from 'containers/MainContainer';
import React from 'react';
import DatePicker from './DatePicker';

storiesOf('DatePicker', module).add('DatePicker', () => {
  return (
    <MainContainer>
      <DatePicker />
    </MainContainer>
  );
});

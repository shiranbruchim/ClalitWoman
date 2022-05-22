import {storiesOf} from '@storybook/react-native';
import MainContainer from 'containers/MainContainer';
import React from 'react';
import TemplateName from './TemplateName';

storiesOf('TemplateName', module).add('TemplateName', () => {
  return (
    <MainContainer>
      <TemplateName />
    </MainContainer>
  );
});

import {storiesOf} from '@storybook/react-native';
import CheckBoxWrapper from 'components/CheckBoxWrapper';
import MainContainer from 'containers/MainContainer';
import React from 'react';
import RadioButton from './RadioButton';

storiesOf('RadioButton', module).add('RadioButton', () => {
  return (
    <MainContainer>
      <CheckBoxWrapper type="radioButton" title="האם החולה חולה?">
        <RadioButton type="numberBox" numberIndicator="1" value="yes" />
        <RadioButton type="numberBox" numberIndicator="2" />
        <RadioButton type="numberBox" numberIndicator="3" />
        <RadioButton type="numberBox" numberIndicator="4" value="no" />
      </CheckBoxWrapper>
    </MainContainer>
  );
});

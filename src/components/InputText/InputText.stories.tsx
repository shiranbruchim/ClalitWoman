import {storiesOf} from '@storybook/react-native';
import MainContainer from 'containers/MainContainer';
import React from 'react';
import InputText from './InputText';

storiesOf('InputText', module).add('InputText', () => {
  return (
    <MainContainer>
      <InputText KeyboardType="default" PlaceHolderName="שם הנבדק" />
    </MainContainer>
  );
});

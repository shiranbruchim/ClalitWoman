import {storiesOf} from '@storybook/react-native';
import CheckBoxWrapper from 'components/CheckBoxWrapper';
import MainContainer from 'containers/MainContainer';
import React from 'react';
import CheckBox from './CheckBox';

const numberTextStyle = {
  largeText: true,
  // largeSpacing: true,
  underBox: true,
};

const textStyle = {
  largeText: true,
  // largeSpacing: true,
  // underBox: true,
};

storiesOf('CheckBox', module)
  .add('CheckBox1', () => {
    return (
      <MainContainer>
        <CheckBoxWrapper title="החולה מרבה לחלות?">
          <CheckBox type="roundBox" textStyle={textStyle} value="כן" />
          <CheckBox type="largeBox" textStyle={textStyle} value="הרבה" />
          <CheckBox
            type="numberBox"
            textStyle={numberTextStyle}
            numberIndicator="5"
            value="הרבה"
          />
          <CheckBox textStyle={textStyle} value="הרבה" />
        </CheckBoxWrapper>
      </MainContainer>
    );
  })
  .add('CheckBox2', () => {
    return (
      <MainContainer>
        <CheckBoxWrapper title="החולה מרבה לחיות?">
          <CheckBox
            type="numberBox"
            textStyle={numberTextStyle}
            numberIndicator="1"
            value="ערני"
          />
          <CheckBox
            type="numberBox"
            textStyle={numberTextStyle}
            numberIndicator="2"
          />
          <CheckBox
            type="numberBox"
            textStyle={numberTextStyle}
            numberIndicator="3"
          />
          <CheckBox
            type="numberBox"
            textStyle={numberTextStyle}
            numberIndicator="4"
          />
          <CheckBox
            type="numberBox"
            textStyle={numberTextStyle}
            numberIndicator="5"
            value="אדיש"
          />
        </CheckBoxWrapper>
      </MainContainer>
    );
  });

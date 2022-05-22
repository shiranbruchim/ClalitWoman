import {storiesOf} from '@storybook/react-native';
import RadioButton from 'components/RadioButton';
import MainContainer from 'containers/MainContainer';
import React from 'react';
import CheckBox from '../CheckBox/CheckBox';
import CheckBoxWrapper from './CheckBoxWrapper';

const numberTextStyle = {
  largeText: true,
  // largeSpacing: true,
  underBox: true,
};

const wrapperStyle = {
  flexDirection: 'row-reverse',
  justifyContent: 'space-between',
  width: '60%',
};

storiesOf('CheckBoxWrapper', module)
  // .add('CheckBoxWrapper', () => {
  //   return (
  //     <MainContainer>
  //       <CheckBoxWrapper
  //         type="radioButton"
  //         title="האם החולה עירני?"
  //         style={wrapperStyle}>
  //         <RadioButton
  //           type="numberBox"
  //           textStyle={numberTextStyle}
  //           numberIndicator="1"
  //           value="ערני"
  //         />
  //         <RadioButton
  //           type="numberBox"
  //           textStyle={numberTextStyle}
  //           numberIndicator="2"
  //         />
  //         <RadioButton
  //           type="numberBox"
  //           textStyle={numberTextStyle}
  //           numberIndicator="3"
  //         />
  //         <RadioButton
  //           type="numberBox"
  //           textStyle={numberTextStyle}
  //           numberIndicator="4"
  //         />
  //         <RadioButton
  //           type="numberBox"
  //           textStyle={numberTextStyle}
  //           numberIndicator="5"
  //           value="אדיש"
  //         />
  //       </CheckBoxWrapper>
  //     </MainContainer>
  //   );
  // })
  // .add('CheckBoxWrapperRound', () => {
  //   return (
  //     <MainContainer>
  //       <CheckBoxWrapper type="radioButton" title="האם החולה עירני?">
  //         <RadioButton type="roundBox" textStyle={numberTextStyle} value="כן" />
  //         <RadioButton type="roundBox" textStyle={numberTextStyle} value="לא" />
  //       </CheckBoxWrapper>
  //     </MainContainer>
  //   );
  // })
  .add('CheckBoxWrapperLarge', () => {
    return (
      <MainContainer>
        <CheckBoxWrapper
          type="checkBox"
          title="האם החולה עירני?"
          onCheckBoxSelected={val => console.log(val)}>
          <CheckBox
            key={1}
            largeBox
            textStyle={numberTextStyle}
            value="כן"
            setSelectedBox={() => {}}
            selectedBox={{
              title: '',
              userReply: [],
            }}
          />
          <CheckBox
            key={2}
            largeBox
            textStyle={numberTextStyle}
            value="מאוד"
            setSelectedBox={() => {}}
            selectedBox={{
              title: '',
              userReply: [],
            }}
          />
          <CheckBox
            largeBox
            key={4}
            textStyle={numberTextStyle}
            value="ממש"
            setSelectedBox={() => {}}
            selectedBox={{
              title: '',
              userReply: [],
            }}
          />
        </CheckBoxWrapper>
      </MainContainer>
    );
  });

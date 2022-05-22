import {
  InputProps,
  InputType,
  onChangeType,
  QuestionTypes,
} from 'common/Types/QuestionierTypes';
import CheckBox from 'components/CheckBox/CheckBox';
import CheckBoxWrapper from 'components/CheckBoxWrapper';
import DatePickerComponent from 'components/DatePicker/DatePicker';
import InputTextComponent from 'components/InputText/InputText';
import RadioButton from 'components/RadioButton/RadioButton';
import React from 'react';

export const getInputComponent = (
  inputType: InputType,
  inputData: InputProps,
) => {
  const questionComponentsMapper: QuestionTypes = {
    comment: (onChange: onChangeType) => (
      <InputTextComponent
        KeyboardType="default"
        DefaultValue={inputData.defaultValue}
        PlaceHolderName={inputData.placeholder}
        onChange={value => onChange(value)}
      />
    ),
    repeater: (onChange: onChangeType) => (
      <InputTextComponent
        KeyboardType="default"
        DefaultValue={inputData.defaultValue}
        PlaceHolderName={inputData.placeholder}
        onChange={value => onChange(value)}
      />
    ),
    file: (onChange: onChangeType) => (
      <InputTextComponent
        KeyboardType="default"
        DefaultValue={inputData.defaultValue}
        PlaceHolderName={inputData.placeholder}
        onChange={value => onChange(value)}
      />
    ),
    textInput: (onChange: onChangeType) => (
      <InputTextComponent
        KeyboardType="default"
        DefaultValue={inputData.defaultValue}
        PlaceHolderName={inputData.placeholder}
        onChange={value => {
          onChange(value);
        }}
      />
    ),
    emailInput: (onChange: onChangeType) => (
      <InputTextComponent
        KeyboardType="default"
        DefaultValue={inputData.defaultValue}
        PlaceHolderName={inputData.placeholder}
        onChange={value => onChange(value)}
      />
    ),
    dateInput: (onChange: onChangeType) => (
      <DatePickerComponent onChange={value => onChange(value)} />
    ),
    heading: (onChange: onChangeType) => (
      <InputTextComponent
        KeyboardType="default"
        DefaultValue={inputData.content}
        PlaceHolderName={inputData.placeholder}
        onChange={value => onChange(value)}
      />
    ),
    radio: (onChange: onChangeType) => (
      <CheckBoxWrapper
        type="checkBox"
        title=""
        style={elementsDirection(inputData)}
        onCheckBoxSelected={value => onChange(value.userReply)}>
        {inputData.options.map(data => (
          <RadioButton key={data.value} value={data.label} type="roundBox" />
        ))}
      </CheckBoxWrapper>
    ),
    numberBox: (onChange: onChangeType) => (
      <CheckBoxWrapper
        type="checkBox"
        title=""
        style={{
          flexDirection: 'row-reverse',
          justifyContent: 'space-between',
          width: 310,
        }}
        onCheckBoxSelected={value => onChange(value.userReply)}>
        {inputData.options.map(data => (
          <RadioButton
            key={data.value}
            type="numberBox"
            numberIndicator={data.value}
            textStyle={{underBox: true}}
            value={data.label}
            setSelectedBox={value => onChange(value)}
            selectedBox={{
              title: '',
              userReply: '',
            }}
          />
        ))}
      </CheckBoxWrapper>
    ),
    checkbox: (onChange: onChangeType) => (
      <CheckBoxWrapper
        type="checkBox"
        title=""
        onCheckBoxSelected={value => onChange(value.userReply)}>
        {inputData.options.map(data => (
          <CheckBox key={data.value} largeBox value={data.label} />
        ))}
      </CheckBoxWrapper>
    ),
  };

  return questionComponentsMapper[inputType];
};
export const elementsDirection = (inputData: Partial<InputProps>) => {
  const horizontalFormation = {
    height: 100,
    justifyContent: 'space-between',
  };

  const verticalFormation = {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  };
  if (inputData.direction === 'horizontal') {
    return horizontalFormation;
  }
  return verticalFormation;
};

import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {InputTextStyle as styles} from './InputText.style';
import {InputTextProps} from './InputText.types';

const InputTextComponent = (props: InputTextProps) => {
  const {PlaceHolderName, DefaultValue, KeyboardType, onChange} = props;
  return (
    <TextInput
      style={styles.textInputStyle}
      placeholder={PlaceHolderName}
      defaultValue={DefaultValue}
      keyboardType={KeyboardType}
      onChangeText={val => {
        onChange?.(val);
      }}
    />
  );
};

export default InputTextComponent;

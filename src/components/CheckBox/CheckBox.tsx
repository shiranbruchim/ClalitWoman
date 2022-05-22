import React, {useState} from 'react';
import {Text, TextStyle, TouchableOpacity, View, ViewStyle} from 'react-native';
import {CheckBoxStyle as styles} from './CheckBox.style';
import {CheckBoxProps} from './CheckBox.types';
import {PrimaryStyles} from './PrimaryStyles';

const CheckBoxComponent = (props: CheckBoxProps) => {
  const {children, error, largeBox, textStyle, value, onChange} = props;

  const [checked, setChecked] = useState<boolean>(false);

  const toggleCheckBox = () => {
    setChecked(prev => !prev);
    onChange?.(value);
  };

  const primaryStyles: {
    [key: number]: ViewStyle[] | TextStyle[] | TextStyle | undefined;
  } = PrimaryStyles(textStyle, error || '', largeBox);

  return (
    <View style={styles.mainCheckBoxContainer}>
      <TouchableOpacity onPress={toggleCheckBox} style={styles.checkboxWrap}>
        <View style={[styles.mainCheckBoxInner, primaryStyles.box]}>
          {checked && (
            <View style={[styles.stateIndicator, primaryStyles.indicator]} />
          )}
        </View>
        <Text style={[styles.boxText, primaryStyles.text]}>{value}</Text>
      </TouchableOpacity>

      {children && <View style={styles.boxTextPadding}>{children}</View>}
      {error && <Text style={styles.errorMessage}>{error}</Text>}
    </View>
  );
};

export default CheckBoxComponent;

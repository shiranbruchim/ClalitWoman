import useTheme from 'common/Hooks/useTheme';
import {CheckBoxProps} from './CheckBox.types';

export const PrimaryStyles = (
  textStyle: CheckBoxProps['textStyle'],
  largeBox: boolean | undefined,
  error: string,
) => {
  const {checkBoxLayout} = useTheme();
  return {
    box: [
      error && checkBoxLayout['errorBox' as keyof typeof checkBoxLayout],
      largeBox && checkBoxLayout['largeBox' as keyof typeof checkBoxLayout],
      textStyle?.largeSpacing &&
        checkBoxLayout['largeTextSpacing' as keyof typeof checkBoxLayout],
    ],

    indicator: [
      largeBox &&
        checkBoxLayout['largeBoxIndicator' as keyof typeof checkBoxLayout],
    ],

    text: [
      textStyle?.largeText &&
        checkBoxLayout['largeText' as keyof typeof checkBoxLayout],
    ],
  };
};

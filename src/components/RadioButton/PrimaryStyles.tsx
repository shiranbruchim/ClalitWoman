import useTheme from 'common/Hooks/useTheme';
import {RadioButtonProps} from './RadioButton.types';

export const PrimaryStyles = (
  type: RadioButtonProps['type'],
  textStyle: RadioButtonProps['textStyle'],
) => {
  const {checkBoxLayout} = useTheme();
  return {
    container: [
      textStyle?.underBox &&
        checkBoxLayout['checkBoxContainer' as keyof typeof checkBoxLayout],
    ],
    box: [
      type === 'numberBox' &&
        checkBoxLayout['numberBox' as keyof typeof checkBoxLayout],
      textStyle?.underBox &&
        checkBoxLayout['underBoxText' as keyof typeof checkBoxLayout],
    ],
    indicator: [
      type === 'numberBox' &&
        checkBoxLayout['numberBoxIndicator' as keyof typeof checkBoxLayout],
    ],
  };
};

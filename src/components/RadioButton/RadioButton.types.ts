import {
  radioBoxData,
  selectedBoxData,
} from 'components/CheckBoxWrapper/CheckBoxWrapper.types';

export type RadioButtonProps = {
  type: 'roundBox' | 'numberBox';
  numberIndicator?: string | number;
  value?: string;
  textStyle?: {
    largeText?: boolean;
    largeSpacing?: boolean;
    underBox?: boolean;
  };
  setSelectedBox?: (prev: selectedBoxData) => void;
  selectedBox?: radioBoxData;
};

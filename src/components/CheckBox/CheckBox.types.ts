import {selectedBoxData} from 'components/CheckBoxWrapper/CheckBoxWrapper.types';

export type CheckBoxProps = {
  children?: JSX.Element;
  largeBox?: boolean;
  value: string;
  error?: string;
  textStyle?: {
    largeText?: boolean;
    largeSpacing?: boolean;
  };
  setSelectedBox?: (prev: selectedBoxData) => void;
  selectedBox?: selectedBoxData;
  onChange?: (value: string) => void;
};

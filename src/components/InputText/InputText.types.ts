import {KeyboardTypeOptions} from 'react-native';

export type InputTextProps = {
  PlaceHolderName?: string;
  DefaultValue?: string;
  KeyboardType: KeyboardTypeOptions;
  onChange: (val: string) => void;
};

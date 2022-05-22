import {ViewStyle, StyleProp} from 'react-native';

export type CheckBoxWrapperProps = {
  children?: JSX.Element[];
  title: string;
  style?: StyleProp<ViewStyle> | unknown;
  type: 'checkBox' | 'radioButton';
  onCheckBoxSelected: (val: selectedBoxData) => void;
};

export type selectedBoxData = {
  title: string;
  userReply: string[];
};

export type radioBoxData = {
  title: string;
  userReply: string;
};

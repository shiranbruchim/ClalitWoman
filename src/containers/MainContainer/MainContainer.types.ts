import {View, StyleProp} from 'react-native';

export type MainContainerProps = {
  children?: React.ReactNode;
  style?: StyleProp<View>;
  topBar?: boolean;
};

import {StackNavigationProp} from '@react-navigation/stack';
import {LoginRootStackParamList} from 'components/Navigation/AppNavigation/LoginParamList.types';
import {Control} from 'react-hook-form';

export type LoginLayoutLWPProps = {
  children?: JSX.Element[];
  forgotPasswordClick?: () => void;
  forgotUserCodeClick?: () => void;
  control: Control;
};

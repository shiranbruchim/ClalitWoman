import {DrawerScreenProps} from '@react-navigation/drawer';
import {LoginRootStackParamList} from 'components/Navigation/AppNavigation/LoginParamList.types';

type ProfileScreenNavigationProp = DrawerScreenProps<
  LoginRootStackParamList,
  'LoginWithFaceid'
>;
export type RightMenuBarProps = {
  value: string;
  image: string;
  onPress: () => void;
  naked?: boolean;
  navigation?: ProfileScreenNavigationProp;
};

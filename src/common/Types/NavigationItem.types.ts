import {ImageSourcePropType} from 'react-native';

export interface NavigationItemProps {
  name: string;
  page: string;
  img: ImageSourcePropType;
  screen: () => JSX.Element;
}

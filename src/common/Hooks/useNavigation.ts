import {useNavigation} from '@react-navigation/native';

type Navigation = {
  goBack: () => NavigationType;
  openDrawer: () => NavigationType;
  closeDrawer: () => NavigationType;
  navigate: (location: string, params: object) => NavigationType;
};

type NavigationType = {
  navigation: {
    goBack?: () => void;
    openDrawer?: () => void;
    closeDrawer?: () => void;
    navigate?: (location: string, params: object) => void;
  };
};

export const useThemeNavigation = () => {
  const navigation = useNavigation();

  return {
    goBack: () => navigation.goBack(),
    openDrawer: () => navigation.openDrawer(),
    closeDrawer: () => navigation.closeDrawer(),
    navigate: (route, params) =>
      navigation.navigate(route, {
        ...params,
      }),
  };
};

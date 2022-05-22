import {
  createNavigationContainerRef,
  DrawerActions,
} from '@react-navigation/native';
import {LoginRootStackParamList} from 'components/Navigation/AppNavigation/LoginParamList.types';

export const navigationRef =
  createNavigationContainerRef<LoginRootStackParamList>();

export const navigate = (
  route: keyof LoginRootStackParamList,
  params?: any,
) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(route, {
      ...params,
    });
  }
};

export const goBack = () => {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
};

export const openDrawer = () => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(DrawerActions.openDrawer());
  }
};

export const closeDrawer = () => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(DrawerActions.closeDrawer());
  }
};

export const getCurrentRoute = () => {
  if (navigationRef.isReady()) {
    navigationRef.getCurrentRoute();
  }
};

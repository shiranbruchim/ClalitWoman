import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import RightMenuBar from 'components/RightMenuBar';
import AppNavigator from './AppNavigation/LoginNavigation';
import StorybookUIRoot from '../../../storybook';

const drawerContentCallback = () => {
  return <RightMenuBar />;
};
const defaultScreensettings = {
  useLegacyImplementation: false,
  initialRouteName: 'Splash',
  drawerContent: drawerContentCallback,
};

const Drawer = createDrawerNavigator();

const MainDrawer = () => {
  return (
    <Drawer.Navigator
      {...defaultScreensettings}
      screenOptions={{
        headerShown: false,
        drawerPosition: 'right',
        drawerType: 'front',
        drawerStyle: {
          backgroundColor: 'transparent',
        },
        overlayColor: 'rgba(255,255,255,0.7)',
      }}>
      <Drawer.Screen name="StorybookUIRoot" component={AppNavigator} />
    </Drawer.Navigator>
  );
};

export default MainDrawer;

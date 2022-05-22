import useTheme from 'common/Hooks/useTheme';
import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {MainTopBarStyle as styles} from './MainTopBar.style';
import {MainTopBarProps} from './MainTopBar.types';
import MainTopBarChildHome from './MainTopBarOptions/MainTopBarChildHome';
import MainTopBarGeneral from './MainTopBarOptions/MainTopBarGeneral';
import MainTopBarNotification from './MainTopBarOptions/MainTopBarNotification';

const MainTopBarComponent = (props: MainTopBarProps) => {
  const {childInfo, notificationBar} = props;
  const {name, img, notification} = childInfo ?? {};
  const {images} = useTheme();

  const iconImg = images['crossBell' as keyof typeof images];

  const topBarAttribute = {
    img,
    name,
    notification,
  };

  const topBarType = () => {
    if (notificationBar) {
      return <MainTopBarNotification {...topBarAttribute} />;
    }
    if (childInfo) {
      return <MainTopBarChildHome {...topBarAttribute} />;
    }
    return <MainTopBarGeneral />;
  };

  return (
    <SafeAreaView>
      <View style={styles.mainViewContainer}>{topBarType()}</View>
    </SafeAreaView>
  );
};

export default MainTopBarComponent;

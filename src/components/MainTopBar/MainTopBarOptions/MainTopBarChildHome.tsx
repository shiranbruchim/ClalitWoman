import useTheme from 'common/Hooks/useTheme';
import {goBack, navigate} from 'common/Utils/rootNavigation/navigationRef';
import RightMenu from 'components/RightMenu';
import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {MainTopBarStyle as styles} from '../MainTopBar.style';
import {MainTopBarProps} from '../MainTopBar.types';

const MainTopBarChildHome = (props: MainTopBarProps) => {
  const {img, name, notification} = props;
  const {images} = useTheme();

  const iconImg = images['crossBell' as keyof typeof images];
  const notIndicator = notification?.length || 0;
  return (
    <>
      <View style={styles.HamburgerContainer}>
        <RightMenu />
      </View>
      <View style={styles.IconsContainer}>
        <TouchableOpacity
          onPress={() =>
            navigate('Notification', {
              img,
              name,
              // notification,
            })
          }>
          <View style={styles.IconsIndicator}>
            <Text style={styles.IconsIndicatorText}>{notIndicator}</Text>
          </View>
          <Image source={iconImg} style={styles.bellIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => goBack()}>
          <Text style={styles.mainX}>{'<'}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default MainTopBarChildHome;

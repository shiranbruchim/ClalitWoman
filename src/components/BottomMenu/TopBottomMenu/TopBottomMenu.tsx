import useTheme from 'common/Hooks/useTheme';
import React from 'react';
import {Text, View, Image} from 'react-native';
import {BottomMenuStyle as styles} from '../BottomMenu.style';
// import {BottomMenuProps} from '../BottomMenu.types';

const TopBottomMenu = () => {
  const {images} = useTheme();

  const img = images['topBottomMenu' as keyof typeof images];
  return (
    <View style={styles.mainTopBottomMenuContainer}>
      <Image source={img} style={styles.TopImg} />
    </View>
  );
};

export default TopBottomMenu;

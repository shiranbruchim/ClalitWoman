import useTheme from 'common/Hooks/useTheme';
import React from 'react';
import {Text, View, Image} from 'react-native';
import {BottomMenuStyle as styles} from '../BottomMenu.style';
// import {BottomMenuProps} from '../BottomMenu.types';

const BottomBottomMenu = () => {
  const {images} = useTheme();

  const img = images['bottomBottomMenu' as keyof typeof images];
  return (
    <View style={styles.mainBottomBottomMenuContainer}>
      <Image source={img} style={styles.bottomImg} />
    </View>
  );
};

export default BottomBottomMenu;

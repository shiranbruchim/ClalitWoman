import React from 'react';
import {View} from 'react-native';
import HamburgerShape from './HamburgerShape/HamburgerShape';
import {RightMenuStyle as styles} from './RightMenu.style';

const RightMenuComponent = () => {
  return (
    <View style={styles.mainViewContainer}>
      <HamburgerShape />
    </View>
  );
};

export default RightMenuComponent;

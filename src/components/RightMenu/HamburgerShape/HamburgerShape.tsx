import {openDrawer} from 'common/Utils/rootNavigation/navigationRef';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {RightMenuStyle as styles} from '../RightMenu.style';
// import {HamburgerShapeProps} from './HamburgerShape.types';

const HamburgerShape = () => {
  return (
    <TouchableOpacity
      style={styles.mainShapeContainer}
      onPress={() => openDrawer()}>
      <View style={styles.outerShape} />
      <View style={styles.centerShape} />
      <View style={styles.outerShape} />
    </TouchableOpacity>
  );
};

export default HamburgerShape;

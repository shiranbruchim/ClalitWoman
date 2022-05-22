import React, {useState} from 'react';
import {View} from 'react-native';
import {BottomMenuStyle as styles} from './BottomMenu.style';
// import {BottomMenuProps} from './BottomMenu.types';
import BottomBottomMenu from './BottomBottomMenu/BottomBottomMenu';
import MiddleBottomMenu from './MiddleBottomMenu/MiddleBottomMenu';
import TopBottomMenu from './TopBottomMenu/TopBottomMenu';

const BottomMenuComponent = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const openMenuAttributes = {
    menuOpen,
    setMenuOpen,
  };
  return (
    <View style={styles.mainBottomMenuContainer}>
      <TopBottomMenu />
      <MiddleBottomMenu {...openMenuAttributes} />
      <BottomBottomMenu />
    </View>
  );
};

export default BottomMenuComponent;

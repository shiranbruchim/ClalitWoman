import RightMenu from 'components/RightMenu';
import React from 'react';
import {View} from 'react-native';
import {SplashLogo} from 'common/Theme/Svgs';
import {MainTopBarStyle as styles} from '../MainTopBar.style';

const MainTopBarGeneral = () => {
  return (
    <>
      <View style={styles.HamburgerContainer}>
        <RightMenu />
      </View>
      <SplashLogo />
    </>
  );
};

export default MainTopBarGeneral;

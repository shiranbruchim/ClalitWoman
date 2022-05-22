import useTheme from 'common/Hooks/useTheme';
import {RotateIcon} from 'common/Theme/animation/RotateIcon';
import React from 'react';
import {View, Image, TouchableWithoutFeedback} from 'react-native';
import {BottomMenuStyle as styles} from '../BottomMenu.style';
import {BottomMenuProps} from '../BottomMenu.types';

const MiddleBottomMenu = (props: BottomMenuProps) => {
  const {images} = useTheme();
  const {menuOpen, setMenuOpen} = props;

  const img = images['middleBottomMenu' as keyof typeof images];
  const icon = images['XiconMenu' as keyof typeof images];

  const xiconController = () => {
    const start = menuOpen ? '45deg' : '0deg';
    const end = menuOpen ? '0deg' : '45deg';
    return (
      <RotateIcon start={start} end={end}>
        <Image source={icon} style={styles.Xicon} />
      </RotateIcon>
    );
  };

  return (
    <View style={styles.mainMiddleBottomMenuContainer}>
      <TouchableWithoutFeedback onPress={() => setMenuOpen(!menuOpen)}>
        <View style={styles.imgWrapper}>
          <Image source={img} style={styles.middleImg} />
          {xiconController()}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default MiddleBottomMenu;

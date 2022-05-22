import useTheme from 'common/Hooks/useTheme';
import Button from 'components/Button';
import React from 'react';
import {View, Image} from 'react-native';
import {RightMenuBarStyle as styles} from './RightMenuBar.style';
import {RightMenuBarProps} from './RightMenuBar.types';

const IconWithText = (props: RightMenuBarProps) => {
  const {images} = useTheme();
  const {value, onPress, image, naked} = props;

  const iconImg = images[image as keyof typeof images];

  return (
    <View style={styles.mainButtonsContainer}>
      <Image source={iconImg} style={styles.icon} />
      <Button value={value} onPress={onPress} slim bold nakedBtn={naked} />
    </View>
  );
};

export default IconWithText;

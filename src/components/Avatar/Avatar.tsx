import useTheme from 'common/Hooks/useTheme';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {AvatarStyle as styles} from './Avatar.style';
import {AvatarProps} from './Avatar.types';

const AvatarComponent = (props: AvatarProps) => {
  const {img, indicator} = props;
  const {images, colors} = useTheme();

  const avatarImage = img || images.splash;

  return (
    <View style={styles.avatarIndicatorContainer}>
      <View style={styles.avatarContainer}>
        <Image style={styles.avatar} source={avatarImage} />
      </View>
      {indicator && (
        <View style={styles.indicator}>
          <Text style={{color: colors.indicatorInnerText}}>{indicator}</Text>
        </View>
      )}
    </View>
  );
};

export default AvatarComponent;

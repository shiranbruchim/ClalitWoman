import {CameraIcon, Icon} from 'common/Components/styledComponents/StyledIcons';
import useTheme from 'common/Hooks/useTheme';
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {MiniAvatarStyle as styles} from './MiniAvatar.style';
import {MiniAvatarProps} from './MiniAvatar.types';

const MiniAvatarComponent = (props: MiniAvatarProps) => {
  const {img, large} = props;
  const {images} = useTheme();

  const avatarImage = img || images.splash;

  const styling = [
    styles.avatarContainer,
    large && styles.avatarContainerLarge,
  ];

  const iconImg = images['videoCamera' as keyof typeof images];

  return (
    <View style={styles.avatarIndicatorContainer}>
      <View style={styling}>
        <Image style={styles.avatar} source={avatarImage} />
      </View>
      <TouchableOpacity>
        <CameraIcon>
          <Icon color="#17a1ba" />
        </CameraIcon>
      </TouchableOpacity>
    </View>
  );
};

export default MiniAvatarComponent;

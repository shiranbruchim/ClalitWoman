import useTheme from 'common/Hooks/useTheme';
import {goBack} from 'common/Utils/rootNavigation/navigationRef';
import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {MainTopBarStyle as styles} from '../MainTopBar.style';
import {MainTopBarProps} from '../MainTopBar.types';

const MainTopBarNotification = (props: MainTopBarProps) => {
  const {img, name, notification} = props;
  const {images} = useTheme();

  const iconImg = images['crossBell' as keyof typeof images];
  return (
    <>
      <Text style={styles.childName}>{name}</Text>
      <View style={styles.IconsContainer}>
        <TouchableOpacity>
          <Image source={iconImg} style={styles.bellIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => goBack()}>
          <Text style={styles.mainX}>X</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default MainTopBarNotification;

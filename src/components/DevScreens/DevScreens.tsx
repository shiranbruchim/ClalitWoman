import React from 'react';
import {Text, View} from 'react-native';
import {DevScreensStyle as styles} from './DevScreens.style';
import {DevScreensProps} from './DevScreens.types';

const DevScreensComponent = (props: DevScreensProps) => {
  return (
    <View style={styles.mainViewContainer}>
      <Text>DevScreens</Text>
    </View>
  );
};

export default DevScreensComponent;

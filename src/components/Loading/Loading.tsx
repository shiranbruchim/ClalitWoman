import {RotateView} from 'common/Theme/animation/RotateView';
import React from 'react';
import {Text, View} from 'react-native';
import {LoadingStyle as styles} from './Loading.style';
import {LoadingProps} from './Loading.types';

const LoadingComponent = (props: LoadingProps) => {
  return (
    <RotateView>
      <View style={styles.mainLoadingContainer} />
    </RotateView>
  );
};

export default LoadingComponent;

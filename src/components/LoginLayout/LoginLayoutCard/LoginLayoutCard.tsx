import React from 'react';
import {View} from 'react-native';
import {LoginLayoutCardStyle as styles} from './LoginLayoutCard.style';
import {LoginLayoutCardProps} from './LoginLayoutCard.types';

const LoginLayoutCardComponent = (props: LoginLayoutCardProps) => {
  const {children, noMarginTop} = props;

  return (
    <View style={[styles.mainCardContainer, noMarginTop && styles.noMarginTop]}>
      {children}
    </View>
  );
};

export default LoginLayoutCardComponent;

import React, {useRef, useEffect} from 'react';
import {Animated} from 'react-native';
import {RotateIconProps} from './RotateIcon.types';

export const RotateIcon = (props: RotateIconProps) => {
  const {children, start, end} = props;

  const RotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(RotateAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false,
    }).start();
  }, [RotateAnim]);

  const spin = RotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [start, end],
  });

  console.log(RotateAnim);

  return (
    <Animated.View
      style={{
        transform: [{rotate: spin}],
        justifyContent: 'center',
        width: 18,
        height: 18,
        position: 'absolute',
        top: 25,
        right: 22,
      }}>
      {children}
    </Animated.View>
  );
};

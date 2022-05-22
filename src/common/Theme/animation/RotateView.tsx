import React, {useRef, useEffect} from 'react';
import {Animated, Easing} from 'react-native';
import {FadeInViewProps} from './FadeInView.types';

export const RotateView = (props: FadeInViewProps) => {
  const {children} = props;

  const RotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(RotateAnim, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
    ).start();
  }, [RotateAnim]);

  const spin = RotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.View
      style={{
        transform: [{rotate: spin}],
        width: 40,
        height: 40,
      }}>
      {children}
    </Animated.View>
  );
};

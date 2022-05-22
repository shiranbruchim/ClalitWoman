import React, {useRef, useEffect} from 'react';
import {Animated} from 'react-native';
import {FadeInViewProps} from './FadeInView.types';

export const FadeInView = (props: FadeInViewProps) => {
  const {children} = props;

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
      }}>
      {children}
    </Animated.View>
  );
};

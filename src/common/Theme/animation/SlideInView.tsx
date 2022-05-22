import React, {useRef, useEffect} from 'react';
import {Animated} from 'react-native';
import {SlideInProps} from './SlideInView.types';

export const SlideInView = (props: SlideInProps) => {
  const {children, finalHeight, durationTime, style} = props;

  const slideInanim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(slideInanim, {
      toValue: finalHeight,
      duration: durationTime,
      useNativeDriver: false,
    }).start();
  }, [slideInanim, finalHeight, durationTime]);

  return (
    <Animated.View
      style={{
        ...style,
        minHeight: slideInanim,
      }}>
      {children}
    </Animated.View>
  );
};

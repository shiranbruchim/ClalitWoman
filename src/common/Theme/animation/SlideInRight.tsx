import React, {useRef, useEffect} from 'react';
import {Animated} from 'react-native';
import {SlideInRightProps} from './SlideInRight.types';

export const SlideInRight = (props: SlideInRightProps) => {
  const {children, startMargin, finalMargin, durationTime, style} = props;

  const slideInRightanim = useRef(new Animated.Value(startMargin)).current;

  useEffect(() => {
    Animated.timing(slideInRightanim, {
      toValue: finalMargin,
      duration: durationTime,
      useNativeDriver: false,
    }).start();
  }, [slideInRightanim, finalMargin, durationTime]);

  return (
    <Animated.View
      style={{
        ...style,
        marginRight: slideInRightanim,
      }}>
      {children}
    </Animated.View>
  );
};

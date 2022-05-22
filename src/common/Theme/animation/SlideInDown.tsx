import React, {useRef, useEffect} from 'react';
import {Animated} from 'react-native';
import {SlideInDownProps} from './SlideInDown.types';

export const SlideInDownView = (props: SlideInDownProps) => {
  const {children, finalMargin, durationTime, style} = props;

  const slideInDoneanim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(slideInDoneanim, {
      toValue: finalMargin,
      duration: durationTime,
      useNativeDriver: false,
    }).start();
  }, [slideInDoneanim, finalMargin, durationTime]);

  return (
    <Animated.View
      style={{
        ...style,
        marginTop: slideInDoneanim,
      }}>
      {children}
    </Animated.View>
  );
};

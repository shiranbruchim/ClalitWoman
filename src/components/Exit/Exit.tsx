import React, {useState, isValidElement, cloneElement} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {ExitProps} from './Exit.types';

const ExitComponent = (props: ExitProps) => {
  const {children} = props;
  const [toggle, setToggle] = useState(false);
  const [offset, setOffset] = useState({
    x: 20,
    y: 70,
  });

  const attributes = {
    toggle,
    setToggle,
    setOffset,
  };

  const childrenWithProps = children
    ?.filter(child => {
      return isValidElement(child);
    })
    ?.map(child => {
      return cloneElement(child, attributes);
    });
  return (
    <>
      {toggle && (
        <TouchableOpacity onPress={() => setToggle(prev => !prev)}>
          <View style={mainToggleStyles(offset).mainToggle} />
        </TouchableOpacity>
      )}
      {childrenWithProps}
    </>
  );
};

export default ExitComponent;

export const mainToggleStyles = offset =>
  StyleSheet.create({
    mainToggle: {
      position: 'absolute',
      width: 120,
      height: 120,
      top: offset.y,
      left: offset.x,
    },
  });

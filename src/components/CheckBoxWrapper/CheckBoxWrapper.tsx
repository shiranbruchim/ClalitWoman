import React, {cloneElement, isValidElement, useState, useEffect} from 'react';
import {View, ViewStyle} from 'react-native';
import {
  CheckBoxWrapperProps,
  radioBoxData,
  selectedBoxData,
} from './CheckBoxWrapper.types';

const CheckBoxWrapperComponent = (props: CheckBoxWrapperProps) => {
  const {children, title, style, type, onCheckBoxSelected} = props;

  const selectedBoxInit: selectedBoxData = {
    title,
    userReply: [],
  };

  // const radioButtonInit: radioBoxData = {
  //   title,
  //   userReply: '',
  // };
  const [selectedBox, setSelectedBox] = useState(selectedBoxInit);

  const onChange = (value: string) => {
    if (selectedBox.userReply.includes(value)) {
      setSelectedBox(prev => ({
        ...prev,
        userReply: prev.userReply.filter((reply: string) => reply !== value),
      }));
    } else {
      setSelectedBox(prev => ({
        ...prev,
        userReply: [...prev.userReply, value],
      }));
    }
  };

  const attributes = {
    selectedBox,
    setSelectedBox,
    onChange,
  };

  const childrenWithProps = children
    ?.filter(child => {
      return isValidElement(child);
    })
    ?.map(child => {
      return cloneElement(child, attributes);
    });
  const wrapperStyle = {...(style as ViewStyle)};

  return <View style={wrapperStyle}>{childrenWithProps}</View>;
};

export default CheckBoxWrapperComponent;

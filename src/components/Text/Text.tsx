import React from 'react';
import {Text, View} from 'react-native';
import {TextStyle as styles} from './Text.style';
import {TextProps} from './Text.types';

const TextInfo = (props: TextProps) => {
  const {text, style} = props;
  const textData = text || '';
  return <Text style={style}>{textData}</Text>;
};

export default TextInfo;

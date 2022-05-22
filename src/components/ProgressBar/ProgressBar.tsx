import React from 'react';
import {View, Text} from 'react-native';
import {ProgressBarStyle as styles} from './ProgressBar.style';
import {ProgressBarProps} from './ProgressBar.types';

const ProgressBarComponent = (props: ProgressBarProps) => {
  const {width, contentLength, index} = props;

  const currentPage = index >= 10 ? index.toString() : 0 + index.toString();
  const finalPage =
    contentLength >= 10
      ? contentLength.toString()
      : 0 + contentLength.toString();

  const progressLength = contentLength / index;

  const progressWidth = width / progressLength;

  return (
    <View style={styles(width, progressWidth).mainProgressBar}>
      <View style={styles(width, progressWidth).mainProgressBarContainer}>
        <View style={styles(width, progressWidth).mainInnerProgressBar} />
      </View>
      <Text
        style={
          styles(width, progressWidth).SlideText
        }>{`${currentPage}/${finalPage}`}</Text>
    </View>
  );
};

export default ProgressBarComponent;

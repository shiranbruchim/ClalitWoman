import React from 'react';
import {Text, View} from 'react-native';
import {TextWithTitleStyle as styles} from './TextWithTitle.style';
import {TextWithTitleProps} from './TextWithTitle.types';

const TextWithTitleComponent = (props: TextWithTitleProps) => {
  const {title, subTitle} = props;
  return (
    <View style={styles.mainViewContainer}>
      <Text style={styles.title}>{title}</Text>
      {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
    </View>
  );
};

export default TextWithTitleComponent;

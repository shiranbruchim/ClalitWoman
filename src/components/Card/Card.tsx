import React from 'react';
import {View} from 'react-native';
import {CardStyle as styles} from './Card.style';
import {CardProps} from './Card.types';

const CardComponent = (props: CardProps) => {
  const {
    BorderWidth,
    BorderColor,
    BorderRadius,
    BackGroundColor,
    PaddingHorizontal,
    PaddingVertical,
    children,
  } = props;
  return (
    <View
      style={[
        styles.cardContainer,
        {
          borderWidth: BorderWidth,
          borderColor: BorderColor,
          borderRadius: BorderRadius,
          backgroundColor: BackGroundColor,
          paddingHorizontal: PaddingHorizontal,
          paddingVertical: PaddingVertical,
        },
      ]}>
      {children}
    </View>
  );
};

export default CardComponent;

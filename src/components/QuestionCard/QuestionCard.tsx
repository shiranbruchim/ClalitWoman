import useTheme from 'common/Hooks/useTheme';
import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import {QuestionCardStyle as styles} from './QuestionCard.style';
import {QuestionCardProps} from './QuestionCard.types';

const QuestionCardComponent = (props: QuestionCardProps) => {
  const {title, subTitle, img, onPress} = props;
  const {images} = useTheme();

  const subTitleFormated =
    subTitle.length > 27 ? `${subTitle.slice(0, 27)}...` : subTitle;

  const iconImg = images[img as keyof typeof images];

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.mainViewContainer}>
        <View>
          <Image source={iconImg} style={styles.mainIcon} />
        </View>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitleFormated}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default QuestionCardComponent;

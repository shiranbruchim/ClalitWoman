import Images from 'common/Theme/Images';
import TextInfo from 'components/Text/Text';
import React from 'react';
import {Image, View} from 'react-native';
import {StepHeaderStyle as styles} from './StepHeader.style';
import {StepHeaderProps} from './StepHeader.types';

const StepHeaderComponent = (props: StepHeaderProps) => {
  const {data} = props;
  return (
    <View style={styles.headerContainer}>
      <View style={styles.topLine} />
      <Image style={styles.headerImg} source={Images.fileImage || data?.icon} />
      <TextInfo text={data?.title} style={styles.titleStyle} />
      <TextInfo text={data?.subTitle} style={styles.subTitleStyle} />
    </View>
  );
};

export default StepHeaderComponent;

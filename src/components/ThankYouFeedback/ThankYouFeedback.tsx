import useTheme from 'common/Hooks/useTheme';
import Images from 'common/Theme/Images';
import Button from 'components/Button/Button';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {ThankYouFeedbackStyle as styles} from './ThankYouFeedback.style';
import {ThankYouFeedbackProps} from './ThankYouFeedback.types';

const ThankYouFeedbackComponent = (props: ThankYouFeedbackProps) => {
  const {
    titleFeedback,
    subtitle,
    text,
    isModalContent,
    btnString,
    handleClose,
    handleSubmit,
  } = props;
  const {colors} = useTheme();
  return (
    <View
      style={[
        styles.thankYouFeedbackWrapper,
        {backgroundColor: isModalContent ? 'white' : 'transparent'},
      ]}>
      {isModalContent && (
        <TouchableOpacity onPress={handleClose}>
          <Image style={styles.imgStyleCross} source={Images.cross()} />
        </TouchableOpacity>
      )}

      <Image style={styles.imgStyleHeader} source={Images.success()} />
      <Text style={[styles.titleFeedback, {color: colors.primrayTextColor}]}>
        {titleFeedback}
      </Text>

      <Text
        style={{
          ...styles.subtitle,
          color: colors.primrayTextColor,
        }}>
        {subtitle}
      </Text>
      <Text style={[styles.text, {color: colors.primrayTextColor}]}>
        {text}
      </Text>
      <View style={styles.btnWrapper}>
        <Button
          value={btnString || ''}
          onPress={handleSubmit}
          buttonWidth={310}
          borderL
        />
      </View>
    </View>
  );
};

export default ThankYouFeedbackComponent;

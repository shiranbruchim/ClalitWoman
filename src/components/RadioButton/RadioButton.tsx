import useTheme from 'common/Hooks/useTheme';
import {radioBoxData} from 'components/CheckBoxWrapper/CheckBoxWrapper.types';
import React from 'react';
import {
  Image,
  ImageStyle,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import {PrimaryStyles} from './PrimaryStyles';
import {RadioButtonStyle as styles} from './RadioButton.style';
import {RadioButtonProps} from './RadioButton.types';

const RadioButtonComponent = (props: RadioButtonProps) => {
  const {FadeInView, images} = useTheme();

  const {type, numberIndicator, textStyle, value, selectedBox, setSelectedBox} =
    props;

  const primaryStyles: {[key: string]: ViewStyle[]} = PrimaryStyles(
    type,
    textStyle,
  );
  const isNumberRadio = type === 'numberBox';
  const userReply = numberIndicator || value;

  const numberBox = (
    numberIndicatorStyle: TextStyle,
    numberStateIndicator: TextStyle,
    iconIndicator: ImageStyle,
    stateIndicator: TextStyle,
    indicator: TextStyle,
  ) => {
    if (selectedBox?.userReply === numberIndicator) {
      return (
        <FadeInView>
          {numberIndicator ? (
            <View style={numberStateIndicator}>
              <Image style={iconIndicator} source={images.smallCheck} />
            </View>
          ) : (
            <View style={[stateIndicator, indicator]} />
          )}
        </FadeInView>
      );
    }
    return <Text style={numberIndicatorStyle}>{numberIndicator}</Text>;
  };

  const roundRadio = (stateIndicator: TextStyle, indicator: TextStyle) => {
    if (selectedBox?.userReply === value) {
      return (
        <FadeInView>
          <View style={[stateIndicator, indicator]} />
        </FadeInView>
      );
    }
    return null;
  };

  const PressBox = () => {
    if (
      numberIndicator === selectedBox.userReply ||
      value === selectedBox.userReply
    ) {
      setSelectedBox((prev: radioBoxData) => ({...prev, userReply: ''}));
      return;
    }
    setSelectedBox((prev: radioBoxData) => ({...prev, userReply}));
  };

  // **** move to out sidew file

  const numberBoxRes = numberBox(
    styles.numberIndicator,
    styles.numberStateIndicator,
    styles.iconIndicator,
    styles.stateIndicator,
    PrimaryStyles.indicator,
  );

  return (
    <View style={[styles.mainRadioButtonContainer, primaryStyles.container]}>
      <TouchableNativeFeedback onPress={() => PressBox()}>
        <View style={[styles.innerRadioButtonContainer, primaryStyles.box]}>
          {isNumberRadio
            ? numberBoxRes
            : roundRadio(styles.stateIndicator, primaryStyles.indicator)}
        </View>
      </TouchableNativeFeedback>
      <Text style={[styles.boxText, primaryStyles.text]}>{value}</Text>
    </View>
  );
};

export default RadioButtonComponent;

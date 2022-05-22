import useTheme from 'common/Hooks/useTheme';
import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import {
  ButtonStyle as styles,
  ButtonWidthStyle as widthStyle,
} from './Button.style';
import {ButtonProps} from './Button.types';

const ButtonComponent = (props: ButtonProps) => {
  const {buttonLayout, images} = useTheme();
  const {
    heightL,
    borderL,
    borderXL,
    disabled,
    formOutline,
    secondary,
    outline,
    RoundedDown,
    RoundedUp,
    nakedBtn,
    iconBtn,
    semiSlim,
    slim,
    bold,
    underLine,
    value,
    buttonWidth,
    onPress,
  } = props;

  const rounded = RoundedUp || RoundedDown;

  const roundedBtnIcon = rounded ? 'crossBell' : null;

  const iconBtnIcon = iconBtn ? iconBtn.iconName : null;

  const icon = roundedBtnIcon || iconBtnIcon;

  const iconImg = images[icon as keyof typeof images]
    ? images[icon as keyof typeof images]
    : null;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const PrimaryStyles: any = {
    button: [
      bold && buttonLayout['boldBtn' as keyof typeof buttonLayout],
      nakedBtn && buttonLayout['nakedBtn' as keyof typeof buttonLayout],
      borderL && buttonLayout['borderL' as keyof typeof buttonLayout],
      borderXL && buttonLayout['borderXL' as keyof typeof buttonLayout],
      secondary && buttonLayout['secondaryBtn' as keyof typeof buttonLayout],
      disabled && buttonLayout['disabled' as keyof typeof buttonLayout],
      RoundedDown && buttonLayout['roundedDown' as keyof typeof buttonLayout],
      RoundedUp && buttonLayout['roundedUp' as keyof typeof buttonLayout],
      outline && buttonLayout['outline' as keyof typeof buttonLayout],
      formOutline && buttonLayout['formOutline' as keyof typeof buttonLayout],
      iconBtn?.btnSize === 'small' &&
        buttonLayout['iconBtnSmall' as keyof typeof buttonLayout],
      iconBtn?.btnSize === 'large' &&
        buttonLayout['iconBtnLarge' as keyof typeof buttonLayout],
      iconBtn?.btnColor === 'green' &&
        buttonLayout['greenBtn' as keyof typeof buttonLayout],
      iconBtn?.btnColor === 'blue' &&
        buttonLayout['blueBtn' as keyof typeof buttonLayout],
      iconBtn?.btnColor === 'red' &&
        buttonLayout['redBtn' as keyof typeof buttonLayout],
    ],

    text: [
      bold && buttonLayout['boldText' as keyof typeof buttonLayout],
      underLine && buttonLayout['underLineText' as keyof typeof buttonLayout],
      semiSlim && buttonLayout['semiSlimText' as keyof typeof buttonLayout],
      slim && buttonLayout['slimText' as keyof typeof buttonLayout],
      nakedBtn && buttonLayout['nakedText' as keyof typeof buttonLayout],
      heightL && buttonLayout['heightL' as keyof typeof buttonLayout],
      secondary && buttonLayout['secondaryText' as keyof typeof buttonLayout],
      rounded && buttonLayout['roundedBtnText' as keyof typeof buttonLayout],
      outline && buttonLayout['outlineText' as keyof typeof buttonLayout],
      formOutline &&
        buttonLayout['formOutlineText' as keyof typeof buttonLayout],
      iconBtn?.btnSize === 'small' &&
        buttonLayout['iconBtnTextSmall' as keyof typeof buttonLayout],
      iconBtn?.btnSize === 'large' &&
        buttonLayout['iconBtnTextLarge' as keyof typeof buttonLayout],
      iconBtn?.largeText &&
        buttonLayout['iconTextLarge' as keyof typeof buttonLayout],
    ],

    icon: [
      rounded && buttonLayout['roundedBtnIcon' as keyof typeof buttonLayout],
      iconBtn?.btnSize === 'small' &&
        buttonLayout['iconBtnIconSmall' as keyof typeof buttonLayout],
      iconBtn?.btnSize === 'large' &&
        buttonLayout['iconBtnIconLarge' as keyof typeof buttonLayout],
    ],
  };

  const textStyle = [styles.mainButtonText, PrimaryStyles.text];

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.mainButtonContainer,
          widthStyle(buttonWidth).buttonWidth,
        ]}>
        <View style={[styles.mainButtonInner, PrimaryStyles.button]}>
          {iconImg && (
            <Image style={[styles.icon, PrimaryStyles.icon]} source={iconImg} />
          )}
          {!iconBtn && <Text style={textStyle}>{value}</Text>}
        </View>
        {iconBtn && <Text style={textStyle}>{value}</Text>}
      </View>
    </TouchableOpacity>
  );
};

export default ButtonComponent;

import {StyleSheet} from 'react-native';

export const BtnPaddingSize = {
  xxsmall: 11,
  xsmall: 13,
  small: 18,
  large: 19,
};

export const BorderRadiusSize = {
  small: 12,
  large: 18,
  xlarge: 30,
};

export const BorderWidthSize = {
  small: 1,
};

export const BorderColor = {
  outline: '#17a1ba',
  formOutline: '#00667d',
};

export const BtnBackgroundColor = {
  primary: '#00667d',
  secondary: '#cceffc',
  rounded: '#c7e7e8',
  btnIcon: '#bde8ea',
  outline: 'transparent',
  formOutline: '#ffffff',
  green: '#43b780',
  blue: '#17a1ba',
  red: '#ee8161',
};

export const BtnTextColor = {
  primary: '#ffffff',
  secondary: '#061c3f',
  tertiary: '#05454f',
  outline: '#17a1ba',
  underLine: '#00667D',
};

export const ButtonLayout = StyleSheet.create({
  /* button height */

  heightL: {
    paddingVertical: BtnPaddingSize.large,
  },

  /* button border radius */

  borderL: {
    borderRadius: BorderRadiusSize.large,
  },

  borderXL: {
    borderRadius: BorderRadiusSize.xlarge,
  },

  /* button color */

  disabled: {
    opacity: 0.5,
  },

  greenBtn: {
    backgroundColor: BtnBackgroundColor.green,
  },

  blueBtn: {
    backgroundColor: BtnBackgroundColor.blue,
  },

  redBtn: {
    backgroundColor: BtnBackgroundColor.red,
  },

  /* button secondary */

  secondaryBtn: {
    backgroundColor: BtnBackgroundColor.secondary,
  },

  /* button secondary Text */

  secondaryText: {
    color: BtnTextColor.secondary,
    fontWeight: 'normal',
    fontSize: 20,
  },

  /* button rounded */

  roundedUp: {
    borderRadius: BorderRadiusSize.large,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: BtnBackgroundColor.rounded,
    flexDirection: 'row-reverse',
  },

  roundedDown: {
    borderRadius: BorderRadiusSize.large,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    backgroundColor: BtnBackgroundColor.rounded,
    flexDirection: 'row-reverse',
  },

  roundedBtnText: {
    paddingVertical: BtnPaddingSize.large,
    color: BtnTextColor.tertiary,
    fontWeight: 'normal',
  },

  roundedBtnIcon: {
    margin: 8,
  },

  /* icon small button */

  iconBtnSmall: {
    width: 32,
    height: 32,
    backgroundColor: BtnBackgroundColor.btnIcon,
    shadowOpacity: 0.15,
    borderRadius: BorderRadiusSize.large,
  },

  iconBtnTextSmall: {
    paddingTop: 2,
    fontSize: 12,
    fontWeight: 'normal',
    color: BtnTextColor.tertiary,
    paddingVertical: 0,
  },

  iconBtnIconSmall: {
    width: 15,
    height: 15,
  },

  /* icon large button */

  iconBtnLarge: {
    width: 60,
    height: 60,
    shadowOpacity: 0.28,
    backgroundColor: BtnBackgroundColor.btnIcon,
    borderRadius: BorderRadiusSize.xlarge,
  },

  iconBtnTextLarge: {
    paddingTop: 8,
    fontSize: 12,
    fontWeight: 'normal',
    color: BtnTextColor.tertiary,
    paddingVertical: 0,
  },

  iconTextLarge: {
    fontSize: 14,
    paddingTop: 6,
  },

  iconBtnIconLarge: {
    width: 30,
    height: 30,
  },

  /* button outline */

  outline: {
    backgroundColor: BtnBackgroundColor.outline,
    borderColor: BorderColor.outline,
    borderWidth: BorderWidthSize.small,
    borderRadius: BorderRadiusSize.large,
    width: 79.5,
  },

  outlineText: {
    color: BtnTextColor.outline,
    fontSize: 14,
    paddingVertical: 6,
  },

  /* button formOUtline */
  formOutline: {
    backgroundColor: BtnBackgroundColor.formOutline,
    borderColor: BorderColor.formOutline,
    borderWidth: BorderWidthSize.small,
    borderRadius: BorderRadiusSize.large,
    width: 130,
    shadowOpacity: 0.21,
    shadowRadius: 4,
    shadowOffset: {width: 0, height: 2},
  },

  formOutlineText: {
    color: BtnTextColor.outline,
    fontSize: 16,
    paddingVertical: 19,
  },

  /* naked button */
  nakedBtn: {
    backgroundColor: BtnBackgroundColor.outline,
    borderColor: BorderColor.outline,
    borderWidth: 0,
    width: 'auto',
    shadowOpacity: 0,
  },

  boldBtn: {
    backgroundColor: BtnBackgroundColor.outline,
    borderColor: BorderColor.outline,
    borderWidth: 0,
    width: 'auto',
    shadowOpacity: 0,
  },

  nakedText: {
    color: '#00667D',
    fontSize: 16,
    fontWeight: 'normal',
  },

  /* slim button */

  slimText: {
    fontSize: 16,
    paddingVertical: BtnPaddingSize.xxsmall,
  },
  semiSlimText: {
    fontSize: 16,
    paddingVertical: BtnPaddingSize.xsmall,
  },

  /* underLine text */

  underLineText: {
    textDecorationLine: 'underline',
    color: BtnTextColor.underLine,
  },

  boldText: {
    fontWeight: 'bold',
    color: '#00667D',
  },
});

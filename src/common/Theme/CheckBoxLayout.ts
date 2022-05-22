import {StyleSheet} from 'react-native';

export const BoxSize = {
  small: 18,
  medium: 22,
  large: 28,
};

export const BoxColor = {
  primary: '#e3f2ff',
  secondary: '#17a1ba',
};

export const BoxTextColor = {
  primary: '#05454f',
};

export const BoxTextSize = {
  small: 16,
  large: 18,
};

export const BoxTextSpacing = {
  small: 8,
  large: 10,
};

export const BoxIndicatorSize = {
  small: 12,
  large: 15,
};

export const BoxIndicatorColor = {
  primary: '#17a1ba',
  secondary: '#00667d',
};

export const BorderColor = {
  primary: '#05454f',
};

export const BorderSize = {
  small: 1,
};

export const BorderRadiusSize = {
  small: 3,
  medium: 11,
  large: 14,
};

export const NumberColor = {
  primary: '#05454f',
};

export const CheckBoxLayout = StyleSheet.create({
  /* container type */

  checkBoxContainer: {
    flexDirection: 'column',
  },

  /* box type */

  largeBox: {
    width: BoxSize.medium,
    height: BoxSize.medium,
  },

  numberBox: {
    width: BoxSize.large,
    height: BoxSize.large,
    backgroundColor: 'transparent',
  },

  underBoxText: {
    marginLeft: 0,
    marginBottom: BoxTextSpacing.small,
  },

  /* indicator type */

  largeBoxIndicator: {
    width: BoxIndicatorSize.large,
    height: BoxIndicatorSize.large,
  },

  roundBoxIndicator: {
    borderRadius: BorderRadiusSize.medium,
  },

  /* text styles */

  largeText: {
    fontSize: BoxTextSize.large,
  },

  largeTextSpacing: {
    marginLeft: BoxTextSpacing.large,
  },

  errorBox: {
    borderColor: '#D31715',
  },
});

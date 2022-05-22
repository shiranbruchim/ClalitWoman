import {
  BorderColor,
  BorderRadiusSize,
  BorderSize,
  BoxColor,
  BoxIndicatorColor,
  BoxIndicatorSize,
  BoxSize,
  BoxTextColor,
  BoxTextSize,
  BoxTextSpacing,
  NumberColor,
} from 'common/Theme/CheckBoxLayout';
import {StyleSheet} from 'react-native';

export const RadioButtonStyle = StyleSheet.create({
  mainRadioButtonContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  innerRadioButtonContainer: {
    borderRadius: BorderRadiusSize.large,
    width: BoxSize.medium,
    height: BoxSize.medium,
    backgroundColor: BoxColor.primary,
    borderColor: BorderColor.primary,
    borderWidth: BorderSize.small,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: BoxTextSpacing.small,
  },
  stateIndicator: {
    width: BoxIndicatorSize.large,
    height: BoxIndicatorSize.large,
    borderRadius: BorderRadiusSize.large,
    backgroundColor: BoxIndicatorColor.primary,
  },
  numberIndicator: {
    color: NumberColor.primary,
    fontSize: BoxTextSize.small,
  },
  numberStateIndicator: {
    width: BoxSize.large,
    height: BoxSize.large,
    borderRadius: BorderRadiusSize.large,
    backgroundColor: BoxIndicatorColor.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 10,
    shadowOpacity: 0.21,
  },
  iconIndicator: {
    width: 14,
    height: 10,
  },
  boxText: {
    fontSize: BoxTextSize.small,
    color: BoxTextColor.primary,
  },
});

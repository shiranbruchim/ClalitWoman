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
} from 'common/Theme/CheckBoxLayout';
import {StyleSheet} from 'react-native';

export const CheckBoxStyle = StyleSheet.create({
  mainCheckBoxContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    paddingVertical: 8,
  },
  checkboxWrap: {
    flexDirection: 'row-reverse',
  },
  mainCheckBoxInner: {
    width: BoxSize.small,
    height: BoxSize.small,
    borderColor: BorderColor.primary,
    borderWidth: BorderSize.small,
    borderRadius: BorderRadiusSize.small,
    backgroundColor: BoxColor.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: BoxTextSpacing.small,
  },
  stateIndicator: {
    width: BoxIndicatorSize.small,
    height: BoxIndicatorSize.small,
    borderRadius: BorderRadiusSize.small,
    backgroundColor: BoxIndicatorColor.primary,
  },
  boxText: {
    fontSize: BoxTextSize.small,
    color: BoxTextColor.primary,
  },
  boxTextPadding: {
    paddingRight: 4,
    marginTop: -4,
  },
  errorMessage: {
    color: '#D31715',
    position: 'absolute',
    left: BoxSize.large,
    bottom: 7,
  },
});

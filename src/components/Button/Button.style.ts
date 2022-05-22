import {
  BorderRadiusSize,
  BtnBackgroundColor,
  BtnPaddingSize,
} from 'common/Theme/ButtonLayout';
import {StyleSheet} from 'react-native';

export const ButtonStyle = StyleSheet.create({
  mainButtonContainer: {
    alignItems: 'center',
  },

  mainButtonInner: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: BtnBackgroundColor.primary,
    borderRadius: BorderRadiusSize.small,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.08,
    shadowRadius: 5,
    flexDirection: 'row',
  },

  mainButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    paddingVertical: BtnPaddingSize.small,
  },

  icon: {
    width: 18,
    height: 18,
  },
});

export const ButtonWidthStyle = (buttonWidth: number | undefined) =>
  StyleSheet.create({
    buttonWidth: {
      width: buttonWidth,
    },
  });

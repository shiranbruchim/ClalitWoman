import {StyleSheet} from 'react-native';

export const globalStyle = StyleSheet.create({
  SHADOW: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,

    elevation: 5,
    borderWidth: 0.001,
  },

  horizontalScroll: {
    transform: [{rotateY: '180deg'}],
  },

  //   Rubik_bold: (fontSize: number) => ({
  //     fontSize: fontSize,
  //     fontFamily: Fonts.Rubik_bold,
  //     color: colors.main_black,
  //   }),

  //   Rubik_Light: (fontSize) => ({
  //     fontSize: fontSize,
  //     fontFamily: Fonts.Rubik_bold,
  //     color: colors.main_black,
  //   }),

  //   Rubik_Meduim: (fontSize) => ({
  //     fontSize: fontSize,
  //     fontFamily: Fonts,
  //     color: colors.main_black,
  //   }),
});

/**
 * This file contains all application's style relative to fonts
 */
import {StyleSheet} from 'react-native';

/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
export const Fonts = ({FontSize, Colors}) =>
  StyleSheet.create({
    textSmall: {
      fontSize: FontSize.small,
      color: Colors.primrayTextColor,
    },
    textSmallBold: {
      fontSize: FontSize.small,
      fontWeight: 'bold',
      color: Colors.primrayTextColor,
    },
    textRegular: {
      fontSize: FontSize.regular,
      color: Colors.primrayTextColor,
    },
    textLarge: {
      fontSize: FontSize.large,
      color: Colors.text,
    },
    titleSmall: {
      fontSize: FontSize.small * 2,
      fontWeight: 'bold',
      color: Colors.text,
    },
    titleRegular: {
      fontSize: FontSize.regular * 2,
      fontWeight: 'bold',
      color: Colors.text,
    },
    titleLarge: {
      fontSize: FontSize.large * 2,
      fontWeight: 'bold',
      color: Colors.text,
    },
    textCenter: {
      textAlign: 'center',
    },
    textJustify: {
      textAlign: 'justify',
    },
    textLeft: {
      textAlign: 'left',
    },
    textRight: {
      textAlign: 'right',
    },
    bold: {
      fontWeight: 'bold',
    },
  });

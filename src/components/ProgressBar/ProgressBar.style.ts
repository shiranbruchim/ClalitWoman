import {StyleSheet} from 'react-native';

export const ProgressBarStyle = (width: number, progressWidth: number) =>
  StyleSheet.create({
    mainProgressBar: {
      alignItems: 'center',
    },
    mainProgressBarContainer: {
      flexDirection: 'row-reverse',
      height: 8,
      backgroundColor: '#e3f2ff',
      borderRadius: 4,
      width,
    },
    mainInnerProgressBar: {
      height: 8,
      backgroundColor: '#17a1ba',
      borderRadius: 4,
      width: progressWidth,
    },
    SlideText: {
      fontSize: 12,
      color: '#05454f',
      paddingVertical: 4,
    },
  });

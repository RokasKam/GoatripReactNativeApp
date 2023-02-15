import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
export const styling = elementCount =>
  StyleSheet.create({
    boxStyle: {
      height: elementCount < 5 ? undefined : 127,
      backgroundColor: COLORS.WHITE,
      borderWidth: 1,
      borderColor: COLORS.MAIN_GREEN,
      borderRadius: 8,
      marginTop: 4,
    },
    suggestionText: {
      lineHeight: 21,
      fontSize: 14,
      marginHorizontal: 16,
      marginVertical: 2,
      color: COLORS.DIMGREY,
    },
  });

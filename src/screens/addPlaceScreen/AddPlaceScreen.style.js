import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const styling = open =>
  StyleSheet.create({
    image: {
      flex: 1,
      justifyContent: 'center',
      height: '102%',
      width: '100%',
    },
    page: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    section: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '90%',
    },
    title: {
      marginTop: 8,
      fontSize: 24,
      color: COLORS.BLACK,
    },
    nameInput: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: COLORS.WHITE,
      borderWidth: 1,
      borderColor: COLORS.MAIN_GREEN,
      height: 56,
      borderRadius: 8,
      marginTop: 8,
    },
    textInput: {
      flex: 1,
      color: COLORS.DIMGREY,
      lineHeight: 18,
      marginHorizontal: 16,
    },
    dropDown: {
      backgroundColor: COLORS.WHITE,
      borderColor: COLORS.MAIN_GREEN,
    },
    dropDownContainer: {
      height: open ? 200 : undefined,
    },
    dropDownList: {
      backgroundColor: COLORS.WHITE,
      borderColor: COLORS.MAIN_GREEN,
    },
    dropDownText: {
      fontSize: 15,
      color: COLORS.DIMGREY,
    },
    dropDownTitle: {
      color: COLORS.BLACK,
      marginBottom: 8,
      fontSize: 18,
    },
    iconsStyle: {
      color: COLORS.MAIN_GREEN,
    },
    dropDownBlock: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 8,
    },
    button: {
      marginTop: 16,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

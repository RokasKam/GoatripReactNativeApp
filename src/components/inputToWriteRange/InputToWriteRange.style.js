import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export default StyleSheet.create({
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
    borderWidth: 1,
    borderColor: COLORS.MAIN_GREEN,
    height: 56,
    borderRadius: 8,
    width: '35%',
  },
  textInput: {
    flex: 1,
    color: COLORS.DIMGREY,
    lineHeight: 18,
    marginHorizontal: 16,
  },
  topText: {
    fontSize: 18,
    color: COLORS.BLACK,
    marginTop: 8,
  },
  inputView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
    width: '90%',
  },
  textNearInput: {
    fontSize: 14,
    color: COLORS.BLACK,
  },
  writeRange: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

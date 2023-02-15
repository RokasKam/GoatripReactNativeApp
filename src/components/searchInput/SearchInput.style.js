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
    marginTop: 8,
  },
  textInput: {
    flex: 1,
    color: COLORS.DIMGREY,
    lineHeight: 18,
    marginHorizontal: 16,
  },
  imageStyle: {
    marginTop: 16,
    marginBottom: 16,
    marginRight: 16,
    height: 20,
    width: 20,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  backArrowImageStyle: {
    marginTop: 16,
    marginBottom: 16,
    marginLeft: 16,
    height: 20,
    width: 20,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
});

import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export default StyleSheet.create({
  container: {
    marginTop: 8,
  },
  item: {
    borderRadius: 8,
    borderColor: COLORS.DIMGREY,
    height: 26,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginRight: 8,
    marginBottom: 12,
  },
  title: {
    fontSize: 12,
    lineHeight: 18,
  },
});

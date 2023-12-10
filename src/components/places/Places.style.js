import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export default StyleSheet.create({
  list: {
    flex: 1,
    height: '100%',
    width: '95%',
  },
  sectionImage: {
    height: 243,
    borderWidth: 0,
    borderRadius: 8,
  },
  bottomContainer: {
    marginTop: -16,
    marginBottom: 16,
  },
  titleView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 32,
    fontSize: 24,
    color: COLORS.DARK_BLUE,
  },
});

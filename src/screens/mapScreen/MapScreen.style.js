import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export default StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: '100%',
    width: '100%',
  },
  map: {
    flex: 1,
  },
  infoContainer: {
    position: 'absolute',
    zIndex: 1,
    bottom: 12,
    left: 12,
    right: 12,
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -8,
    backgroundColor: COLORS.WHITE,
    borderBottomEndRadius: 8,
    borderBottomStartRadius: 8,
  },
});

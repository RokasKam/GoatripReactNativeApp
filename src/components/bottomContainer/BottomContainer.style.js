import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export default StyleSheet.create({
  bottomContainer: {
    backgroundColor: COLORS.WHITE,
    height: 122,
    borderRadius: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
    marginHorizontal: 20,
  },
  textStyle: {
    fontSize: 18,
    color: COLORS.BLACK,
  },
  icon: {
    marginLeft: 8,
  },
  ratingBlock: {
    flexDirection: 'row',
    ustifyContent: 'flex-start',
    alignItems: 'center',
  },
  greyText: {
    color: COLORS.DIMGREY,
  },
  rating: {
    marginRight: 8,
  },
  addionalInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 12,
    paddingHorizontal: 20,
    paddingVertical: 6,
    backgroundColor: COLORS.SUPER_LIGHT_GREY,
  },
});

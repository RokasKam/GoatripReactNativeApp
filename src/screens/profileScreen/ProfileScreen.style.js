import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export default StyleSheet.create({
  textStyle: {
    fontSize: 18,
    color: COLORS.BLACK,
  },
  greyText: {
    color: COLORS.DIMGREY,
  },
  accountInfo: {
    width: '50%',
    paddingHorizontal: 32,
    paddingVertical: 24,
  },
  logOutButton: {
    marginTop: 24,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameFavourite: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: COLORS.LIGHT_GREY,
    width: '100%',
    marginBottom: 8,
  },
  bigGreyText: {
    color: COLORS.DIMGREY,
    fontSize: 18,
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoBlock: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    height: '102%',
    width: '100%',
  },
});

import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export default StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalView: {
    height: '75%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    flex: 1,
  },
  searchBlock: {
    position: 'absolute',
    zIndex: 1,
    top: 12,
    left: 12,
    right: 12,
  },
  mapBlock: {
    width: '100%',
    height: '100%',
  },
  textInput: {
    borderColor: COLORS.MAIN_GREEN,
    borderWidth: 1,
    color: COLORS.DIMGREY,
  },
  seperator: {
    backgroundColor: COLORS.MAIN_GREEN,
  },
  powered: {
    color: COLORS.DIMGREY,
  },
  description: {
    color: COLORS.DIMGREY,
  },
});

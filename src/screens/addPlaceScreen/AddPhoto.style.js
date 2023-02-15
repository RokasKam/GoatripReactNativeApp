import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export default StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalView: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
  },
  sectionImage: {
    marginTop: 16,
    height: 243,
    borderWidth: 0,
    borderRadius: 8,
    width: '95%',
  },
  buttonIcon: {
    margin: 8,
  },
  buttons: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  buttonText: {
    fontSize: 14,
    color: COLORS.DIMGREY,
  },
});

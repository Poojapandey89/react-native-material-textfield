import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '200%',
    paddingLeft: '50%',
    flexDirection:'row',
    alignItems: 'center'
  },

  text: {
    textAlign: 'left',
    includeFontPadding: false,
    textAlignVertical: 'top',
  },
});

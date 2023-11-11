import { COLORS, METRICS } from '@themes';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: METRICS.SPACING.LG,
    paddingVertical: METRICS.SPACING.XL,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: COLORS.NEUTRAL.WHITE,
  },
  button: {
    borderWidth: METRICS.BORDER.DEFAULT,
    borderColor: COLORS.NEUTRAL.WHITE,
    paddingVertical: METRICS.SPACING.DEFAULT,
    paddingHorizontal: METRICS.SPACING.XL,
    borderRadius: METRICS.RADIUS.PILL,
  },
  buttonText: {
    fontSize: METRICS.FONT.SIZE.LG,
    fontFamily: METRICS.FONT.WEIGHT.THIN,
    color: COLORS.NEUTRAL.WHITE,
  },
});

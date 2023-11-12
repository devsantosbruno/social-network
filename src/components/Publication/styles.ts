import { COLORS, METRICS } from '@themes';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.NEUTRAL.BLACK30,
    borderRadius: METRICS.RADIUS.DEFAULT,
    paddingHorizontal: METRICS.SPACING.LG,
    paddingVertical: METRICS.SPACING.XL,
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: METRICS.SPACING.SM,
    marginBottom: METRICS.SPACING.DEFAULT,
  },
  description: {
    marginTop: METRICS.SPACING.XS,
    color: COLORS.NEUTRAL.WHITE65,
  },
  interactions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1,
    gap: METRICS.SPACING.XS,
  },

  dateAndTime: {
    textAlign: 'right',
    color: COLORS.NEUTRAL.WHITE,
    marginTop: METRICS.SPACING.SM,
  },

  textWhite: {
    color: COLORS.NEUTRAL.WHITE,
  },
});

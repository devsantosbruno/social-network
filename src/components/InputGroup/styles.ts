import { COLORS, METRICS } from '@themes';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    overflow: 'hidden',
    gap: METRICS.SPACING.DEFAULT,
    backgroundColor: COLORS.NEUTRAL.WHITE,
    borderRadius: METRICS.RADIUS.DEFAULT,
  },
  searchBox: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: METRICS.SPACING.XS,
  },
  search: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.SECONDARY,
    padding: METRICS.SPACING.XS,
    borderRadius: METRICS.RADIUS.PILL,
  },
  input: {
    flex: 1,
    color: COLORS.NEUTRAL.BLACK30,
    paddingRight: METRICS.SPACING.XS,
    paddingVertical: METRICS.SPACING.DEFAULT,
  },
  placeholder: {
    color: COLORS.NEUTRAL.BLACK30,
  },
});

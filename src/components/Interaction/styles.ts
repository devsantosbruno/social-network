import { COLORS, METRICS } from '@themes';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: METRICS.SPACING.XXS,
  },
  quantity: {
    color: COLORS.NEUTRAL.WHITE,
  },
});

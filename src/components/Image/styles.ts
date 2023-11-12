import { COLORS, METRICS } from '@themes';
import { StyleSheet } from 'react-native';

const RADIUS = METRICS.RADIUS.DEFAULT;

export const styles = StyleSheet.create({
  container: {
    borderColor: COLORS.NEUTRAL.WHITE,
    borderRadius: RADIUS,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderRadius: RADIUS,
  },
});

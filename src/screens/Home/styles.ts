import { COLORS } from '@themes';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND.DARK,
    padding: 24,
    paddingTop: 50,
  },
  title: {
    color: COLORS.NEUTRAL.WHITE,
    fontSize: 24,
    fontWeight: '700',
  },
});

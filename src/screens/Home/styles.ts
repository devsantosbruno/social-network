import { THEME } from '@themes';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND,
    padding: 24,
    paddingTop: 50,
  },
  title: {
    color: THEME.COLORS.WHITE,
    fontSize: 24,
    fontWeight: '700',
  },
});

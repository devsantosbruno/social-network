import { COLORS, METRICS } from '@themes';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND.DARK,
  },
  container: {
    paddingHorizontal: METRICS.SPACING.LG,
  },

  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: METRICS.SPACING.XL,
  },
  name: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    gap: METRICS.SPACING.XS,
  },

  stories: {
    flexDirection: 'row',
    marginVertical: METRICS.SPACING.XL,
  },
  story: {
    paddingRight: METRICS.SPACING.DEFAULT,
  },
  createStory: {
    flex: 1,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: METRICS.SPACING.DEFAULT,
    borderRadius: METRICS.RADIUS.PILL,
    backgroundColor: COLORS.NEUTRAL.WHITE,
  },

  posts: {
    gap: METRICS.SPACING.XL,
    marginTop: METRICS.SPACING.DEFAULT,
  },

  textWhite: {
    color: COLORS.NEUTRAL.WHITE,
  },
});

import { COLORS, METRICS } from '@themes';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND.DARK,
  },
  head: {
    paddingHorizontal: METRICS.SPACING.LG,
    paddingVertical: METRICS.SPACING.XL,
    backgroundColor: '#303030',
  },
  goBackAndUser: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: METRICS.SPACING.XL,
  },
  user: {
    textAlign: 'center',
    color: COLORS.NEUTRAL.WHITE,
  },
  imageAndStatistics: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: METRICS.SPACING.DEFAULT,
  },
  statistics: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  nameAndJob: {
    marginTop: METRICS.SPACING.DEFAULT,
    marginBottom: METRICS.SPACING.XS,
  },
  portfolioContainer: {
    alignItems: 'flex-start',
  },

  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: METRICS.SPACING.LG,
    paddingVertical: METRICS.SPACING.XXL,
    backgroundColor: COLORS.BACKGROUND.DARK,
  },

  posts: {
    gap: METRICS.SPACING.XL,
    marginTop: METRICS.SPACING.DEFAULT,
  },

  textWhite: {
    color: COLORS.NEUTRAL.WHITE,
  },
  textSecondary: {
    color: COLORS.SECONDARY,
  },
});

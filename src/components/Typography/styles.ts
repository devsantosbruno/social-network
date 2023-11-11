import { METRICS } from '@themes';

export const TYPOGRAPHY_VARIANT_STYLES = {
  heading: {
    fontSize: METRICS.FONT.SIZE.XL,
    fontFamily: METRICS.FONT.WEIGHT.BOLD,
  },
  paragraph: {
    fontSize: METRICS.FONT.SIZE.BASE,
    fontFamily: METRICS.FONT.WEIGHT.REGULAR,
  },
} as const;

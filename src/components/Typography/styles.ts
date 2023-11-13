import { METRICS } from '@themes';

export const TYPOGRAPHY_VARIANT_STYLES = {
  heading: {
    fontSize: METRICS.FONT.SIZE.XL,
    fontFamily: METRICS.FONT.WEIGHT.BOLD,
  },
  heading02Thin: {
    fontSize: METRICS.FONT.SIZE.LG,
    fontFamily: METRICS.FONT.WEIGHT.THIN,
  },
  heading02Regular: {
    fontSize: METRICS.FONT.SIZE.LG,
    fontFamily: METRICS.FONT.WEIGHT.REGULAR,
  },
  heading02Bold: {
    fontSize: METRICS.FONT.SIZE.LG,
    fontFamily: METRICS.FONT.WEIGHT.BOLD,
  },

  bodyThin: {
    fontSize: METRICS.FONT.SIZE.BASE,
    fontFamily: METRICS.FONT.WEIGHT.THIN,
  },
  bodyRegular: {
    fontSize: METRICS.FONT.SIZE.BASE,
    fontFamily: METRICS.FONT.WEIGHT.REGULAR,
  },
  bodyRegularUnderline: {
    fontSize: METRICS.FONT.SIZE.BASE,
    fontFamily: METRICS.FONT.WEIGHT.REGULAR,
    textDecorationLine: 'underline',
  },
  bodyBold: {
    fontSize: METRICS.FONT.SIZE.BASE,
    fontFamily: METRICS.FONT.WEIGHT.BOLD,
  },

  captionThin: {
    fontSize: METRICS.FONT.SIZE.SM,
    fontFamily: METRICS.FONT.WEIGHT.THIN,
  },
  captionRegular: {
    fontSize: METRICS.FONT.SIZE.SM,
    fontFamily: METRICS.FONT.WEIGHT.REGULAR,
  },
} as const;

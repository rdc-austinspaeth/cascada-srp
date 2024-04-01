import { style } from "@vanilla-extract/css";

export const bannerAdPlaceholder = style({
  width: 728,
  height: 90,
  backgroundColor: '#e1e1e1',
  borderRadius: 4,

  '@media': {
    '(max-width: 768px)': {
      display: 'none',
    },
  },
});

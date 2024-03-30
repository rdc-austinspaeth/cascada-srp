import { style } from "@vanilla-extract/css";

export const bannerAdPlaceholder = style({
  width: 728,
  height: 90,
  backgroundColor: '#ccc',
  borderRadius: 4,

  '@media': {
    '(max-width: 768px)': {
      display: 'none',
    },
  },
});

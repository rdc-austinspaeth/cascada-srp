import { style } from "@vanilla-extract/css";

export const inlineAdPlacholder = style({
  width: 728,
  height: 90,
  backgroundColor: '#e1e1e1',
  borderRadius: 4
});

export const inlineAdContainer = style({
  width: '100%',
  height: 140,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '@media': {
    '(max-width: 768px)': {
      display: 'none',
      height: 0,
    },
  }
});

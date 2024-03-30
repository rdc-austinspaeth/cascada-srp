import { style } from "@vanilla-extract/css";

export const filterBar = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: 1,
});

export const leftContent = style({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',

  '@media': {
    '(max-width: 768px)': {
      display: 'none',
    },
  },
});

export const rightContent = style({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  height: '100%',

  '@media': {
    '(max-width: 768px)': {
      display: 'none',
    },
  },
});

export const mobileContent = style({
  display: 'none',
  width: '100%',

  '@media': {
    '(max-width: 768px)': {
      display: 'flex',
    },
  },
});

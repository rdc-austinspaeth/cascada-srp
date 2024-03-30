import { style } from "@vanilla-extract/css";

export const navigationBar = style({
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
    '(max-width: 995px)': {
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
    '(max-width: 995px)': {
      display: 'none',
    },
  },
});

export const navContainer = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  marginLeft: 24,
  height: 48,
});

export const mobileContent = style({
  display: 'none',
  width: '100%',

  '@media': {
    '(max-width: 995px)': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  },
});

export const mobileButton = style({
  display: 'flex',
  margin: 0,
  padding: 0,
  border: 0,
  backgroundColor: 'transparent',
});

export const darkButton = style({
  display: 'flex',
  margin: 0,
  padding: 6,
  borderRadius: 45,
  border: 0,
  marginTop: -2,
  backgroundColor: '#2b2b2b',
});

export const mobileIcon = style({
  height: 24,
  width: 24,
});

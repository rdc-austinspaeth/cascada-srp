import { style } from "@vanilla-extract/css";

export const loginSuspense = style({
  height: 14,
  width: 41.84,
  padding: '0px 16px',
  boxSizing: 'content-box',
});

export const loginInnerSuspense = style({
  height: 14,
  width: '100%',
  borderRadius: 3,
  backgroundColor: '#e1e1e1',
});

export const loginText = style({
  fontSize: 14,
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  fontWeight: 500,
  color: '#2b2b2b',
  padding: '0px 8px',
  boxSizing: 'content-box',
});

export const activeBorder = style({
  height: 2,
  width: '100%',
  backgroundColor: 'transparent',
  position: 'absolute',
  bottom: -1,
  selectors: {
    'div:hover > &': {
      backgroundColor: '#2b2b2b !important',
    }
  }
});

export const loginContainer = style({
  position: 'relative',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  padding: '0 16px',
  justifyContent: 'center',
  fontSize: 14,
  fontWeight: 400,
  cursor: 'pointer',
});

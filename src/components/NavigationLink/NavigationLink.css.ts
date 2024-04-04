import { globalStyle, style } from "@vanilla-extract/css";

export const navigationLinkSuspense = style({
  padding: '0px 8px',
  boxSizing: 'content-box',
  position: 'relative',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
});

export const navigationLinkInnerSuspense = style({
  height: 14,
  width: '100%',
  borderRadius: 3,
  backgroundColor: '#e1e1e1',
});

export const linkText = style({
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
  backgroundColor: '#2b2b2b',
  position: 'absolute',
  marginTop: 46,

  selectors: {
    'nav button:hover > &': {
      backgroundColor: '#2b2b2b !important',
    }
  }
});

export const activeBorderSuspense = style({
  height: 2,
  width: '100%',
  backgroundColor: '#e1e1e1',
  position: 'absolute',
  marginTop: 46,
});

export const navigationLinkContainer = style({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  border: 'none',
  backgroundColor: 'transparent',
  padding: 0,
});

globalStyle(`${navigationLinkContainer}:hover > section, ${navigationLinkContainer}:focus > section`, {
  display: 'flex',
});

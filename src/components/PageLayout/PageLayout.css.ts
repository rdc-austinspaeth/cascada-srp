import { style } from "@vanilla-extract/css";

export const pageLayoutContainer = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
});

export const bannerAdContainer = style({
  width: '100%',
  height: 122,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '@media': {
    '(max-width: 768px)': {
      height: 0,
    },
  },
});

export const navBarContainer = style({
  width: '100%',
  height: 50,
  padding: '0px 16px',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  borderBottom: '1px solid #cacaca',
  zIndex: 2,
});

export const filterBarStickyBorder = style({
  width: '100%',
  height: 1,
  top: 79,
  position: 'sticky',
  background: '#cacaca',
  marginTop: 1,
  marginBottom: -1,
  zIndex: 0,
});

export const filterBarContainer = style({
  width: '100%',
  height: 79,
  padding: '0px 16px',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  zIndex: 2,
  top: 0,
  marginTop: -1,
  position: 'sticky',
  backgroundColor: '#fff',

  '@media': {
    '(max-width: 768px)': {
      backgroundColor: '#f7f7f7',
    },
  },
});

export const metaContainer = style({
  width: '100%',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: '0px 16px',
  paddingTop: 17,
});

export const propertiesContainer = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  gap: 8,
  padding: '0px 16px',
  marginTop: 4,
});

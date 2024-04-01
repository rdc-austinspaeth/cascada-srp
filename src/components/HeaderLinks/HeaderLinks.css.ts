import { style } from "@vanilla-extract/css";

export const headerLinksContainer = style({
  marginRight: 64,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 28,
  flexWrap: 'nowrap',
  
  '@media': {
    '(max-width: 1280px)': {
      display: 'none',
    }
  },
});

export const headerLink = style({
  fontWeight: 500,
  fontSize: 16,
  color: '#2b2b2b',
  textDecoration: 'underline',
  marginBottom: -1,
  cursor: 'pointer',
});

export const headerLinksContainerSuspense = style({
  marginRight: 64,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 28,
  flexWrap: 'nowrap',

  '@media': {
    '(max-width: 1280px)': {
      display: 'none',
    }
  },
});

export const headerLinkSuspense = style({
  height: 16,
  backgroundColor: '#e1e1e1',
  marginBottom: -1,
  borderRadius: 4,
});

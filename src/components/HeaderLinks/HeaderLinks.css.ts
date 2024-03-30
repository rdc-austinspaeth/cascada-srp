import { style } from "@vanilla-extract/css";

export const headerLinksContainer = style({
  marginRight: 64,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 28,
  flexWrap: 'nowrap',
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
});

export const headerLinkSuspense = style({
  height: 16,
  backgroundColor: '#ccc',
  marginBottom: -1,
  borderRadius: 4,
});

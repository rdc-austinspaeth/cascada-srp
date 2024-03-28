import { style } from "@vanilla-extract/css";

export const pageTitle = style({
  margin: 0,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  fontSize: 24,
  lineHeight: '32px',
  fontWeight: 700,
  color: '#2b2b2b',
});

export const secondaryContainer = style({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '12px 0px',
  height: 20,
  boxSizing: 'content-box',
});

export const homeCount = style({
  color: '#757575',
  fontSize: 14,
  fontWeight: 400,
  lineHeight: 1.42857143,
  marginRight: 32,
});

export const sort = style({
  display: 'flex',
  flexWrap: 'nowrap',
  whiteSpace: 'nowrap',
  alignItems: 'center',
  fontWeight: 400,
  fontSize: 14,
  color: '#757575',
});

export const chevronIcon = style({
  height: 16,
  marginLeft: 4,
  marginBottom: -1,
});

export const heavy = style({
  whiteSpace: 'nowrap',
  fontWeight: 500,
  paddingLeft: 4,
  color: '#2b2b2b',
});

export const pageTitleSuspense = style({
  height: 24,
  width: 500,
  margin: '4px 0px',
  backgroundColor: '#ccc',
  borderRadius: 4,
});

export const HomeCountSuspense = style({
  height: 14,
  width: 80,
  backgroundColor: '#ccc',
  borderRadius: 4,
  marginRight: 32,
});

export const sortSuspense = style({
  height: 14,
  width: 160,
  backgroundColor: '#ccc',
  borderRadius: 4,
});
import { style } from "@vanilla-extract/css";

export const paginationBar = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const directionLink = style({
  display: 'flex',
  gap: 8,
  alignItems: 'center',

  ':hover': {
    color: '#646464',
    fill: '#646464',
  }
});

export const directionText = style({
  fontWeight: 500,
  textDecoration: 'underline',
  fontSize: 16,
});

export const directionIcon = style({
  height: 24,
  width: 24,
});

export const pageLinks = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8,
  margin: '0px 21px',
});

export const pageLink = style({
  height: 48,
  width: 48,
  borderRadius: 8,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#2b2b2b',
  backgroundColor: '#fff',
  fontSize: 16,
  fontWeight: 500,
  border: '1px solid #2b2b2b',
  textDecoration: 'none',

  ':hover': {
    color: '#696159',
    backgroundColor: '#e9e7e4',
    borderColor: '#696159',
  }
});

export const dots = style({
  display: 'flex',
  alignItems: 'center',
  color: '#958a7f',
  fontWeight: 500,
  fontSize: 32,
  margin: '0px 14px',
  width: 21.22,
});

export const directionSuspense = style({
  height: 16,
  borderRadius: 4,
  backgroundColor: '#e1e1e1',
});

export const pageLinkSuspense = style({
  height: 48,
  width: 48,
  borderRadius: 8,
  backgroundColor: '#e1e1e1',
  border: '1px solid #e1e1e1',
  textDecoration: 'none',
});

export const dotsSuspense = style({
  display: 'flex',
  alignItems: 'center',
  color: '#e1e1e1',
  fontWeight: 500,
  fontSize: 32,
  margin: '0px 14px',
  width: 21.22,
});
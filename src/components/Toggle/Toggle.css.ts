import { style } from "@vanilla-extract/css";

export const toggleContainer = style({
  position: 'relative',
  width: 177.87,
  height: 48,
  backgroundColor: '#f2f2f2',
  borderRadius: 45,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 4px',
});

export const toggleSelected = style({
  width: 78.55,
  height: 40,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#fff',
  border: '1px solid #2b2b2b',
  color: '#2b2b2b',
  boxSizing: 'border-box',
  borderRadius: 45,
  fontSize: 16,
  fontWeight: 500,
});

export const toggleUnselected = style({
  fontSize: 16,
  width: 78.55,
  fontWeight: 500,
  height: 40,
  paddingRight: 5,
  color: '#2b2b2b',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 45,
  boxSizing: 'border-box',
});

export const toggleContainerSuspense = style({
  position: 'relative',
  width: 177.87,
  height: 48,
  backgroundColor: '#f2f2f2',
  borderRadius: 45,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 4px',
});

export const toggleSelectedSuspense = style({
  width: 78.55,
  height: 40,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#fff',
  border: '1px solid #ccc',
  boxSizing: 'border-box',
  borderRadius: 45,
  fontSize: 16,
  fontWeight: 500,
});

export const toggleSelectedTextSuspense = style({
  height: 16,
  width: 28.54,
  borderRadius: 3,
  backgroundColor: '#ccc',
});

export const toggleUnselectedSuspense = style({
  width: 78.55,
  fontWeight: 500,
  height: 40,
  paddingRight: 5,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 45,
  boxSizing: 'border-box',
});

export const toggleUnselectedTextSuspense = style({
  height: 16,
  width: 33.38,
  borderRadius: 3,
  backgroundColor: '#ccc',
});

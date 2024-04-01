import { style } from "@vanilla-extract/css";

export const filterContainer = style({
  height: 48,
  fontSize: 16,
  fontWeight: 500,
  borderRadius: 8,
  backgroundColor: '#fff',
  border: '1px solid #2b2b2b',
  color: '#2b2b2b',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 8,
  padding: '0 12px',
  paddingTop: 1,
  boxSizing: 'border-box',
  whiteSpace: 'nowrap',
  marginLeft: 4.8,
  position: 'relative',
});

export const chevronIcon = style({
  width: 24,
  height: 24,
  position: 'absolute',
  right: 8,
  marginTop: -1,
  fill: '#2b2b2b',
});

export const filterContainerSuspense = style({
  height: 48,
  fontSize: 16,
  fontWeight: 500,
  borderRadius: 8,
  backgroundColor: '#fff',
  border: '1px solid #e1e1e1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 8,
  padding: '0 12px',
  paddingTop: 1,
  boxSizing: 'border-box',
  whiteSpace: 'nowrap',
  marginLeft: 4.8,
  position: 'relative',
});

export const filterTextSuspense = style({
  height: 14,
  width: '100%',
  borderRadius: 3,
  backgroundColor: '#e1e1e1',
});

export const conditionalTabletHide = style({
  '@media': {
    '(max-width: 1280px)': {
      display: 'none',
    }
  }
});

export const conditionalMobileHide = style({
  '@media': {
    '(max-width: 995px)': {
      display: 'none',
    }
  }
});

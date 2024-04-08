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
  cursor: 'pointer',

  ':hover': {
    color: '#696159',
    backgroundColor: '#e9e7e4',
    borderColor: '#696159',
  },

  ':focus': {
    color: '#696159',
    backgroundColor: '#e9e7e4',
    borderColor: '#696159',
  },
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

export const dropdown = style({
  position: 'relative',
  display: 'inline-block',
});

export const dropdownContent = style({
  position: 'absolute',
  display:'flex',
  padding: 16,
  backgroundColor: 'rgb(255, 255, 255)',
  border: '1px solid rgb(114, 106, 96)',
  borderRadius: 16,
  boxShadow: 'rgba(0, 0, 0, 0.16) 0px 4px 16px',
  boxSizing: 'border-box',
  flexDirection: 'column',
  WebkitBoxPack: 'justify',
  justifyContent: 'space-between',
  overflow: 'hidden',
  width: 360,
  zIndex: 1,
});
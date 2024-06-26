import { style } from "@vanilla-extract/css";

export const searchContainer = style({
  width: 270,
  height: 48,
  borderRadius: 45,
  border: '1px solid #757575',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',

  '@media': {
    '(max-width: 768px)': {
      flex: 1,
      marginRight: 8,
    },
  },
});

export const searchContainerSuspense = style({
  width: 270,
  height: 48,
  borderRadius: 45,
  border: '1px solid #e1e1e1',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  
  '@media': {
    '(max-width: 768px)': {
      flex: 1,
      marginRight: 8,
    },
  },
});

export const searchInput = style({
  flex: 1,
  height: '100%',
  border: 'none',
  paddingLeft: 20,
  borderRadius: 45,
  paddingRight: 45,
  fontSize: 16,
  boxSizing: 'border-box',
  width: '100%',
  position: 'absolute',
});

export const searchInputTextSuspense = style({
  left: 20,
  width: 150,
  borderRadius: 4,
  height: 16,
  background: '#e1e1e1',
  position: 'absolute',
});

export const searchButton = style({
  width: 40,
  height: 40,
  borderRadius: 45,
  background: '#2b2b2b',
  right: 4,
  outline: 0,
  border: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  cursor: 'pointer',

  ':hover': {
    backgroundColor: '#696159',
  },

  ':focus': {
    backgroundColor: '#696159',
  },
});

export const searchButtonSuspense = style({
  width: 40,
  height: 40,
  borderRadius: 45,
  background: '#e1e1e1',
  right: 4,
  position: 'absolute',
});

export const searchIcon = style({
  fill: '#fff',
  height: '24px',
  width: '24px',
  position: 'absolute',
});

export const clearIcon = style({
  height: 24,
  width: 24,
  fill: '#2b2b2b',
  position: 'absolute',
  right: 55,
  marginTop: -1,
});

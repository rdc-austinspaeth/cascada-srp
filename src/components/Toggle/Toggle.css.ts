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

  '@media': {
    '(max-width: 850px)': {
      width: 83,
      border: '1px solid #2b2b2b',
      backgroundColor: '#fff',
      color: '#2b2b2b',
    },

    '(max-width: 768px)': {
      display: 'none',
    },
  },
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
  cursor: 'pointer',

  ':hover': {
    color: '#696159',
    borderColor: '#696159',
  },

  ':focus': {
    color: '#696159',
    borderColor: '#696159',
  },

  '@media': {
    '(max-width: 850px)': {
      display: 'none',
    },
  },
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
  cursor: 'pointer',

  ':hover': {
    backgroundColor: '#e9e7e4',
  },

  ':focus': {
    backgroundColor: '#e9e7e4',
  },

  '@media': {
    '(max-width: 850px)': {
      paddingRight: 0,
    },
  },
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

  '@media': {
    '(max-width: 850px)': {
      width: 83,
      border: '1px solid #e1e1e1',
      backgroundColor: '#fff',
      color: '#2b2b2b',
    },

    '(max-width: 768px)': {
      display: 'none',
    },
  },
});

export const toggleSelectedSuspense = style({
  width: 78.55,
  height: 40,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#fff',
  border: '1px solid #e1e1e1',
  boxSizing: 'border-box',
  borderRadius: 45,
  fontSize: 16,
  fontWeight: 500,

  '@media': {
    '(max-width: 850px)': {
      display: 'none',
    },
  },
});

export const toggleSelectedTextSuspense = style({
  height: 16,
  width: 28.54,
  borderRadius: 3,
  backgroundColor: '#e1e1e1',
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

  '@media': {
    '(max-width: 850px)': {
      paddingRight: 0,
    },
  },
});

export const toggleUnselectedTextSuspense = style({
  height: 16,
  width: 33.38,
  borderRadius: 3,
  backgroundColor: '#e1e1e1',
});

import { style } from "@vanilla-extract/css";

export const propertyCardContainer = style({
  height: 440,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  marginBottom: 8,
  width: 'calc(16.67% - 7px)',
  cursor: 'pointer',

  '@media': {
    '(max-width: 2200px)': {
      width: 'calc(20% - 7px)',
    },
    '(max-width: 1900px)': {
      width: 'calc(25% - 6px)',
    },
    '(max-width: 1400px)': {
      width: 'calc(33% - 2px)',
    },
    '(max-width: 1100px)': {
      width: 'calc(50% - 4px)',
    },
    '(max-width: 800px)': {
      width: 'calc(100%)',
    },
  },
});

export const propertyCardContainerPlaceholder = style({
  height: 440,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  marginBottom: 8,
  paddingRight: 8,
  boxSizing: 'border-box',
  width: 'calc(16.67% - 7px)',

  '@media': {
    '(max-width: 2200px)': {
      width: 'calc(20% - 7px)',
    },
    '(max-width: 1900px)': {
      width: 'calc(25% - 6px)',
    },
    '(max-width: 1400px)': {
      width: 'calc(33% - 2px)',
    },
    '(max-width: 1100px)': {
      width: 'calc(50% - 4px)',
      paddingRight: 16,
    },
    '(max-width: 800px)': {
      width: 'calc(100% - 30px)',
      paddingRight: 0,
    },
  },
});

export const cardContainer = style({
  width: '100%',
  height: 420,
  borderRadius: 16,
  boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.16)',
});

export const cardContainerPlaceholder = style({
  width: 'calc(100% - 10px)',
  height: 420,
  borderRadius: 16,
  overflow: 'hidden',

  '@media': {
    '(max-width: 1100px)': {
      width: 'calc(100% - 16px)',
    },
    '(max-width: 800px)': {
      width: 'calc(100%)',
    },
  },
});

export const label = style({
  width: 'calc(100% - 30px)',
  height: 20,
  color: '#757575',
  fontSize: 12,
  fontWeight: 400,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export const imageContainer = style({
  width: '100%',
  height: 270,
  borderTopLeftRadius: 16,
  borderTopRightRadius: 16,
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
});

export const image = style({
  objectFit: 'cover',
  width: '100%',
  height: '100%',
  transition: 'all .5s ease-in-out',

  ':hover': {
    opacity: 0,
  },

  ':focus': {
    opacity: 0,
  },
});

export const backroundImage = style({
  objectFit: 'cover',
  width: '100%',
  height: '100%',
});

export const loveIt = style({
  position: 'absolute',
  background: '#fff',
  borderRadius: 45,
  height: 48,
  width: 48,
  border: '1px solid #2b2b2b',
  boxShadow: 'rgba(0, 0, 0, 0.16) 0px 2px 8px',
  right: 16,
  bottom: 12,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',

  ':hover': {
    borderColor: '#1a1816',
    fill: '#1a1816!important',
    backgroundColor: '#e9e7e4',
  },

  ':focus': {
    borderColor: '#1a1816',
    fill: '#1a1816!important',
    backgroundColor: '#e9e7e4',
  },
});

export const heart = style({
  fill: '#2b2b2b',
  width: 24,
  height: 24,
  position: 'absolute',
});

export const cardContentContainer = style({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  padding: '12px 16px',
  height: 150,
});

export const leftContent = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  width: 'calc(100% - 120px)',
});

export const status = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  fontWeight: 400,
  color: '#2b2b2b',
  fontSize: 14,
});

export const statusDot = style({
  backgroundColor: '#0a801f',
  height: 12,
  width: 12,
  borderRadius: 45,
  marginRight: 4,
});

export const price = style({
  fontSize: 24,
  lineHeight: '32px',
  fontWeight: 700,
  marginTop: 4,
});

export const homeFacts = style({
  display: 'flex',
  gap: 12,
  alignItems: 'center',
  fontSize: 16,
  marginTop: 4,
  width: 'calc(100% + 145px)',
});

export const strongFact = style({
  fontWeight: 700,
  color: '#2b2b2b',
});

export const fact = style({});

export const addressLine = style({
  marginTop: 4,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  width: '100%',
});

export const locationLine = style({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  width: '100%',
});

export const rightContent = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  justifyContent: 'flex-end',
  height: '100%',
});

export const ctaButton = style({
  width: 128.71,
  height: 36,
  fontSize: 16,
  color: '#2b2b2b',
  background: '#fff',
  border: '1px solid #2b2b2b',
  borderRadius: 45,
  fontWeight: 500,
  marginBottom: -1,
  cursor: 'pointer',

  ':hover': {
    color: '#696159',
    borderColor: '#696159',
    backgroundColor: '#e9e7e4',
    textDecoration: 'underline',
  },

  ':focus': {
    color: '#696159',
    textDecoration: 'underline',
    borderColor: '#696159',
    backgroundColor: '#e9e7e4',
  }
});

export const propertyCardSuspense = style({
  height: 440,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  marginBottom: 8,
  width: 'calc(16.67% - 7px)',

  '@media': {
    '(max-width: 2200px)': {
      width: 'calc(20% - 7px)',
    },
    '(max-width: 1900px)': {
      width: 'calc(25% - 6px)',
    },
    '(max-width: 1400px)': {
      width: 'calc(33% - 2px)',
    },
    '(max-width: 1100px)': {
      width: 'calc(50% - 4px)',
    },
    '(max-width: 800px)': {
      width: 'calc(100%)',
    },
  }
});

export const cardContainerSuspense = style({
  width: '100%',
  height: 420,
  borderRadius: 16,
  border: '1px solid #e1e1e1',
});

export const labelSuspense = style({
  width: 180,
  height: 12,
  marginBottom: 8,
  backgroundColor: '#e1e1e1',
  borderRadius: 4,
});

export const imageContainerSuspense = style({
  width: '100%',
  height: 270,
  borderTopLeftRadius: 16,
  borderTopRightRadius: 16,
  overflow: 'hidden',
  backgroundColor: '#e1e1e1',
});

export const statusDotSuspense = style({
  backgroundColor: '#e1e1e1',
  height: 12,
  width: 12,
  borderRadius: 45,
  marginRight: 4,
});

export const statusSuspense = style({
  width: 94,
  height: 14,
  backgroundColor: '#e1e1e1',
  borderRadius: 4,
});

export const priceSuspense = style({
  width: 130,
  height: 24,
  padding: '4px 0',
  backgroundColor: '#e1e1e1',
  borderRadius: 4,
  marginTop: 12,
});

export const factSuspense = style({
  width: 40,
  height: 16,
  backgroundColor: '#e1e1e1',
  borderRadius: 4,
  marginTop: 8,
});


export const addressLineSuspense = style({
  width: 180,
  height: 14,
  backgroundColor: '#e1e1e1',
  borderRadius: 4,
  marginTop: 12,
});

export const locationLineSuspense = style({
  width: 150,
  height: 14,
  backgroundColor: '#e1e1e1',
  borderRadius: 4,
  marginTop: 6,
});

export const ctaButtonSuspense = style({
  width: 128.71,
  height: 36,
  backgroundColor: '#e1e1e1',
  border: '1px solid #e1e1e1',
  borderRadius: 45,
  marginBottom: -1,
});
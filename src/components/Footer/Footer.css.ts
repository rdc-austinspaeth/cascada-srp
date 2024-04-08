import { style } from "@vanilla-extract/css";

export const footer = style({
  width: '100%',
  background: '#2b2b2b',
  height: 468,
  padding: '56px 0px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',

  '@media': {
    '(max-width: 1280px)': {
      height: 564,
    },
    '(max-width: 768px)': {
      height: 588,
    },
    '(max-width: 600px)': {
      height: 640,
    },
  },
});

export const centeredContent = style({
  width: 'calc(100% - 30px)',
  maxWidth: 1244,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
});

export const socialBar = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',

  '@media': {
    '(max-width: 600px)': {
      flexDirection: 'column',
      gap: 12,
    },
  }
});

export const linksBar = style({
  display: 'flex',
  flexWrap: 'wrap',
  marginTop: 32,
  justifyContent: 'flex-start',
  width: '100%',
});

export const mobileBar = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  marginTop: 42,
  width: '100%',
});

export const copyrightBar = style({
  color: '#dfdfdf',
  fontSize: 12,
  width: '100%',
  marginTop: 43,
});

export const link = style({
  color: '#fff',
  fontWeight: 500,
  textDecoration: 'underline',
});

export const leftContent = style({
  display: 'flex',
  gap: 12,
});

export const socialButton = style({
  height: 40,
  width: 40,
  borderRadius: 45,
  backgroundColor: '#fff',
  border: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const rightContent = style({
  display: 'flex',
  gap: 12,
  alignItems: 'center',
});

export const socialIcon = style({
  height:24,
  width: 24,
  fill: '#2b2b2b',
  position: 'absolute',
});

export const realtorButton = style({
  width: 122,
  height: 40,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#fff',
  border: 'none',
  borderRadius: 45,
});

export const realtorGraphic = style({
  height: 33,
  width: 88,
});

export const footerLink = style({
  color: '#fff',
  fontSize: 16,
  fontWeight: 500,
  marginRight: 40,
  height: 48,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  textDecoration: 'none',

  ':hover': {
    textDecoration: 'underline',
    color: '#fff',
  },

  '@media': {
    '(max-width: 1280px)': {
      width: 'calc(25% - 40px)',
    },
    '(max-width: 768px)': {
      width: 'calc(33% - 40px)',
    },
  },
});

export const mobileButtons = style({
  display: 'flex',
  gap: 12,
  marginTop: 18,
});

export const mobileButton = style({
  height: 40,
  width: 119,
  borderRadius: 4,
  backgroundColor: '#fff',
});

export const mobileTitle = style({
  color: '#fff',
  fontSize: 20,
  fontWeight: 700,
  letterSpacing: 0.6,

  '@media': {
    '(max-width: 768px)': {
      fontSize: 18,
    },
  },
});

export const mobileButtonGraphic = style({
  width: '100%',
  height: '100%',
});

export const socialButtonSuspense = style({
  height: 40,
  width: 40,
  borderRadius: 45,
  backgroundColor: '#5e5e5e',
});

export const realtorButtonSuspense = style({
  width: 122,
  height: 40,
  backgroundColor: '#5e5e5e',
  borderRadius: 45,
});

export const footerLinkSuspense = style({
  height: 16,
  borderRadius: 4,
  backgroundColor: '#5e5e5e',
  marginRight: 40,
  marginTop: 16,
  marginBottom: 16,

  '@media': {
    '(max-width: 1280px)': {
      width: 'calc(25% - 40px) !important',
      alignSelf: 'flex-start',
      justifySelf: 'flex-start',
    },
    '(max-width: 768px)': {
      width: 'calc(33% - 40px) !important',
      alignSelf: 'flex-start',
      justifySelf: 'flex-start',
    },
  },
});

export const mobileTitleSuspense = style({
  height: 20,
  borderRadius: 4,
  backgroundColor: '#5e5e5e',
  width: 121,
  marginTop: 3,
  marginBottom: 5,

  '@media': {
    '(max-width: 768px)': {
      height: 18,
    },
  },
});

export const mobileButtonSuspense = style({
  height: 40,
  backgroundColor: '#5e5e5e',
  borderRadius: 4,
});

export const copyrightBarSuspense = style({
  height: 12,
  width: 475,
  borderRadius: 4,
  marginTop: 43,
  backgroundColor: '#3e3e3e',
  justifySelf: 'flex-start',
  alignSelf: 'flex-start',
});

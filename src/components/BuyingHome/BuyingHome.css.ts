import { style } from "@vanilla-extract/css";

export const buyingHomeContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: 'calc(100% - 30px)',
  maxWidth: 1244,
  marginTop: 40,
  marginBottom: 40,
  height: 537,

  '@media': {
    '(max-width: 768px)': {
      display: 'none',
    },
  }
});

export const buyingHomeTitle = style({
  fontSize: 20,
  letterSpacing: 0.6,
  marginBottom: 8,
  color: '#2b2b2b',
});

export const buyingHomeContent = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 16,
  height: 500,
  width: '100%',
});

export const buyingHomeContentSection = style({
  width: '50%',
  height: '100%',
  borderRadius: 16,
  border: '1px solid #dfdfdf',
  padding: 24,
  boxSizing: 'border-box',
});

export const buyingHomeSectionTitle = style({
  fontSize: 16,
  marginBottom: 8,
  color: '#2b2b2b',
});

export const buyingHomeImage = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const buyingHomeImageContainer = style({
  width: '100%',
  height: 282,
  overflow: 'hidden',
});

export const buyingHomeSectionSubtitle = style({
  fontSize: 18,
  color: '#2b2b2b',
  marginTop: 16,
});

export const buyingHomeSectionText = style({
  fontSize: 14,
  color: '#2b2b2b',
  marginBottom: 16,
});

export const buyingHomeButton = style({
  width: 190,
  height: 48,
  borderRadius: 45,
  backgroundColor: '#fff',
  border: '1px solid #2b2b2b',
  color: '#2b2b2b',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 16,
  fontWeight: 500,
  cursor: 'pointer',
  
  ':hover': {
    color: '#646464',
    backgroundColor: '#f2f2f2',
    borderColor: '#646464',
    textDecoration: 'underline',
  }
});

export const darkBuyingHomeButton = style({
  width: 158,
  height: 48,
  borderRadius: 45,
  backgroundColor: '#2b2b2b',
  border: '1px solid #2b2b2b',
  color: '#fff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 16,
  fontWeight: 500,
  marginTop: 32,
  cursor: 'pointer',
  
  ':hover': {
    color: '#fff',
    backgroundColor: '#646464',
    borderColor: '#646464',
    textDecoration: 'underline',
  }
});

export const column = style({
  display: 'flex',
  flexDirection: 'column',
});

export const row = style({
  display: 'flex',
  gap: 16,
  marginTop: 16,
});

export const inputItem = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  width: '50%',
});

export const label = style({
  fontSize: 14,
  color: '#2b2b2b',
  marginBottom: 0,
});

export const input = style({
  height: 44,
  borderRadius: 8,
  width: '100%',
  fontSize: 16,
  color: '#2b2b2b',
  border: '1px solid #2b2b2b',
  boxSizing: 'border-box',
  padding: '0px 16px',
});

export const buyingHomeTitleSuspense = style({
  height: 20,
  width: 350,
  backgroundColor: '#e1e1e1',
  marginBottom: 12,
  marginTop: 4,
  borderRadius: 4,
});

export const buyingHomeSectionTitleSuspense = style({
  height: 16,
  width: 150,
  borderRadius: 4,
  backgroundColor: '#e1e1e1',
  marginTop: 2,
  marginBottom: 12,
});


export const buyingHomeImageContainerSuspense = style({
  width: '100%',
  height: 282,
  borderRadius: 4,
  backgroundColor: '#e1e1e1',
});


export const buyingHomeSectionSubtitleSuspense = style({
  height: 18,
  width: 160,
  borderRadius: 4,
  backgroundColor: '#e1e1e1',
  marginTop: 20,
});

export const buyingHomeSectionTextSuspense = style({
  height: 14,
  width: 420,
  borderRadius: 4,
  backgroundColor: '#e1e1e1',
  marginTop: 10,
  marginBottom: 16,
});

export const buyingHomeButtonSuspense = style({
  width: 190,
  height: 48,
  borderRadius: 45,
  backgroundColor: '#e1e1e1',

});

export const labelSuspense = style({
  height: 14,
  marginTop: 5,
  backgroundColor: '#e1e1e1',
  borderRadius: 4,
  width: 75,
});

export const inputSuspense = style({
  width: '100%',
  height: 44,
  borderRadius: 8,
  border: '1px solid #e1e1e1',
  marginTop: 2,
});

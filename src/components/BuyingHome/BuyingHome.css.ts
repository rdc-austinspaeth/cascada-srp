import { style } from "@vanilla-extract/css";

export const buyingHomeContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: 'calc(100% - 30px)',
  maxWidth: 1244,
  marginTop: 40,
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

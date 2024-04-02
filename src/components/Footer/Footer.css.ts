import { style } from "@vanilla-extract/css";

export const footer = style({
  width: '100%',
  background: '#2b2b2b',
  height: 564,
  padding: '56px 0px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
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
});

export const linksBar = style({});

export const mobileBar = style({});

export const copyrightBar = style({});

export const link = style({});

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
});

export const rightContent = style({});

export const socialIcon = style({
  height:24,
  width: 24,
  fill: '#2b2b2b',
});

import { style } from "@vanilla-extract/css";

export const navigationBar = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: 1,
});

export const leftContent = style({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
});

export const rightContent = style({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  height: '100%',
});

export const navContainer = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  marginLeft: 24,
  height: 48,
});

import { style } from "@vanilla-extract/css";

export const panelContainer = style({
  width: '100vw',
  position: 'absolute',
  left: 0,
  top: 172,
  backgroundColor: '#fff',
  display: 'none',
  zIndex: 9,
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10,
  boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.1)',
  borderBottom: '1px solid #cacaca',
  padding: '24px 24px',
  paddingBottom: 32,
});

export const column = style({
  width: '33%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  gap: 14,
});

export const headline = style({
  fontSize: 14,
  fontWeight: 700,
  color: '#2b2b2b',
});

export const link = style({
  fontSize: 14,
  fontWeight: 400,
  color: '#2b2b2b',
  textDecoration: 'none',

  ':hover': {
    textDecoration: 'underline',
  },
});

export const line = style({
  width: '100%',
  height: 1,
  backgroundColor: '#e1e1e1',
});

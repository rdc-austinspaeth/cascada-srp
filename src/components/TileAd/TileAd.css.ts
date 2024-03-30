import { style } from "@vanilla-extract/css";

export const tileListContainer = style({
  height: 440,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  marginBottom: 8,
  width: 'calc(20% - 6px)',

  '@media': {
    '(max-width: 1800px)': {
      width: 'calc(25% - 6px)',
    },
    '(max-width: 1500px)': {
      width: 'calc(33% - 6px)',
    },
    '(max-width: 1150px)': {
      width: 'calc(50% - 4px)',
    },
    '(max-width: 800px)': {
      width: 'calc(100%)',
    },
  },
});

export const tileListAd = style({
  width: '100%',
  height: 420,
  borderRadius: 16,
  backgroundColor: '#ccc',
});

export const label = style({
  width: '100%',
  height: 20,
  color: '#757575',
  fontSize: 12,
  fontWeight: 400,
});

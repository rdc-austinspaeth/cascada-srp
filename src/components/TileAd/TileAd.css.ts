import { globalStyle, style } from "@vanilla-extract/css";

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
  overflow: 'hidden',
  borderRadius: 16,
  border: '1px solid #e1e1e1',
});

globalStyle('.fluid_tile_ad > div > div', {
  height: '100%!important',
  width: '100%!important',
});



globalStyle('.fluid_tile_ad iframe', {
  height: '100%!important',
})

export const label = style({
  width: '100%',
  height: 20,
  color: '#757575',
  fontSize: 12,
  fontWeight: 400,
});

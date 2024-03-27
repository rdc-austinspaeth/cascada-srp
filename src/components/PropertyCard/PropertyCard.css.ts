import { style } from "@vanilla-extract/css";

export const propertyCardContainer = style({
  minWidth: 386,
  maxWidth: 500,
  height: 470,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
});

export const cardContainer = style({
  width: '100%',
  height: 450,
  borderRadius: 16,
  boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.16)',
});

export const label = style({
  width: '100%',
  height: 20,
  color: '#757575',
  fontSize: 12,
  fontWeight: 400,
});

export const imageContainer = style({
  width: '100%',
  height: 300,
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
  bottom: 16,
});

export const cardContentContainer = style({});

export const leftContent = style({});

export const status = style({});

export const statusDot = style({});

export const price = style({});

export const homeFacts = style({});

export const fact = style({});

export const addressLine = style({});

export const locationLine = style({});

export const rightContent = style({});

export const ctaButton = style({});

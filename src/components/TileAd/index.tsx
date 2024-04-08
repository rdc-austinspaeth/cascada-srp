import React from 'react';

import { TileAdProps } from './TileAd.types';
import TileAd from './TileAd';

export const LazyTileAd: React.FunctionComponent<TileAdProps> = (props) => {
  return (
    <TileAd {...props} />
  );
}

export default LazyTileAd;

import React from 'react';

import { Suspense } from '../Suspense';

import { TileAdProps } from './TileAd.types';
import TileAdSuspense from './TileAd.suspense';

const LazyComponent = React.lazy(() => import('./TileAd'));
import TileAd from './TileAd';

export const LazyTileAd: React.FunctionComponent<TileAdProps> = (props) => {
  const { condition } = props || {};

  return (
    <Suspense fallback={<TileAd {...props} />} component={<TileAd {...props } />} condition={condition} />
  );
}

export default LazyTileAd;

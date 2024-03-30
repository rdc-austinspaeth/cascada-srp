import React from 'react';

import { Suspense } from '../Suspense';

import { TileAdProps } from './TileAd.types';
import TileAdSuspense from './TileAd.suspense';

const LazyComponent = React.lazy(() => import('./TileAd'));

export const LazyPropertyCard: React.FunctionComponent<TileAdProps> = (props) => {
  const { condition, key } = props || {};

  return (
    <Suspense key={key} fallback={<TileAdSuspense {...props} />} component={<LazyComponent {...props } />} condition={condition} />
  );
}

export default LazyPropertyCard;

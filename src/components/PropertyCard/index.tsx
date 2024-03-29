import React from 'react';

import { Suspense } from '../Suspense';

import { PropertyCardProps } from './PropertyCard.types';
import PropertyCardSuspense from './PropertyCard.suspense';

const LazyComponent = React.lazy(() => import('./PropertyCard'));

export const LazyPropertyCard: React.FunctionComponent<PropertyCardProps> = (props) => {
  const { condition, key } = props || {};

  return (
    <Suspense key={key} fallback={<PropertyCardSuspense {...props} />} component={<LazyComponent {...props } />} condition={condition} />
  )
  

}

export default LazyPropertyCard;

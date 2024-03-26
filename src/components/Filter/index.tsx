import React from 'react';

import { Suspense } from '../Suspense';

import { FilterProps } from './Filter.types';
import FilterSuspense from './Filter.suspense';

const LazyComponent = React.lazy(() => import('./Filter'));

export const LazyFilter: React.FunctionComponent<FilterProps> = (props) => {
  const { condition } = props || {};

  return (
    <Suspense fallback={<FilterSuspense { ...props } />} component={<LazyComponent { ...props } />} condition={condition} />
  )
}

export default LazyFilter;

import React from 'react';

import { Suspense } from '../Suspense';

import { SearchProps } from './Search.types';
import SearchSuspense from './Search.suspense';

const LazyComponent = React.lazy(() => import('./Search'));

export const LazySearch: React.FunctionComponent<SearchProps> = (props) => {
  const { condition } = props || {};

  return (
    <Suspense fallback={<SearchSuspense />} component={<LazyComponent />} condition={condition} />
  )
}

export default LazySearch;

import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import { Suspense } from '../Suspense';
import { loadStatusSelector } from '../../redux/selectors';

import PaginationSuspense from './Pagination.suspense';

const LazyComponent = React.lazy(() => import('./Pagination'));

export const LazyPagination: React.FunctionComponent = () => {
  const loadStatus = useSelector(loadStatusSelector, shallowEqual);

  return (
    <Suspense fallback={<PaginationSuspense />} component={<LazyComponent />} condition={loadStatus?.properties} />
  )
}

export default LazyPagination;

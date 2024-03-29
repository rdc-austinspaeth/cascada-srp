import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import { Suspense } from '../Suspense';
import { loadStatusSelector } from '../../redux/selectors';

import MetaSuspense from './Meta.suspense';

const LazyComponent = React.lazy(() => import('./Meta'));

export const LazyMeta: React.FunctionComponent = () => {
  const loadStatus = useSelector(loadStatusSelector, shallowEqual);

  return (
    <Suspense fallback={<MetaSuspense />} component={<LazyComponent />} condition={loadStatus?.properties} />
  )
}

export default LazyMeta;

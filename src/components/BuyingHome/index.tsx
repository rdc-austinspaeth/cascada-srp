import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import { Suspense } from '../Suspense';
import { loadStatusSelector } from '../../redux/selectors';

import BuyingHomeSuspense from './BuyingHome.suspense';

const LazyComponent = React.lazy(() => import('./BuyingHome'));

export const LazyBuyingHome: React.FunctionComponent = () => {
  const loadStatus = useSelector(loadStatusSelector, shallowEqual);

  return (
    <Suspense fallback={<BuyingHomeSuspense />} component={<LazyComponent />} condition={loadStatus?.properties} />
  )
}

export default LazyBuyingHome;

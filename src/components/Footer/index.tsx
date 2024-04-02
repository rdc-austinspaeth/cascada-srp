import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import { Suspense } from '../Suspense';
import { loadStatusSelector } from '../../redux/selectors';

import FooterSuspense from './Footer.suspense';

const LazyComponent = React.lazy(() => import('./Footer'));

export const LazyFooter: React.FunctionComponent = () => {
  const loadStatus = useSelector(loadStatusSelector, shallowEqual);

  return (
    <Suspense fallback={<FooterSuspense />} component={<LazyComponent />} condition={loadStatus?.properties} />
  )
}

export default LazyFooter;

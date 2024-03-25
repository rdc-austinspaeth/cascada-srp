import React from 'react';

import { Suspense } from '../Suspense';

import { NavigationLinkProps } from './NavigationLink.types';
import NavigationLinkSuspense from './NavigationLink.suspense';

const LazyComponent = React.lazy(() => import('./NavigationLink'));

export const LazyNavigationLink: React.FunctionComponent<NavigationLinkProps> = (props) => {
  const { condition } = props || {};

  return (
    <Suspense fallback={<NavigationLinkSuspense {...props} />} component={<LazyComponent {...props } />} condition={condition} />
  )
  

}

export default LazyNavigationLink;

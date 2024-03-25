import React from 'react';

import { Suspense } from '../Suspense';

import { LoginProps } from './Login.types';
import LoginSuspense from './Login.suspense';

const LazyComponent = React.lazy(() => import('./Login'));

export const LazyNavigationLink: React.FunctionComponent<LoginProps> = (props) => {
  const { condition } = props || {};

  return (
    <Suspense fallback={<LoginSuspense />} component={<LazyComponent />} condition={condition} />
  )
}

export default LazyNavigationLink;

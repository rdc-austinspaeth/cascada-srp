import React from 'react';

import { Suspense } from '../Suspense';

import { HeaderLinksProps } from './HeaderLinks.types';
import HeaderLinksSuspense from './HeaderLinks.suspense';

const LazyComponent = React.lazy(() => import('./HeaderLinks'));

export const LazyHeaderLinks: React.FunctionComponent<HeaderLinksProps> = (props) => {
  const { condition } = props || {};

  return (
    <Suspense fallback={<HeaderLinksSuspense {...props} />} component={<LazyComponent {...props } />} condition={condition} />
  );
}

export default LazyHeaderLinks;

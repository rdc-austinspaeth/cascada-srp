import React from 'react';

import { Suspense } from '../Suspense';

import { ToggleProps } from './Toggle.types';
import ToggleSuspense from './Toggle.suspense';

const LazyComponent = React.lazy(() => import('./Toggle'));

export const LazyToggle: React.FunctionComponent<ToggleProps> = (props) => {
  const { condition } = props || {};

  return (
    <Suspense fallback={<ToggleSuspense />} component={<LazyComponent { ...props } />} condition={condition} />
  )
}

export default LazyToggle;

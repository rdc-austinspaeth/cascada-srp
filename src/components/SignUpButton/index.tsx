import React from 'react';

import { Suspense } from '../Suspense';

import { SignUpButtonProps } from './SignUpButton.types';
import SignUpButtonSuspense from './SignUpButton.suspense';

const LazyComponent = React.lazy(() => import('./SignUpButton'));

export const LazySignUpButton: React.FunctionComponent<SignUpButtonProps> = (props) => {
  const { condition } = props || {};

  return (
    <Suspense fallback={<SignUpButtonSuspense />} component={<LazyComponent />} condition={condition} />
  )
}

export default LazySignUpButton;

import React from 'react';

import { toggleContainerSuspense, toggleSelectedSuspense, toggleSelectedTextSuspense, toggleUnselectedSuspense, toggleUnselectedTextSuspense } from './Toggle.css';

export const ToggleSuspense: React.FunctionComponent = () => {
  return (
    <div className={toggleContainerSuspense}>
      <div className={toggleSelectedSuspense}>
        <div className={toggleSelectedTextSuspense} />
      </div>
      <div className={toggleUnselectedSuspense}>
        <div className={toggleUnselectedTextSuspense} />
      </div>
    </div>
  )
}

export default ToggleSuspense;

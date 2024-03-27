import React from 'react';

import { HomeCountSuspense, pageTitleSuspense, secondaryContainer, sortSuspense } from './Meta.css';

export const MetaSuspense: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <div className={pageTitleSuspense} />
      <div className={secondaryContainer}>
        <div className={HomeCountSuspense} />
        <div className={sortSuspense} />
      </div>
    </React.Fragment>
  )
}

export default MetaSuspense;

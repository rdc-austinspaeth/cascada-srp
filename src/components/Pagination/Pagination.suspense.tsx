import React from 'react';

import { directionSuspense, dotsSuspense, pageLinkSuspense, pageLinks, pagePositionSuspense, paginationBar, propertiesFoundSuspense, searchTermSuspense } from './Pagination.css';

export const PaginationSuspense: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <div className={paginationBar}>
        <div style={{ width: 99 }} className={directionSuspense} />
        <div className={pagePositionSuspense} />
        <div className={pageLinks}>
          <div className={pageLinkSuspense} />
          <div className={pageLinkSuspense} />
          <div className={pageLinkSuspense} />
          <div className={pageLinkSuspense} />
          <div className={pageLinkSuspense} />
          <div className={dotsSuspense}>···</div>
          <div className={pageLinkSuspense} />
        </div>
        <div style={{ width: 69.06 }} className={directionSuspense} />
      </div>
      <div className={propertiesFoundSuspense} />
      <div className={searchTermSuspense} />
    </React.Fragment>
  )
}

export default PaginationSuspense;

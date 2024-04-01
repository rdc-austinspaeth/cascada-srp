import React from 'react';

import { directionSuspense, dotsSuspense, pageLinkSuspense, pageLinks, paginationBar } from './Pagination.css';

export const PaginationSuspense: React.FunctionComponent = () => {
  return (
    <div className={paginationBar}>
      <div style={{ width: 99 }} className={directionSuspense} />
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
  )
}

export default PaginationSuspense;

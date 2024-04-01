import React from 'react';

import { directionIcon, directionLink, directionText, dots, pageLink, pageLinks, paginationBar } from "./Pagination.css";

export const Pagination: React.FunctionComponent = () => {
  return (
    <div className={paginationBar}>
      <a style={{ cursor: 'not-allowed' }} className={directionLink} href='#'>
        <svg className={directionIcon} style={{ fill: '#958a7f' }} viewBox="0 0 24 24"><path d="M11.707 6.707a1 1 0 0 0-1.414-1.414l1.414 1.414ZM5 12l-.707-.707a1 1 0 0 0 0 1.414L5 12Zm5.293 6.707a1 1 0 0 0 1.414-1.414l-1.414 1.414ZM19 13a1 1 0 1 0 0-2v2Zm-8.707-7.707-6 6 1.414 1.414 6-6-1.414-1.414Zm-6 7.414 6 6 1.414-1.414-6-6-1.414 1.414ZM5 13h14v-2H5v2Z"></path></svg>
        <span style={{ color: '#958a7f' }} className={directionText}>Previous</span>
      </a>
      <div className={pageLinks}>
        <a style={{ color: '#fff', backgroundColor: '#2b2b2b' }} href='#' className={pageLink}>1</a>
        <a href='#' className={pageLink}>2</a>
        <a href='#' className={pageLink}>3</a>
        <a href='#' className={pageLink}>4</a>
        <a href='#' className={pageLink}>5</a>
        <div className={dots}>···</div>
        <a href='#' className={pageLink}>206</a>
      </div>
      <a className={directionLink} href='#'>
        <span className={directionText}>Next</span>
        <svg className={directionIcon} style={{ transform: 'rotate(180deg)' }} viewBox="0 0 24 24"><path d="M11.707 6.707a1 1 0 0 0-1.414-1.414l1.414 1.414ZM5 12l-.707-.707a1 1 0 0 0 0 1.414L5 12Zm5.293 6.707a1 1 0 0 0 1.414-1.414l-1.414 1.414ZM19 13a1 1 0 1 0 0-2v2Zm-8.707-7.707-6 6 1.414 1.414 6-6-1.414-1.414Zm-6 7.414 6 6 1.414-1.414-6-6-1.414 1.414ZM5 13h14v-2H5v2Z"></path></svg>
      </a>
    </div>
  )
}

export default Pagination;

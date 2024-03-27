import React from 'react';

import { chevronIcon, heavy, homeCount, pageTitle, secondaryContainer, sort } from "./Meta.css";

export const Meta: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <h1 className={pageTitle}>San Francisco, CA real estate & homes for sale</h1>
      <div className={secondaryContainer}>
        <div className={homeCount}>
          1,621 Homes
        </div>
        <div className={sort}>
          Sort by <span className={heavy}>Relevant listings</span>
          <svg className={chevronIcon} viewBox="0 0 24 24"><path d="M17.293 8.293a1 1 0 1 1 1.414 1.414l-1.414-1.414ZM12 15l.707.707a1 1 0 0 1-1.414 0L12 15ZM5.293 9.707a1 1 0 0 1 1.414-1.414L5.293 9.707Zm13.414 0-6 6-1.414-1.414 6-6 1.414 1.414Zm-7.414 6-6-6 1.414-1.414 6 6-1.414 1.414Z"></path></svg>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Meta;

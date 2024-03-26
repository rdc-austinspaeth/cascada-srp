import React from 'react';

import { FilterProps } from './Filter.types';
import { chevronIcon, filterContainer } from './Filter.css';

export const Filter: React.FunctionComponent<FilterProps> = (props) => {
  const { label, width, button } = props || {};

  return (
    <button style={{ width: width, borderRadius: button ? 45 : 8, justifyContent: button ? 'center' : 'space-between', marginLeft: button ? 8 : 4.8, paddingTop: button ? 0 : 1 }} className={filterContainer}>
      { label }
      { !button && <svg className={chevronIcon} viewBox="0 0 24 24"><path d="M17.293 8.293a1 1 0 1 1 1.414 1.414l-1.414-1.414ZM12 15l.707.707a1 1 0 0 1-1.414 0L12 15ZM5.293 9.707a1 1 0 0 1 1.414-1.414L5.293 9.707Zm13.414 0-6 6-1.414-1.414 6-6 1.414 1.414Zm-7.414 6-6-6 1.414-1.414 6 6-1.414 1.414Z"></path></svg> }
    </button>
  )
}

export default Filter;

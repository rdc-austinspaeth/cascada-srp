import React from 'react';
import { shallowEqual, useSelector } from "react-redux";

import { loadStatusSelector } from "../../redux/selectors";
import Search from '../Search';

import { filterBar, leftContent, rightContent } from './FilterBar.css';


export const FilterBar: React.FunctionComponent = () => {
  const loadStatus = useSelector(loadStatusSelector, shallowEqual);

  return (
    <div className={filterBar}>
      <div className={leftContent}>
        <Search condition={loadStatus} />
      </div>
      <div className={rightContent}>
       Right
      </div>
    </div>
  )
}

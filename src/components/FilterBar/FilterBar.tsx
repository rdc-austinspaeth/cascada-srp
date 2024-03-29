import React from 'react';
import { shallowEqual, useSelector } from "react-redux";

import { loadStatusSelector } from "../../redux/selectors";
import Search from '../Search';
import LazyFilter from '../Filter';
import Toggle from '../Toggle';

import { filterBar, leftContent, rightContent } from './FilterBar.css';

export const FilterBar: React.FunctionComponent = () => {
  const loadStatus = useSelector(loadStatusSelector, shallowEqual);

  return (
    <div className={filterBar}>
      <div className={leftContent}>
        <Search condition={loadStatus?.properties} />
        <LazyFilter condition={loadStatus?.properties} label='Price' width={94.15} />
        <LazyFilter condition={loadStatus?.properties} label='Property type' width={162.32} />
        <LazyFilter condition={loadStatus?.properties} label='More' width={93.77} />
        <LazyFilter button={true} condition={loadStatus?.properties} label='Save search' width={142.24} />
      </div>
      <div className={rightContent}>
        <Toggle condition={loadStatus?.properties} />
      </div>
    </div>
  )
}

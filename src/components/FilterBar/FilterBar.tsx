import React from 'react';
import { shallowEqual, useSelector } from "react-redux";

import { loadStatusSelector } from "../../redux/selectors";
import Search from '../Search';
import LazyFilter from '../Filter';
import Toggle from '../Toggle';

import { filterBar, leftContent, rightContent, mobileContent } from './FilterBar.css';

export const FilterBar: React.FunctionComponent = () => {
  const loadStatus = useSelector(loadStatusSelector, shallowEqual);

  return (
    <div className={filterBar}>
      <div className={leftContent}>
        <Search condition={loadStatus?.properties} />
        <LazyFilter condition={loadStatus?.properties} label='Price' width={94.15} />
        <LazyFilter hideMobile={true} condition={loadStatus?.properties} label='Property type' width={162.32} />
        <LazyFilter hideTablet={true} condition={loadStatus?.properties} label='Rooms' width={107.09} />
        <LazyFilter hideTablet={true} condition={loadStatus?.properties} label='Listing status' width={159.09} />
        <LazyFilter condition={loadStatus?.properties} label='More' width={93.77} />
        <LazyFilter button={true} condition={loadStatus?.properties} label='Save search' width={142.24} />
      </div>
      <div className={rightContent}>
        <Toggle condition={loadStatus?.properties} />
      </div>
      <div className={mobileContent}>
        <Search condition={loadStatus?.properties} />
        <LazyFilter condition={loadStatus?.properties} label='Filter' width={95.06} />
      </div>
    </div>
  )
}

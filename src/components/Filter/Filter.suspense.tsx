import React from 'react';

import { FilterProps } from './Filter.types';
import { conditionalMobileHide, conditionalTabletHide, filterContainerSuspense, filterTextSuspense } from './Filter.css';

export const FilterSuspense: React.FunctionComponent<FilterProps> = (props) => {
  const { width, button, hideMobile, hideTablet } = props || {};

  return (
    <div className={`${filterContainerSuspense} ${hideMobile ? conditionalMobileHide : '' } ${hideTablet ? conditionalTabletHide : '' }`} style={{ width: width, borderRadius: button ? 45 : 8, marginLeft: button ? 8 : 4.8 }}>
      <div className={filterTextSuspense} />
    </div>
  )
}

export default FilterSuspense;

import React from 'react';
import { shallowEqual, useSelector } from "react-redux";

import { loadStatusSelector } from '../../redux/selectors';
import PropertyCard from '../PropertyCard';

export const Properties: React.FunctionComponent = () => {
  const loadStatus = useSelector(loadStatusSelector, shallowEqual);

  return (
    <div>
      <PropertyCard condition={true} />
    </div>
  )
}

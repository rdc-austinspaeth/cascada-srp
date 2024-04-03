import React from 'react';
import { shallowEqual, useSelector } from "react-redux";

import { loadStatusSelector, propertiesSelector } from '../../redux/selectors';
import PropertyCard from '../PropertyCard';
import TileAd from '../TileAd';
import { InlineAd } from '../InlineAd';
import { ads } from '../../constants/ads';

export const Properties: React.FunctionComponent = () => {
  const loadStatus = useSelector(loadStatusSelector, shallowEqual);
  const properties = useSelector(propertiesSelector, shallowEqual);

  let initialArray = new Array(42).fill(null);
  let copiedProperties = [...properties];

  ads.forEach((ad: any) => copiedProperties.splice(ad.index, 0, ad));
  ads.forEach((ad: any) => initialArray.splice(ad.index, 0, ad));

  const renderedProperties = loadStatus?.properties
    ? copiedProperties
    : initialArray;

  return (
    <React.Fragment>
      {renderedProperties.map((property: any, index: number) => (
        property?.isAd
          ? property.adType === 'inline' ? <InlineAd  key={property?.id} { ...property } /> : <TileAd key={property?.id} condition={loadStatus?.properties} {...property } />
          : <PropertyCard key={property?.id || `property_${index}`} index={index} property={property} condition={loadStatus?.properties} />
      ))}
    </React.Fragment>
  )
}

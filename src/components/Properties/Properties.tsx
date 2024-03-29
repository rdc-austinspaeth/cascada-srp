import React from 'react';
import { shallowEqual, useSelector } from "react-redux";

import { loadStatusSelector, propertiesSelector } from '../../redux/selectors';
import PropertyCard from '../PropertyCard';
import { TileAd } from '../TileAd';
import { InlineAd } from '../InlineAd';

export const Properties: React.FunctionComponent = () => {
  const loadStatus = useSelector(loadStatusSelector, shallowEqual);
  const properties = useSelector(propertiesSelector, shallowEqual);

  const initialArray = new Array(42).fill(null);
  let copiedProperties = [...properties];

  const ads = [
    {
      isAd: true,
      id: 'ad_container_TILELIST1',
      index: 3,
    },
    {
      isAd: true,
      id: 'ad_container_TILELIST2',
      index: 9,
    },
    {
      isAd: true,
      id: 'ad_container_INLINELIST1',
      adType: 'inline',
      index: 12,
    },
    {
      isAd: true,
      id: 'ad_container_TILELIST3',
      index: 16,
    },
    {
      isAd: true,
      id: 'ad_container_TILELIST4',
      index: 22,
    },
    {
      isAd: true,
      id: 'ad_container_INLINELIST2',
      adType: 'inline',
      index: 25,
    },
    {
      isAd: true,
      id: 'ad_container_TILELIST5',
      index: 29,
    },
    {
      isAd: true,
      id: 'ad_container_TILELIST6',
      index: 35,
    },
    {
      isAd: true,
      id: 'ad_container_INLINELIST3',
      adType: 'inline',
      index: 38,
    },
    {
      isAd: true,
      id: 'ad_container_TILELIST7',
      index: 42,
    },
    {
      isAd: true,
      id: 'ad_container_TILELIST8',
      index: 48,
    },
    {
      isAd: true,
      id: 'ad_container_INLINELIST4',
      adType: 'inline',
      index: 51,
    },
    {
      isAd: true,
      id: 'ad_container_TILELIST9',
      index: 54,
    },
  ]

  const propertiesWithAds = ads.forEach((ad: any) => copiedProperties.splice(ad.index, 0, ad));

  const renderedProperties = loadStatus?.properties
    ? copiedProperties
    : initialArray;

  return (
    <React.Fragment>
      {renderedProperties.map((property: any, index: number) => (
        property?.isAd
          ? property.adType === 'inline' ? <InlineAd { ...property } /> : <TileAd {...property } />
          : <PropertyCard key={property?.id || `property_${index}`} property={property} condition={loadStatus?.properties} />
      ))}
    </React.Fragment>
  )
}

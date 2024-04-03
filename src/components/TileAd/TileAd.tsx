import React from "react";

import { TileAdProps } from "./TileAd.types";
import { label, tileListAd } from "./TileAd.css";
import { addressLineSuspense, cardContentContainer, imageContainerSuspense, leftContent, locationLineSuspense, priceSuspense, propertyCardSuspense } from "../PropertyCard/PropertyCard.css";

export const TileAd: React.FunctionComponent<TileAdProps> = (props) => {
  const { id } = props || {};

  return (
    <div className={propertyCardSuspense}>
      <div className={label}>Advertisement</div>
      <div style={{ height: '100%' }} id={`ad-unit-${id}`} className={tileListAd}>
        <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} className='ads-srp-tile'>
          <div className='ads ' id={`div-gpt-ad-${id}`} />
        </div>
      </div>
    </div>
  )
}

export default TileAd;

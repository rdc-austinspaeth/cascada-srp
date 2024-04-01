import React from "react";

import { TileAdProps } from "./TileAd.types";
import { label, tileListAd } from "./TileAd.css";
import { addressLineSuspense, cardContentContainer, imageContainerSuspense, leftContent, locationLineSuspense, priceSuspense, propertyCardSuspense } from "../PropertyCard/PropertyCard.css";

export const TileAd: React.FunctionComponent<TileAdProps> = (props) => {
  const { id } = props || {};

  return (
    <div className={propertyCardSuspense}>
      <div className={label}>Advertisement</div>
      <div id={id} className={tileListAd}>
        <div className={imageContainerSuspense} />
        <div className={cardContentContainer}>
          <div className={leftContent}>
            <div style={{ width: 300 }} className={priceSuspense} />
            <div className={addressLineSuspense} />
            <div className={locationLineSuspense} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TileAd;

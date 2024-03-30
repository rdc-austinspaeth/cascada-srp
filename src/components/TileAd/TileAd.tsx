import React from "react";

import { TileAdProps } from "./TileAd.types";
import { label, tileListAd } from "./TileAd.css";
import { cardContentContainer, imageContainerSuspense, propertyCardSuspense } from "../PropertyCard/PropertyCard.css";

export const TileAd: React.FunctionComponent<TileAdProps> = (props) => {
  const { id } = props || {};

  return (
    <div className={propertyCardSuspense}>
      <div className={label}>Advertisement</div>
      <div id={id} className={tileListAd}>
        <div className={imageContainerSuspense} />
        <div className={cardContentContainer} />
      </div>
    </div>
  )
}

export default TileAd;

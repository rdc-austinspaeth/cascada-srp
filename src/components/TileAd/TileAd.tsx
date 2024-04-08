import React from "react";
import { shallowEqual, useSelector } from "react-redux";

import { labelSuspense, propertyCardSuspense } from "../PropertyCard/PropertyCard.css";
import { loadStatusSelector } from "../../redux/selectors";

import { TileAdProps } from "./TileAd.types";
import { label, tileListAd } from "./TileAd.css";

export const TileAd: React.FunctionComponent<TileAdProps> = (props) => {
  const { id } = props || {};

  const loadStatus = useSelector(loadStatusSelector, shallowEqual);

  return (
    <div className={propertyCardSuspense}>
      { loadStatus.properties ? <div className={label}>Advertisement</div> : <div style={{ marginTop: 3, width: 86 }} className={labelSuspense} /> }
      <div style={{ height: '100%' }} id={`ad-unit-${id}`} className={tileListAd}>
        <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} className='ads-srp-tile'>
          <div className='ads ' id={`div-gpt-ad-${id}`} />
        </div>
      </div>
    </div>
  )
}

export default React.memo(TileAd);

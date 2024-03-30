import { addressLineSuspense, cardContainerSuspense, cardContentContainer, ctaButtonSuspense, factSuspense, homeFacts, imageContainerSuspense, labelSuspense, leftContent, locationLineSuspense, priceSuspense, propertyCardSuspense, rightContent, status, statusDotSuspense, statusSuspense } from "../PropertyCard/PropertyCard.css";

import { TileAdProps } from "./TileAd.types";

export const TileAdSuspense: React.FunctionComponent<TileAdProps> = () => {
  return (
    <div className={propertyCardSuspense}>
      <div className={labelSuspense} />
      <div className={cardContainerSuspense}>
        <div className={imageContainerSuspense} />
        <div className={cardContentContainer}>
          <div className={leftContent}>
            <div className={status}>
              <div className={statusDotSuspense} />
              <div className={statusSuspense} />
            </div>
            <div className={priceSuspense} />
            <div className={homeFacts}>
              <div className={factSuspense} />
              <div className={factSuspense} />
              <div className={factSuspense} />
              <div className={factSuspense} />
            </div>
            <div className={addressLineSuspense} />
            <div className={locationLineSuspense} />
          </div>
          <div className={rightContent}>
            <button className={ctaButtonSuspense} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TileAdSuspense;

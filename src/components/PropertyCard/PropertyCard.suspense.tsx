import { addressLineSuspense, cardContainer, cardContainerSuspense, cardContentContainer, ctaButtonSuspense, factSuspense, homeFacts, imageContainerSuspense, labelSuspense, leftContent, locationLineSuspense, priceSuspense, propertyCardSuspense, rightContent, status, statusDotSuspense, statusSuspense } from "./PropertyCard.css";
import { PropertyCardProps } from "./PropertyCard.types";

export const PropertyCardSuspense: React.FunctionComponent<PropertyCardProps> = (props) => {
  const { } = props || {};

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

export default PropertyCardSuspense;

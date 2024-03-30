import { propertyTypes } from "../../constants/propertyTypes";
import { imageOptimization } from "../../utils/imageOptimization";

import { addressLine, cardContainer, heart, cardContentContainer, ctaButton, fact, homeFacts, image, imageContainer, label, leftContent, locationLine, loveIt, price, propertyCardContainer, rightContent, status, statusDot, strongFact } from "./PropertyCard.css";
import { PropertyCardProps } from "./PropertyCard.types";

export const PropertyCard: React.FunctionComponent<PropertyCardProps> = (props) => {
  const { property, index } = props || {};
  const { location, list_price, photos, branding, description } = property || {};
  const { type, beds, baths_consolidated, sqft, lot_sqft } = description || {};
  const { address } = location || {};
  const { line, state_code, postal_code, city } = address || {};

  return (
    <div className={propertyCardContainer}>
      <div className={label}>Brokered by { branding?.[0]?.name }</div>
      <div className={cardContainer}>
        <div className={imageContainer}>
          <img fetchPriority={ index === 0 ? 'high' : 'auto' } src={ imageOptimization(photos?.[0]?.href) } className={image} />
          <button className={loveIt}>
          <svg className={heart} viewBox="0 0 24 24"><path fillRule="evenodd" d="M7.556 4c1.093 0 2.113.318 2.973.867A5.598 5.598 0 0 1 12 6.235a5.598 5.598 0 0 1 1.47-1.368A5.506 5.506 0 0 1 16.445 4C19.513 4 22 6.502 22 9.588c0 4.471-3.629 8.162-8.427 11.393-.951.64-2.195.64-3.146 0C5.629 17.751 2 14.06 2 9.588 2 6.502 4.487 4 7.556 4Zm2.842 3.432L12 9.577l1.602-2.145A3.536 3.536 0 0 1 16.444 6C18.397 6 20 7.595 20 9.588c0 3.347-2.756 6.51-7.544 9.734a.816.816 0 0 1-.912 0C6.756 16.098 4 12.935 4 9.588 4 7.595 5.603 6 7.556 6c1.157 0 2.188.556 2.842 1.432Z"></path></svg>
          </button>
        </div>
        <div className={cardContentContainer}>
          <div className={leftContent}>
            <div className={status}>
              <div className={statusDot} />
              { propertyTypes?.[type] } for sale
            </div>
            <div className={price}>${ list_price?.toLocaleString() }</div>
            <div className={homeFacts}>
              { beds && <div className={fact}><span className={strongFact}>{ beds }</span> bed</div> }
              { baths_consolidated && <div className={fact}><span className={strongFact}>{ baths_consolidated }</span> bath</div> }
              { sqft && <div className={fact}><span className={strongFact}>{ sqft?.toLocaleString() }</span> sqft</div> }
              { lot_sqft && <div className={fact}><span className={strongFact}>{ lot_sqft?.toLocaleString() }</span> acre lot</div> }
            </div>
            <div className={addressLine}>{ line }</div>
            <div className={locationLine}>{ city }, { state_code } { postal_code }</div>
          </div>
          <div className={rightContent}>
            <button className={ctaButton}>Email Agent</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyCard;

import { addressLine, cardContainer, cardContentContainer, ctaButton, fact, homeFacts, image, imageContainer, label, leftContent, locationLine, loveIt, price, propertyCardContainer, rightContent, status, statusDot } from "./PropertyCard.css";
import { PropertyCardProps } from "./PropertyCard.types";

export const PropertyCard: React.FunctionComponent<PropertyCardProps> = (props) => {
  const {  } = props || {};

  return (
    <div className={propertyCardContainer}>
      <div className={label}>Brokered by Williams & Williams Real Estate Auctions</div>
      <div className={cardContainer}>
        <div className={imageContainer}>
          <img src='https://ap.rdcpix.com/e5cc9e1cc7182ddfc8dce87e3ec417d9l-m4027044374od-w480_h360_x2.jpg' className={image} />
          <button className={loveIt}>
          <svg viewBox="0 0 24 24"><path d="M7.556 4c1.093 0 2.113.318 2.973.867A5.598 5.598 0 0 1 12 6.235a5.598 5.598 0 0 1 1.47-1.368A5.506 5.506 0 0 1 16.445 4C19.513 4 22 6.502 22 9.588c0 4.471-3.629 8.162-8.427 11.393-.951.64-2.195.64-3.146 0C5.629 17.751 2 14.06 2 9.588 2 6.502 4.487 4 7.556 4Zm2.842 3.432L12 9.577l1.602-2.145A3.536 3.536 0 0 1 16.444 6C18.397 6 20 7.595 20 9.588c0 3.347-2.756 6.51-7.544 9.734a.816.816 0 0 1-.912 0C6.756 16.098 4 12.935 4 9.588 4 7.595 5.603 6 7.556 6c1.157 0 2.188.556 2.842 1.432Z"></path></svg>
          </button>
        </div>
        <div className={cardContentContainer}>
          <div className={leftContent}>
            <div className={status}>
              <div className={statusDot} />
              House for sale
            </div>
            <div className={price}>$107,500</div>
            <div className={homeFacts}>
              <div className={fact}>3 bed</div>
              <div className={fact}>1 bath</div>
              <div className={addressLine}>169 Raymond Ave</div>
              <div className={locationLine}>San Francisco, CA 94134</div>
            </div>
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

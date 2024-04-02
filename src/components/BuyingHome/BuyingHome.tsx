import React from 'react';
import { buyingHomeContainer, buyingHomeContent, buyingHomeContentSection, buyingHomeImage, buyingHomeImageContainer, buyingHomeSectionSubtitle, buyingHomeSectionText, buyingHomeSectionTitle, buyingHomeTitle } from './BuyingHome.css';

export const BuyingHome: React.FunctionComponent = () => {
  return (
    <div className={buyingHomeContainer}>
      <h2 className={buyingHomeTitle}>How to buy a home in South Carolina</h2>
      <div className={buyingHomeContent}>
        <section className={buyingHomeContentSection}>
          <h3 className={buyingHomeSectionTitle}>Be prepared to buy</h3>
          <div className={buyingHomeImageContainer}>
            <img className={buyingHomeImage} alt="How to buy" src="https://static.rdc.moveaws.com/images/search/widget-how-to-buy.jpg" />
          </div>
          <h4 className={buyingHomeSectionSubtitle}>Get pre-approved</h4>
          <div className={buyingHomeSectionText}>A pre-approval letter from a lender makes your offer stronger.</div>
        </section>
        <section className={buyingHomeContentSection}>

        </section>
      </div>
    </div>
  )
}

export default BuyingHome;

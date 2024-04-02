import React from 'react';
import { buyingHomeButton, buyingHomeContainer, buyingHomeContent, buyingHomeContentSection, buyingHomeImage, buyingHomeImageContainer, buyingHomeSectionSubtitle, buyingHomeSectionText, buyingHomeSectionTitle, buyingHomeTitle, column, darkBuyingHomeButton, input, inputItem, label, row } from './BuyingHome.css';

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
          <button className={buyingHomeButton}>Get pre-approved</button>
        </section>
        <section className={buyingHomeContentSection}>
          <h3 className={buyingHomeSectionTitle}>Moving cost calculator</h3>
          <div className={column}>
            <div className={row}>
              <div className={inputItem}>
                <label className={label} htmlFor='from'>Move from</label>
                <input className={input} type='text' id='from' name='from' placeholder='ZIP code' />
              </div>
              <div className={inputItem}>
                <label className={label} htmlFor='to'>Move to</label>
                <input className={input} type='text' id='to' name='to' placeholder='ZIP code' />
              </div>
            </div>
            <div className={row}>
              <div className={inputItem}>
                <label className={label} htmlFor='size'>Size of move</label>
                <input className={input} type='text' id='size' name='size' placeholder='2-3 beds' />
              </div>
              <div className={inputItem}>
                <label className={label} htmlFor='packing'>Packing</label>
                <input className={input} type='text' id='packing' name='packing' placeholder='None' />
              </div>
            </div>
            <button className={darkBuyingHomeButton}>Get estimates</button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default BuyingHome;

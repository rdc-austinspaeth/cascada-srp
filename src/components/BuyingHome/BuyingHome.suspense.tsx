import React from 'react';
import { buyingHomeButtonSuspense, buyingHomeContainer, buyingHomeContent, buyingHomeContentSection, buyingHomeImageContainerSuspense, buyingHomeSectionSubtitleSuspense, buyingHomeSectionTextSuspense, buyingHomeSectionTitleSuspense, buyingHomeTitleSuspense, column, inputItem, inputSuspense, labelSuspense, row } from './BuyingHome.css';

export const BuyingHomeSuspense: React.FunctionComponent = () => {
  return (
    <div className={buyingHomeContainer}>
      <div className={buyingHomeTitleSuspense} />
      <div className={buyingHomeContent}>
        <section className={buyingHomeContentSection}>
          <div className={buyingHomeSectionTitleSuspense} />
          <div className={buyingHomeImageContainerSuspense} />
          <div className={buyingHomeSectionSubtitleSuspense} />
          <div className={buyingHomeSectionTextSuspense} />
          <div className={buyingHomeButtonSuspense} />
        </section>
        <section className={buyingHomeContentSection}>
          <div className={buyingHomeSectionTitleSuspense} />
          <div className={column}>
            <div className={row}>
              <div className={inputItem}>
                <div className={labelSuspense} />
                <div className={inputSuspense} />
              </div>
              <div className={inputItem}>
                <div className={labelSuspense} />
                <div className={inputSuspense} />
              </div>
            </div>
            <div className={row}>
              <div className={inputItem}>
                <div className={labelSuspense} />
                <div className={inputSuspense} />
              </div>
              <div className={inputItem}>
                <div className={labelSuspense} />
                <div className={inputSuspense} />
              </div>
            </div>
            <div style={{ width: 158, marginTop: 32 }} className={buyingHomeButtonSuspense} />
          </div>
        </section>
      </div>
    </div>
  )
}

export default BuyingHomeSuspense;

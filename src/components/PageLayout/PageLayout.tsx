import React from "react";

import { PageLayoutProps } from "./PageLayout.types";
import { bannerAdContainer, filterBarContainer, metaContainer, navBarContainer, pageLayoutContainer, propertiesContainer, filterBarStickyBorder, paginationContainer, footerAdContainer, buyingHomeContainer, footerContainer } from "./PageLayout.css";

export const PageLayout: React.FunctionComponent<PageLayoutProps> = (props) => {
  const { BannerAd, NavigationBar, FilterBar, Meta, Properties, Pagination, FooterAd, BuyingHome, Footer } = props || {};

  return (
    <div className={pageLayoutContainer}>
      <div className={bannerAdContainer}>
        { <BannerAd /> }
      </div>
      <div className={navBarContainer}>
        { <NavigationBar /> }
      </div>
      <div className={filterBarStickyBorder} />
      <div className={filterBarContainer}>
        { <FilterBar /> }
      </div>
      <div className={metaContainer}>
        { <Meta /> }
      </div>
      <div className={propertiesContainer}>
        { <Properties /> }
      </div>
      <div className={paginationContainer}>
        { <Pagination /> }
      </div>
      <div className={footerAdContainer}>
        { <FooterAd /> }
      </div>
      <div className={buyingHomeContainer}>
        { <BuyingHome /> }
      </div>
      <div className={footerContainer}>
        { <Footer /> }
      </div>
    </div>
  )
}

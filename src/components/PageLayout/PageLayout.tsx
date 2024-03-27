import React from "react";

import { PageLayoutProps } from "./PageLayout.types";
import { bannerAdContainer, filterBarContainer, metaContainer, navBarContainer, pageLayoutContainer, propertiesContainer } from "./PageLayout.css";

export const PageLayout: React.FunctionComponent<PageLayoutProps> = (props) => {
  const { BannerAd, NavigationBar, FilterBar, Meta, Properties } = props || {};

  return (
    <div className={pageLayoutContainer}>
      <div className={bannerAdContainer}>
        { <BannerAd /> }
      </div>
      <div className={navBarContainer}>
        { <NavigationBar /> }
      </div>
      <div className={filterBarContainer}>
        { <FilterBar /> }
      </div>
      <div className={metaContainer}>
        { <Meta /> }
      </div>
      <div className={propertiesContainer}>
        { <Properties /> }
      </div>
    </div>
  )
}

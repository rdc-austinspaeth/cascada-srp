import React from "react";

import { PageLayoutProps } from "./PageLayout.types";
import { bannerAdContainer, filterBarContainer, navBarContainer, pageLayoutContainer } from "./PageLayout.css";

export const PageLayout: React.FunctionComponent<PageLayoutProps> = (props) => {
  const { BannerAd, NavigationBar, FilterBar } = props || {};

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
    </div>
  )
}

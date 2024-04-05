import React from "react"
import { footerAdPlacholder } from "./FooterAd.css"
import { SrpAFSAd } from '@moveinc/rdc-ads-media';

export const FooterAd: React.FunctionComponent = () => {
    const page = 1;
  return (
    <React.Fragment>
      <div className={footerAdPlacholder}>
        <div id="div-gpt-ad-SRPFOOT18LIST"></div>
      </div>
      <div>
        <SrpAFSAd
          isListView={true}
          currentPage={page}
          queryVariables={null}
          containerId="afscontainer1"
        />
      </div>
    </React.Fragment>
  );
}

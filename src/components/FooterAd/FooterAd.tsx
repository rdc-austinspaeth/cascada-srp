import React from "react"
import { footerAdPlacholder } from "./FooterAd.css"

export const FooterAd: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <div className={ footerAdPlacholder }>
        Advertisement
      </div>
      <div style={{ height: 350 }} className={ footerAdPlacholder }>
        Advertisement
      </div>
    </React.Fragment>
  )
}

import React from 'react';

import { centeredContent, copyrightBarSuspense, footer, footerLinkSuspense, leftContent, linksBar, mobileBar, mobileButtonSuspense, mobileButtons, mobileTitleSuspense, realtorButtonSuspense, rightContent, socialBar, socialButtonSuspense } from './Footer.css';

export const FooterSuspense: React.FunctionComponent = () => {
  return (
    <footer className={footer}>
      <div className={centeredContent}>
        <div className={socialBar}>
          <div className={leftContent}>
            <div className={socialButtonSuspense} />
            <div className={socialButtonSuspense} />
            <div className={socialButtonSuspense} />
            <div className={socialButtonSuspense} />
            <div className={socialButtonSuspense} />
            <div className={socialButtonSuspense} />
          </div>
          <div className={rightContent}>
            <div className={realtorButtonSuspense} />
            <div className={realtorButtonSuspense} />
          </div>
        </div>
        <div className={linksBar}>
          <div style={{ width: 69.57 }} className={footerLinkSuspense} />
          <div style={{ width: 60.77 }} className={footerLinkSuspense} />
          <div style={{ width: 99.2 }} className={footerLinkSuspense} />
          <div style={{ width: 76.02 }} className={footerLinkSuspense} />
          <div style={{ width: 92.05 }} className={footerLinkSuspense} />
          <div style={{ width: 85.11 }} className={footerLinkSuspense} />
          <div style={{ width: 133.84 }} className={footerLinkSuspense} />
          <div style={{ width: 112.85 }} className={footerLinkSuspense} />
          <div style={{ width: 57.43 }} className={footerLinkSuspense} />
          <div style={{ width: 47.73 }} className={footerLinkSuspense} />
          <div style={{ width: 93.23 }} className={footerLinkSuspense} />
          <div style={{ width: 76.23 }} className={footerLinkSuspense} />
          <div style={{ width: 86.41 }} className={footerLinkSuspense} />
          <div style={{ width: 64.45 }} className={footerLinkSuspense} />
          <div style={{ width: 344.53 }} className={footerLinkSuspense} />
        </div>
        <div className={mobileBar}>
          <div className={mobileTitleSuspense} />
          <div className={mobileButtons}>
            <div style={{ width: 119 }} className={mobileButtonSuspense} />
            <div style={{ width: 135 }} className={mobileButtonSuspense} />
          </div>
        </div>
        <div className={copyrightBarSuspense} />
      </div>
    </footer>
  )
}

export default FooterSuspense;

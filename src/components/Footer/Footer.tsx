import React from 'react';

import { centeredContent, copyrightBar, footer, footerLink, leftContent, link, linksBar, mobileBar, mobileButton, mobileButtonGraphic, mobileButtons, mobileTitle, realtorButton, realtorGraphic, rightContent, socialBar, socialButton, socialIcon } from './Footer.css';

export const Footer: React.FunctionComponent = () => {
  return (
    <footer className={footer}>
      <div className={centeredContent}>
        <div className={socialBar}>
          <div className={leftContent}>
            <button className={socialButton}>
              <img src='/assets/icon_facebook.svg' className={socialIcon} alt='Facebook' />
            </button>
            <button className={socialButton}>
              <img src='/assets/icon_x.svg' className={socialIcon} alt='X' />
            </button>
            <button className={socialButton}>
              <img src='/assets/icon_linkedin.svg' className={socialIcon} alt='LinkedIn' />
            </button>
            <button className={socialButton}>
              <img src='/assets/icon_instagram.svg' className={socialIcon} alt='Instagram' />
            </button>
            <button className={socialButton}>
              <img src='/assets/icon_pinterest.svg' className={socialIcon} alt='Pinterest' />
            </button>
            <button className={socialButton}>
              <img src='/assets/icon_youtube.svg' className={socialIcon} alt='YouTube' />
            </button>
          </div>
          <div className={rightContent}>
            <button className={realtorButton}>
              <img src='/assets/graphic_houselogic.svg' className={realtorGraphic} alt='HouseLogic' />
            </button>
            <button className={realtorButton}>
              <img src='/assets/graphic_realtordomain.svg' className={realtorGraphic} alt='.realtor domain' />
            </button>
          </div>
        </div>
        <div className={linksBar}>
          <a href='#' className={footerLink}>About us</a>
          <a href='#' className={footerLink}>Careers</a>
          <a href='#' className={footerLink}>Accessibility</a>
          <a href='#' className={footerLink}>Feedback</a>
          <a href='#' className={footerLink}>Media room</a>
          <a href='#' className={footerLink}>Ad choices</a>
          <a href='#' className={footerLink}>Advertise with us</a>
          <a href='#' className={footerLink}>Agent support</a>
          <a href='#' className={footerLink}>Privacy</a>
          <a href='#' className={footerLink}>Terms</a>
          <a href='#' className={footerLink}>Home made</a>
          <a href='#' className={footerLink}>Tech blog</a>
          <a href='#' className={footerLink}>Agent blog</a>
          <a href='#' className={footerLink}>Sitemap</a>
          <a href='#' style={{ color: '#f4b630' }} className={footerLink}>Do not sell or share my personal information</a>
        </div>
        <div className={mobileBar}>
          <h1 className={mobileTitle}>Get the app</h1>
          <div className={mobileButtons}>
            <div style={{ width: 119 }} className={mobileButton}>
              <img className={mobileButtonGraphic} src='/assets/graphic_appStore.svg' alt='App Store' />
            </div>
            <div style={{ width: 135 }} className={mobileButton}>
              <img className={mobileButtonGraphic} src='/assets/graphic_googlePlay.svg' alt='Google Play' />
            </div>
          </div>
        </div>
        <div className={copyrightBar}>
          © 1995-2024 <span className={link}>National Association of REALTORS<sup>®</sup></span> and <span className={link}>Move, Inc.</span> All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer;

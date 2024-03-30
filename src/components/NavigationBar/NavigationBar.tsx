import React from 'react';
import { shallowEqual, useSelector } from "react-redux";

import Login from "../Login";
import { Logo } from "../Logo";
import NavigationLink from "../NavigationLink";
import SignUpButton from "../SignUpButton";
import { loadStatusSelector } from "../../redux/selectors";
import HeaderLinks from '../HeaderLinks';

import { mobileContent, leftContent, mobileIcon, navContainer, navigationBar, rightContent, mobileButton, darkButton } from "./NavigationBar.css";


export const NavigationBar: React.FunctionComponent = () => {
  const loadStatus = useSelector(loadStatusSelector, shallowEqual);

  return (
    <div className={navigationBar}>
      <div className={leftContent}>
        <Logo />
        <div style={{ fontSize: 0, fontWeight: 400, color: '#fff' }}>.</div>
        <div style={{ fontSize: 0, fontWeight: 500, color: '#fff' }}>.</div>
        <div style={{ fontSize: 0, fontWeight: 700, color: '#fff' }}>.</div>
        <nav className={navContainer}>
          <NavigationLink active={true} onClick={() => null} text='Buy' width={25.85} condition={loadStatus?.properties} />
          <NavigationLink onClick={() => null} text='Sell' width={25.92} condition={loadStatus?.properties} />
          <NavigationLink onClick={() => null} text='Rent' width={31.75} condition={loadStatus?.properties} />
          <NavigationLink onClick={() => null} text='Mortgage' width={66.39} condition={loadStatus?.properties} />
          <NavigationLink onClick={() => null} text='Find Realtors<sup>®</sup>' width={94.6} condition={loadStatus?.properties} />
          <NavigationLink onClick={() => null} text='My Home' width={64.07} condition={loadStatus?.properties} />
          <NavigationLink onClick={() => null} text='News & Insights' width={109.89} condition={loadStatus?.properties} />
        </nav>
      </div>
      <div className={mobileContent}>
        <button className={mobileButton}>
          <svg className={mobileIcon} viewBox="0 0 24 24"><path fillRule="evenodd" d="M1.75 6a1 1 0 0 1 1-1h18.5a1 1 0 1 1 0 2H2.75a1 1 0 0 1-1-1Zm.5 6a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2h-18a1 1 0 0 1-1-1Zm1 5a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2h-18Z" clipRule="evenodd"></path></svg>
        </button>
        <Logo />
        <button className={darkButton}>
          <svg fill='#fff' className={mobileIcon} viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10ZM9 7a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3 6c-4.231 0-7.173 1.699-8.393 4.689-.476 1.169-.148 2.302.56 3.089C4.855 21.54 5.903 22 7 22h10c1.098 0 2.146-.46 2.832-1.222.709-.787 1.037-1.92.56-3.09C19.173 14.699 16.232 13 12 13Zm-6.54 5.444C6.282 16.424 8.32 15 12 15s5.717 1.423 6.54 3.444c.15.365.073.7-.194.995-.289.321-.787.561-1.346.561H7c-.56 0-1.057-.24-1.346-.56-.267-.297-.343-.631-.195-.996Z" clipRule="evenodd"></path></svg>
        </button>
      </div>
      <div className={rightContent}>
        <HeaderLinks condition={loadStatus?.properties} />
        <Login condition={loadStatus?.properties} />
        <SignUpButton condition={loadStatus?.properties} />
      </div>
    </div>
  )
}

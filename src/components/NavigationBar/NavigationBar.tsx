import React from 'react';
import { shallowEqual, useSelector } from "react-redux";

import Login from "../Login";
import { Logo } from "../Logo";
import NavigationLink from "../NavigationLink";
import SignUpButton from "../SignUpButton";
import { loadStatusSelector } from "../../redux/selectors";
import HeaderLinks from '../HeaderLinks';

import { leftContent, navContainer, navigationBar, rightContent } from "./NavigationBar.css";


export const NavigationBar: React.FunctionComponent = () => {
  const loadStatus = useSelector(loadStatusSelector, shallowEqual);

  return (
    <div className={navigationBar}>
      <div className={leftContent}>
        <Logo/>
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
      <div className={rightContent}>
        <HeaderLinks condition={loadStatus?.properties} />
        <Login condition={loadStatus?.properties} />
        <SignUpButton condition={loadStatus?.properties} />
      </div>
    </div>
  )
}

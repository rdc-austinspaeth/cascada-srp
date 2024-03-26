import React from 'react';

import { ToggleProps } from './Toggle.types';
import { toggleContainer, toggleSelected, toggleUnselected } from './Toggle.css';

export const Toggle: React.FunctionComponent<ToggleProps> = (props) => {
  const { } = props || {};

  return (
    <div className={toggleContainer}>
      <div className={toggleSelected}>
        List
      </div>
      <div className={toggleUnselected}>
        Map
      </div>
    </div>
  )
}

export default Toggle;

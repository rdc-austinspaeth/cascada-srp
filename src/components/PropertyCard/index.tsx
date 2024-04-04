import React from 'react';

import { Suspense } from '../Suspense';

import { PropertyCardProps } from './PropertyCard.types';
import PropertyCardSuspense from './PropertyCard.suspense';
import { cardContainerPlaceholder, imageContainer, label, propertyCardContainerPlaceholder } from './PropertyCard.css';

const LazyComponent = React.lazy(() => import('./PropertyCard'));

export const LazyPropertyCard: React.FunctionComponent<PropertyCardProps> = (props) => {
  const { condition } = props || {};

  return (
    <React.Fragment>
      <div style={{ position: 'absolute' }} className={propertyCardContainerPlaceholder}>
        <div className={label}></div>
        <div style={{ width: 'calc(100%)' }} className={cardContainerPlaceholder}>
          <div className={imageContainer}>
            { props.index === 0 && <img style={{ width: '100%', height: '100%' }} fetchPriority="high" id='lcp' src='/assets/placeholder.png' /> }
          </div>
        </div>
      </div>
      <Suspense fallback={<PropertyCardSuspense {...props} />} component={<LazyComponent {...props } />} condition={condition} />
    </React.Fragment>
  );
}

export default LazyPropertyCard;

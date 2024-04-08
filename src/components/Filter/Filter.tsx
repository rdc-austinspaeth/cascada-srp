import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { getProperties } from '../../redux/actions';

import { PriceSelect } from '../PriceSelect';
import { FilterProps } from './Filter.types';
import { chevronIcon, filterContainer, conditionalTabletHide, conditionalMobileHide, dropdown, dropdownContent } from './Filter.css';

export const Filter: React.FunctionComponent<FilterProps> = (props) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [priceFilters, setPriceFilters] = useState({
    minPrice: 0,
    maxPrice: 0,
  });
  const dropdownRef = useRef(null);
  const closedByOutsideClick = useRef(false);
  const prices = {
    minPrices: {
      '350K': 350000,
      '700K': 700000,
      '1M': 1000000,
      '1.4M': 1400000,
      '1.8M': 1800000,
      '2.2M': 2200000,
      '2.4M': 2400000,
    },
    maxPrices: {
      '600K': 600000,
      '1.2M': 1200000,
      '1.8M': 1800000,
      '2.4M': 2400000,
      '3M': 3000000,
      '3.6M': 3600000,
      '4.2M': 4200000,
    },
  };

  const handleButtonClick = () => {
    if(closedByOutsideClick.current){
      closedByOutsideClick.current = false;
    } else {
      setIsOpen(prevState => !prevState);
    }
  }

  const handleClickOutside = (event) => {
    if(dropdownRef.current && !dropdownRef.current.contains(event.target)){
      setIsOpen(false);
      closedByOutsideClick.current = true;
    }
  }

  const handlePriceChange = (event) => {
    setPriceFilters({
      ...priceFilters,
      [event.target?.dataset?.type]: Number(event.target.value)
    })
  }

  useEffect(()=>{
    const variables = {
      geoSupportedSlug: '',
      query: {
        primary: true,
        status: ['for_sale', 'ready_to_build'],
        search_location: {
          location: 'South Carolina',
        },
      },
      client_data: {
        device_data: {
          device_type: 'desktop',
        },
      },
      limit: 42,
      offset: 0,
      sort_type: 'relevant',
    };
    const { minPrice, maxPrice } = priceFilters;
    if (minPrice > 0 || maxPrice > 0) {
      variables.query.list_price = {
        ...(minPrice && { min: minPrice }),
        ...(maxPrice && { max: maxPrice }),
      };
    }
    dispatch(getProperties(variables));
  },[priceFilters])

  useEffect(()=>{
    if(isOpen){
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const { label, width, button, hideMobile, hideTablet } = props || {};

  return (
    <div className={dropdown}>
      <button
        onClick={handleButtonClick}
        style={{
          width: width,
          borderRadius: button ? 45 : 8,
          justifyContent: button ? 'center' : 'space-between',
          marginLeft: button ? 8 : 4.8,
          paddingTop: button ? 0 : 1,
        }}
        className={`${filterContainer} ${
          hideMobile ? conditionalMobileHide : ''
        } ${hideTablet ? conditionalTabletHide : ''}`}
      >
        {label}
        {!button && (
          <svg className={chevronIcon} viewBox="0 0 24 24">
            <path d="M17.293 8.293a1 1 0 1 1 1.414 1.414l-1.414-1.414ZM12 15l.707.707a1 1 0 0 1-1.414 0L12 15ZM5.293 9.707a1 1 0 0 1 1.414-1.414L5.293 9.707Zm13.414 0-6 6-1.414-1.414 6-6 1.414 1.414Zm-7.414 6-6-6 1.414-1.414 6 6-1.414 1.414Z"></path>
          </svg>
        )}
      </button>
      {isOpen &&  label === "Price" && (
        <div className={dropdownContent} ref={dropdownRef}>
          <h3>Price</h3>
          <div>
            <PriceSelect title="Min Price" onChange={handlePriceChange} dataType="minPrice" prices={prices.minPrices}/>
            <PriceSelect title="Max Price" onChange={handlePriceChange} dataType="maxPrice" prices={prices.maxPrices}/>
          </div>
          <div>
            <input
              type="checkbox"
              id="assumableMortgage"
              name="assumableMortgage"
            />
            <label htmlFor="assumableMortgage">Assumable Mortgage</label>
          </div>
        </div>
      )}
    </div>
  );
}

export default Filter;

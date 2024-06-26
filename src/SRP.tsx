import * as React from 'react';
import { Provider } from 'react-redux';

// @ts-ignore
import RDCTracking from '@moveinc/rdc-tracking';

import './assets/index.css';
import { PageLayout } from './components/PageLayout';
import { BannerAd } from './components/BannerAd';
import { NavigationBar } from './components/NavigationBar';
import Meta from './components/Meta';
import { getProperties } from './redux/actions';
import { useStore } from './redux/store';
import { FilterBar } from './components/FilterBar';
import { Properties } from './components/Properties';
import Pagination from './components/Pagination';
import { FooterAd } from './components/FooterAd';
import Footer from './components/Footer';
import BuyingHome from './components/BuyingHome';
import { Ads } from './components/Ads';
import Scripts from './components/Scripts';

export const SRP: React.FunctionComponent <{ssrData: any}> = (props) => {
  const { ssrData = null } = props || {};

  const initialReduxState = {
    ...ssrData,
  };

  const reduxStore: any = useStore(initialReduxState);

  React.useEffect(() => {
    RDCTracking.trackPage('new_srp', { pageType: 'new' });
  }, []);

  React.useEffect(()=>{
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
    reduxStore?.dispatch(getProperties(variables));
  },[]);

  return (
    <Provider store={reduxStore}>
      <PageLayout
        BannerAd={BannerAd}
        NavigationBar={NavigationBar}
        FilterBar={FilterBar}
        Meta={Meta}
        Properties={Properties}
        Pagination={Pagination}
        BuyingHome={BuyingHome}
        FooterAd={FooterAd}
        Footer={Footer} />
     <Scripts />
     { typeof window !== 'undefined' && <Ads /> }
    </Provider>
  )
}

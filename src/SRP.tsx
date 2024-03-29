import * as React from 'react';
import { Provider } from 'react-redux';

import './assets/index.css';
import { PageLayout } from './components/PageLayout';
import { BannerAd } from './components/BannerAd';
import { NavigationBar } from './components/NavigationBar';
import Meta from './components/Meta';
import { setLoadStatus } from './redux/actions';
import { getProperties } from './redux/actions';
import store from './redux/store';
import { FilterBar } from './components/FilterBar';
import { Properties } from './components/Properties';

export const SRP: React.FunctionComponent <{ssrData: any}> = (props) => {
  const { ssrData } = props || {};
  
  React.useEffect(() => {
    setTimeout(() => {
      store.dispatch(setLoadStatus(true));
    }, 500);
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
    store.dispatch(getProperties(variables));
  },[]);

  return (
    <Provider store={store}>
      <PageLayout
        BannerAd={BannerAd}
        NavigationBar={NavigationBar}
        FilterBar={FilterBar}
        Meta={Meta}
        Properties={Properties} />
    </Provider>
  )
}

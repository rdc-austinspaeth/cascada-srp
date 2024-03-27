import * as React from 'react';
import { Provider } from 'react-redux';

import './assets/index.css';
import { PageLayout } from './components/PageLayout';
import { BannerAd } from './components/BannerAd';
import { NavigationBar } from './components/NavigationBar';
import Meta from './components/Meta';
import { setLoadStatus } from './redux/actions';
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

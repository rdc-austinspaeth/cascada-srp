import React, { useEffect, useState } from 'react';

import { SrpAds, AdsManager, AdsSlotsGroup, AdsUtils } from '@moveinc/rdc-ads-media';

export const Ads = () => {
  const pageType = 'forSale';
  const page = 1;
  const profile = {
    "loading": false,
    "status": "idle",
    "data": {}
};
const properties: any = [];
  const filterCriteria = {
    "bath": {},
    "bed": {},
    "featureTags": {
        "tags": []
    },
    "propertyType": {
        "type": []
    },
    "listingStatus": {},
    "pets": {},
    "homeSize": {},
    "expand": {
        "radius": 0,
        "nearbyAreas": []
    },
    "price": {},
    "homeAge": {},
    "daysOnRealtor": {},
    "lotSize": {},
    "keyword": {
        "keywords": []
    },
    "hoa": {
        "type": "any",
        "fee": -1
    },
    "commute": {
        "address": "",
        "time": 30,
        "traffic": true,
        "transportation_type": "drive"
    },
    "showPending": false,
    "rentalPromotion": false,
    "threeDimensionalTours": false,
    "moveInDate": {
        "min": "",
        "max": ""
    },
    "builder": {
        "builderList": [],
        "selectedBuilders": [],
        "searchedBuilders": []
    },
    "featured": "",
    "monthlyPayment": {},
    "assumableMortgage": false
}
  const sort = null;
  const geo = {
    "area_type": "state",
    "_id": "state:sc",
    "_score": 36028.203,
    "state": "South Carolina",
    "state_code": "SC",
    "country": "USA",
    "centroid": {
        "lon": -80.86459055082942,
        "lat": 33.877754568457874
    },
    "slug_id": "South-Carolina",
    "geo_id": "364df3e8-e939-59e2-9b25-db3a4fc3f178"
};
  const deviceType = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'mobile' : 'desktop';
  const isMapView = false;
  const isSPA = false;
  const ab = [
    {
        "experimentKey": "NNS2312_ADMGRTEMPLATE",
        "featureKey": "NNS2312_ADMGRTEMPLATE",
        "isEnabled": false
    },
    {
        "experimentKey": "PLATFORMS_SRP_FRACTAL_0324_FT",
        "featureKey": "PLATFORMS_SRP_FRACTAL_0324",
        "isEnabled": false
    },
    {
        "experimentKey": "AAA242_MEDIA_ADS",
        "featureKey": "AAA242_MEDIA_ADS",
        "isEnabled": false
    },
    {
        "experimentKey": "CCX_DESKTOP_SRP_NEWTAB_202309",
        "featureKey": "CCX_DESKTOP_SRP_NEWTAB",
        "isEnabled": false
    },
    {
        "experimentKey": "BX_LDP_LCE_FOR_SALE_202401",
        "featureKey": "BX_LDP_LCE_FOR_SALE_202401",
        "variation": "V1",
        "isEnabled": true
    },
    {
        "experimentKey": "CCX_SRP_MONTHLY_PAYMENT_202311",
        "featureKey": "CCX_SRP_MONTHLY_PAYMENT",
        "isEnabled": false
    },
    {
        "experimentKey": "BX_YMAL_202311",
        "featureKey": "BX_YMAL",
        "isEnabled": false
    },
    {
        "experimentKey": "WBO2312_YMAL",
        "featureKey": "WBO2312_YMAL",
        "variation": "V1",
        "isEnabled": true
    },
    {
        "experimentKey": "BX_MASON_WEB_PANTHEON",
        "featureKey": "BX_MASON_WEB_PANTHEON",
        "isEnabled": false
    },
    {
        "experimentKey": "WBS241_PAE",
        "featureKey": "WBS241_PAE",
        "variation": "V1",
        "isEnabled": true
    },
    {
        "experimentKey": "WBO242_HOUSEADS",
        "featureKey": "WBO242_HOUSEADS",
        "variation": "C",
        "isEnabled": true
    },
    {
        "experimentKey": "WBS2312_FILTERREDESIGN3",
        "featureKey": "WBS2312_FILTERREDESIGN3",
        "isEnabled": false
    },
    {
        "experimentKey": "WBS2401_TRAVELTIME",
        "featureKey": "WBS2401_TRAVELTIME",
        "variation": "C1",
        "isEnabled": true
    },
    {
        "experimentKey": "FOR_SALE_SRP_GLOBAL_HOLDOUT_AA_TEST_1_202310",
        "featureKey": "FOR_SALE_SRP_GLOBAL_HOLDOUT_1",
        "isEnabled": false
    },
    {
        "experimentKey": "FOR_SALE_SRP_GLOBAL_HOLDOUT_AA_TEST_2_202310",
        "featureKey": "FOR_SALE_SRP_GLOBAL_HOLDOUT_2",
        "isEnabled": false
    },
    {
        "experimentKey": "nhc_srp_2311_sort_by_year_v2_test",
        "featureKey": "nhc_srp_2311_sort_by_year_v2",
        "variation": "V2",
        "isEnabled": true
    },
    {
        "experimentKey": "NH_SRP_GLOBAL_HOLDOUT_AA_TEST_1_202312",
        "featureKey": "NH_SRP_GLOBAL_HOLDOUT_AA_TEST_1_202312",
        "isEnabled": false
    },
    {
        "experimentKey": "NH_SRP_GLOBAL_HOLDOUT_AA_TEST_2_202312",
        "featureKey": "NH_SRP_GLOBAL_HOLDOUT_AA_TEST_2_202312",
        "isEnabled": false
    },
    {
        "experimentKey": "WBO241_PERSISTLEADDATA",
        "featureKey": "WBO241_PERSISTLEADDATA",
        "variation": "C",
        "isEnabled": true
    },
    {
        "experimentKey": "WBO242_LCEABOVEYMAL",
        "featureKey": "WBO242_LCEABOVEYMAL",
        "variation": "V1",
        "isEnabled": true
    },
    {
        "experimentKey": "WNS241_NEWMAPPIN",
        "featureKey": "WNS241_NEWMAPPIN",
        "variation": "V1",
        "isEnabled": true
    },
    {
        "experimentKey": "WBS241_TILECAROUSEL",
        "featureKey": "WBS241_TILECAROUSEL",
        "variation": "V1",
        "isEnabled": true
    },
    {
        "experimentKey": "WBS242_EXPANDSEARCH1",
        "featureKey": "WBS242_EXPANDSEARCH1",
        "variation": "V1",
        "isEnabled": true
    }
]


  const prevIsMapViewRef = React.useRef<boolean>(isMapView);
  const prevSortRef = React.useRef<string | undefined>('');

  const sdacSearch = {
    city: geo?.city || '',
    full_address: '',
    postal_code: geo?.postal_code || '',
    state_code: geo?.state_code || '',
  };

  const [lb1AdReloadTriggers, setLb1AdReloadTriggers] = useState({
    currentPage: page,
    currentFilter: filterCriteria,
    shouldLb1Reload: false,
  });

  useEffect(() => {
    if (isMapView) {
      prevIsMapViewRef.current = isMapView;
    }
  }, [isMapView]);

  useEffect(() => {
    prevSortRef.current = sort;
  }, []);

  useEffect(() => {
    if (page !== lb1AdReloadTriggers.currentPage || JSON.stringify(filterCriteria) !== JSON.stringify(lb1AdReloadTriggers.currentFilter)) {
      setLb1AdReloadTriggers({
        ...lb1AdReloadTriggers,
        currentPage: page,
        shouldLb1Reload: true,
      });
    }
  }, [page, filterCriteria]);

  // CustomMessageHandler('startScroll', () => {
  //   if (isSPA) {
  //     AdsManager.clearPageLevelTargetingKey('refer');
  //   }
  // });

  const loadLB1Ad = () => {

    AdsUtils.LoadAds(AdsSlotsGroup.gptadslotsLB1LISTView);
  };

  const loadLB1AdInview = () => {
    if (isMapView) {
      return;
    }

    const rootMargin = '1px';
    const options = { rootMargin };
    const containerElement = document.querySelector('#lb1_container_srp');



    // Early return if containerElement is null or undefined
    if (!containerElement) return;

    return loadLB1Ad();
  };

  useEffect(() => {
    const resetAdsSlotsLoaded = () => {
      for (const key in AdsSlotsGroup) {
        if (key && AdsSlotsGroup[key]) {
          AdsSlotsGroup[key].isLoaded = false;
        }
      }
    };
    AdsUtils.logMessage('SRP Ads resetAdsSlotsLoaded');
    resetAdsSlotsLoaded();
  }, [page, filterCriteria, geo, pageType, isMapView, sort, properties]);

  let adTimeout1 = -1;
  let adTimeout2 = -1;

  useEffect(() => {
    // Function to handle LB1 ad loading
    const handleLB1AdLoading = () => {
      if (adTimeout2 === -1) {
        adTimeout2 = window.setTimeout(() => {
          loadLB1AdInview();
        }, 1);
      }
      prevIsMapViewRef.current = isMapView;
      prevSortRef.current = sort;
    };

    const clearAdTimeouts = () => {
      if (adTimeout2 !== -1) clearTimeout(adTimeout2);
      adTimeout2 = -1;
    };

    if (isSPA && !lb1AdReloadTriggers.shouldLb1Reload && !prevIsMapViewRef.current && sort === prevSortRef.current) {
      return;
    }
    handleLB1AdLoading();
    return clearAdTimeouts;
  }, [page, filterCriteria, geo, isMapView, pageType, sort, lb1AdReloadTriggers.shouldLb1Reload]);

  useEffect(() => {
    const handlePageLevelTargeting = () => {
      if (isSPA) {
        AdsManager.addPageLevelTargeting('refer', 'ldp');
        if (adTimeout1 === -1) {
          adTimeout1 = window.setTimeout(() => {
            AdsManager.clearPageLevelTargetingKey('refer');
          }, 3000);
        }
      } else {
        AdsManager.clearPageLevelTargetingKey('refer');
      }
    };

    // Function to clear timeouts
    const clearAdTimeouts = () => {
      if (adTimeout1 !== -1) clearTimeout(adTimeout1);
      adTimeout1 = -1;
    };

    handlePageLevelTargeting();
    return clearAdTimeouts;
  }, [isSPA]);


  return (
    <>
      <SrpAds
        isMapView={isMapView}
        deviceType={deviceType}
        properties={[]}
        geo={geo}
        pageType={pageType}
        filterCriteria={filterCriteria}
        profile={profile}
        page={page}
        experimentData={ab}
      />
    </>
  );
};

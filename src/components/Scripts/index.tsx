import React from 'react';

export const Scripts = () => {
  const highPriorityScriptSources = [
    'https://securepubads.g.doubleclick.net/tag/js/gpt.js',
    'https://pbcs.realtor.com/p/realtor/realtor/pb.js',
    'https://c.amazon-adsystem.com/aax2/apstag.js',
    'https://cdn.segment.com/next-integrations/integrations/vendor/commons.c42222c4cb2f8913500f.js.gz',
    'https://cdn.segment.com/next-integrations/integrations/bing-ads/2.0.1/bing-ads.dynamic.js.gz',
    'https://cdn.segment.com/next-integrations/integrations/google-adwords-new/1.3.0/google-adwords-new.dynamic.js.gz',
    'https://cdn.segment.com/next-integrations/integrations/google-analytics/2.18.5/google-analytics.dynamic.js.gz',
    'https://cdn.segment.com/analytics.js/v1/sbqueQfGqhUZ2iz0B4eJlvH2fIXhHxBW/analytics.min.js',
  ];

  const lowPriorityScriptSources = [
    'https://0cf17917-395b-4f25-91cc-db3bdd6044b0.edge.permutive.app/5dc35e4e-c442-405b-bf5f-5c2b8824b0cf-web.js',
    'https://ads.pubmatic.com/AdServer/js/pwt/162281/7793/pwt.js',
    'https://static.criteo.net/js/ld/publishertag.prebid.144.js',
    'https://cdn.taboola.com/scripts/eid.es5.js',
    'https://cdn.taboola.com/scripts/cds-pips.js',
    '//s.tribalfusion.com/displayAd.js?dver=0.8&amp;th=9456408158',
    'https://analytics.tiktok.com/i18n/pixel/static/main.MTcwMjJjYTNhMQ.js',
    'https://tr.snapchat.com/config/com/609f8067-dff5-4ea7-ba94-a64e372df3d8.js?v=3.14.0-2404012145',
    'https://www.googletagmanager.com/gtag/js?id=G-GKXRF889HV&amp;cx=c&amp;_slc=1',
    'https://snap.licdn.com/li.lms-analytics/insight.min.js',
    'https://www.redditstatic.com/ads/pixel.js',
    'https://sc-static.net/scevent.min.js',
    'https://analytics.tiktok.com/i18n/pixel/events.js?sdkid=CHMD5VBC77U441D0A7E0&amp;lib=ttq',
    '//cdn.taboola.com/libtrc/unip/1007327/tfa.js',
    'https://analytics.trovit.com/trovit-analytics.js',
    'http://b.scorecardresearch.com/cs/6036093/beacon.js',
    'https://www.googletagmanager.com/gtag/js?id=AW-807474066&amp;l=dataLayer&amp;cx=c',
    'https://www.googletagmanager.com/gtag/js?id=DC-10291144&amp;l=dataLayer&amp;cx=c',
    '//static.ads-twitter.com/uwt.js',
    'https://cdn.pendo.io/agent/static/3a8bf64d-be53-406f-43d0-0915f0e7bb61/pendo.js',
    'https://www.googletagmanager.com/gtag/js?id=G-MS5EHT6J6V&amp;l=dataLayer&amp;cx=c',
    'https://www.google-analytics.com/gtm/js?id=GTM-MJVX5G3&amp;cid=1207268199.1710175866',
    'https://bat.bing.com/p/insights/s/0.7.26',
    'https://bat.bing.com/p/insights/t/25046895',
    'http://bat.bing.com/bat.js',
    'https://www.googletagmanager.com/gtag/js?id=AW-1049445407-QA',
    'http://www.google-analytics.com/analytics.js',
    'http://rules.quantcount.com/rules-p-StNwVtkUGv5N3.js',
    'https://launchpad.privacymanager.io/latest/launchpad.bundle.js',
    'https://pixel.everesttech.net/rlsa/5154',
    'https://s.yimg.com/wi/ytc.js',
  ];
  
  React.useEffect(() => {
    highPriorityScriptSources.forEach((src) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    });
    setTimeout(() => {
      lowPriorityScriptSources.forEach((src) => {
        const script = document.createElement('script');
        script.src = src;
        script.defer = true;
        document.body.appendChild(script);
      });
    }, 250);
    
  }, []);

  return null;
}

export default React.memo(Scripts);

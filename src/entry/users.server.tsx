import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Route, Routes } from 'react-router-dom';

import { SRP } from '../SRP';

export function SSRRender(cssAssets: any) {
  return ReactDOMServer.renderToString(
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png" />
        <link rel="manifest" href="/assets/site.webmanifest" />
        
        <title>South Carolina Real Estate &amp; SC Homes for Sale | realtor.com®</title>
        <meta name="description" content="Search SC real estate at realtor.com®. View property details of the 45122 homes for sale in South Carolina." />
        <meta property="og:url" content="https://www.realtor.com/realestateandhomes-search/South-Carolina" />
        <meta property="og:title" content="South Carolina Real Estate &amp; SC Homes for Sale | realtor.com®" />
        <meta property="og:description" content="Search SC real estate at realtor.com®. View property details of the 45122 homes for sale in South Carolina." />
        <meta property="og:image" content="https://ap.rdcpix.com/7e067357dee3a2a4ae0ffbfca42b4754l-m3033941903od-w480_h480_q80.jpg" />
        <meta property="og:site_name" content="realtor.com®" />
        <meta property="twitter:description" content="Search SC real estate at realtor.com®. View property details of the 45122 homes for sale in South Carolina." />
        <meta property="twitter:image" content="https://ap.rdcpix.com/7e067357dee3a2a4ae0ffbfca42b4754l-m3033941903od-w480_h480_q80.jpg" />
        <meta name="twitter:site" content="@realtordotcom" />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="480" />
        <meta property="og:image:height" content="480" />
        <meta name="app-version" content="island-for-sale-master" />
        <meta name="isbot" content="false" data-useragent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36" />
        <link rel="canonical" href="https://www.realtor.com/realestateandhomes-search/South-Carolina"/>

        { cssAssets.map((asset: any) => (
          <link key={asset} rel="stylesheet" href={asset} />
        ))}
      </head>
      <body>
        <div id='app'>
          <StaticRouter location='/ssg-slug'>
            <Routes>
              <Route path={'/:slug'} element={<SRP ssrData={null} />} />
            </Routes>
          </StaticRouter>
        </div>
      </body>
    </html>,
  );
}

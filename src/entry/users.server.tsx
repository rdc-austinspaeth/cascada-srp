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
        <script type="module" src="/assets/index.js" />
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

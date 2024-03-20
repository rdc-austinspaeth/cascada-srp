import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Route, Routes } from 'react-router-dom';

import { SRP } from '../SRP';

export function SSRRender(url: string | Partial<Location>) {
  return ReactDOMServer.renderToString(
    <html>
      <head>
        <meta charSet="utf-8" />
      </head>
      <body>
        <div id='app'>
          <StaticRouter location={url}>
            <Routes>
              <Route path={'/*'} element={<SRP ssrData={null} />} />
            </Routes>
          </StaticRouter>
        </div>
      </body>
    </html>,
  );
}

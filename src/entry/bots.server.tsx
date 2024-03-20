import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Route, Routes } from 'react-router-dom';

import { SRP } from '../SRP';

export const SSRRender = (data: any, location: string, response: any) => {
  const { pipe } = ReactDOMServer.renderToPipeableStream(
    <html>
      <head>
        <meta charSet="utf-8" />
      </head>
      <body>
        <div id="app">
          <StaticRouter location={`/${location}`}>
            <Routes>
              <Route path={'/:slug'} element={<SRP ssrData={data} />} />
              <Route path={'/'} element={<code>404</code>} />
            </Routes>
          </StaticRouter>
        </div>
      </body>
    </html>,
    {
      onShellReady() {
        response.setHeader('content-type', 'text/html');
        pipe(response);
      }
    }
  );
}

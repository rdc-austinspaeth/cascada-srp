import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Route, Routes } from 'react-router-dom';

import { SRP } from '../SRP';

export const SSRRender = (data: any, response: any) => {
  const { pipe } = ReactDOMServer.renderToPipeableStream(
    <html>
      <head>
        <meta charSet="utf-8" />
      </head>
      <body>
        <div id="root">
          <StaticRouter location={''}>
            <Routes>
              <Route path={'/*'} element={<SRP ssrData={data} />} />
            </Routes>
          </StaticRouter>
        </div>
      </body>
    </html>,
    {
      onShellReady() {
        response.setHeader('content-type', 'text/html');
        console.log(pipe);
        pipe(response);
      }
    }
  );
}

import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';

import { SRP } from './SRP';
import { Route, Routes } from 'react-router-dom';

export function SSRRender(url: string | Partial<Location>) {
  return ReactDOMServer.renderToString(
    <StaticRouter location={url}>
      <Routes>
        <Route path={'/*'} element={<SRP />} />
      </Routes>
    </StaticRouter>,
  );
}

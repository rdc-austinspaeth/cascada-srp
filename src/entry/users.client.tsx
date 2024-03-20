import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { SRP } from '../SRP';

ReactDOM.hydrateRoot(
  document.getElementById('app')!,
  <BrowserRouter>
    <Routes>
      <Route path={'/:slug'} element={<SRP ssrData={null} />} />
      <Route path={'/'} element={<code>404</code>} />
    </Routes>
  </BrowserRouter>,
);

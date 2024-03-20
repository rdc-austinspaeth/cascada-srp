import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { SRP } from '../SRP';

let data;

if (typeof window !== 'undefined') {
  // @ts-ignore
  data = window.__data__;
}

ReactDOM.hydrateRoot(
  document.getElementById('app')!,
  <BrowserRouter>
    <Routes>
      <Route path={'/*'} element={<SRP ssrData={data} />} />
    </Routes>
  </BrowserRouter>,
);

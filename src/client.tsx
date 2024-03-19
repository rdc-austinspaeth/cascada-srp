import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { SRP } from './SRP';

ReactDOM.hydrateRoot(
  document.getElementById('app')!,
  <BrowserRouter>
    <Routes>
      <Route path={'/*'} element={<SRP />} />
    </Routes>
  </BrowserRouter>,
);

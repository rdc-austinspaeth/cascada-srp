import * as React from 'react';

import SuspenseTest from './components/SuspensefulTest';

const Test = React.lazy(() => import('./components/Test'));

export const SRP: React.FunctionComponent = () => {
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 2000);
  }, []);

  return (
    <>
      <h1>SRP</h1>
      {loaded
        ? (
          <React.Suspense fallback={<SuspenseTest />}>
            <Test />
          </React.Suspense>
        )
        : <SuspenseTest />
      }
    </>
  )
}

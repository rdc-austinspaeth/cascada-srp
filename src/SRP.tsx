import * as React from 'react';
import { useLocation } from 'react-router-dom';

import SuspenseTest from './components/SuspensefulTest';

const Test = React.lazy(() => import('./components/Test'));

export const SRP: React.FunctionComponent <{ssrData: any}> = (props) => {
  const { ssrData } = props || {};
  const { origin } = ssrData || {};

  const location = useLocation();

  const [ip, setIp] = React.useState<string | null>(origin || null);

  React.useEffect(() => {
    if (!origin) {
      setTimeout(() => {
        setIp('123.456.789.123');
      }, 1500);
    }
  }, []);

  return (
    <>
      <h1>SRP</h1>
      {ip
        ? (
          <React.Suspense fallback={<SuspenseTest />}>
            <Test ip={ip} />
            {location.pathname}
          </React.Suspense>
        )
        : <SuspenseTest />
      }
    </>
  )
}

import React from 'react';
import { Router, LocationProvider } from '@reach/router';
import { Home } from './routes/home';
import { Dashboard } from './routes/dashboard';
import { Active } from './routes/dashboard/active';
import { Archived } from './routes/dashboard/archived';
import { DefaultLayout } from './layouts/types/default';
import { history } from './utils/helpers/routerHistory';

const App: React.FC = () => (
  <DefaultLayout>
    <LocationProvider history={history}>
      {({ location }) => (
        <Router location={location}>
          <Home default path={'/:number'} />
          <Dashboard path={'dashboard'}>
            <Active path={'active'} />
            <Archived path={'archived'} />
          </Dashboard>
        </Router>
      )}
    </LocationProvider>
  </DefaultLayout>
);

export { App };

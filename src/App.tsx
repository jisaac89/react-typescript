import React from 'react';
import { Router } from '@reach/router';
import { Home } from './routes/home';
import { Dashboard } from './routes/dashboard';
import { Active } from './routes/dashboard/active';
import { Archived } from './routes/dashboard/archived';
import { Layout } from './layouts';

const App: React.FC = () => {
  return (
    <Layout>
      <Router>
        <Home path={'/'} />
        <Dashboard path={'dashboard'}>
          <Active path={'active'} />
          <Archived path={'archived'} />
        </Dashboard>
      </Router>
    </Layout>
  );
};

export { App };

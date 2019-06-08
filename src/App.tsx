import React from 'react';
import { Home } from './routes/home';
import { DefaultLayout } from './layouts/types/default';

const App: React.FC = () => (
  <DefaultLayout>
    <Home />
  </DefaultLayout>
);

export { App };

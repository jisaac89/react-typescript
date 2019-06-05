import React, { FunctionComponent } from 'react';
import { BaseLayout } from './base';
import { Header } from '../navigation/header';

const DefaultLayout: FunctionComponent = ({ children }) => (
  <BaseLayout>
    <Header />
    {children}
  </BaseLayout>
);

export { DefaultLayout };

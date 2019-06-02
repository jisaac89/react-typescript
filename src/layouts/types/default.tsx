import React, { FunctionComponent } from 'react';
import { BaseLayout } from './base';
import { Header } from '../navigation/header';

interface ILayout {}

const DefaultLayout: FunctionComponent<ILayout> = ({ children }) => {
  return (
    <BaseLayout>
      <Header />
      {children}
    </BaseLayout>
  );
};

export { DefaultLayout };

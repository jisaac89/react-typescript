import React, { FunctionComponent } from 'react';
import { BaseLayout } from './base';
import { Header } from '../navigation/header';
import { Platform, StatusBar } from 'react-native';

const DefaultLayout: FunctionComponent = ({ children }) => (
  <BaseLayout>
    {Platform.OS === 'ios' && <StatusBar barStyle={'default'} />}
    <Header />
    {children}
  </BaseLayout>
);

export { DefaultLayout };

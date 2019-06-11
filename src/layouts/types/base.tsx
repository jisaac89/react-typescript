import React, { FunctionComponent } from 'react';
import { AppProvider } from '../../contexts/appContext';
import { CollectionProvider } from '../../contexts/collectionContext';
import { CombinedContextProvider } from '../../contexts/_combinedContext';
import { Layer } from '../../components/Layer/Layer';

const Providers = [<AppProvider />, <CollectionProvider />];

const BaseLayout: FunctionComponent = ({ children }) => (
  <>
    <CombinedContextProvider arrOfProviders={Providers}>
      <Layer fill>{children}</Layer>
    </CombinedContextProvider>
    {/* <GlobalStyles /> */}
  </>
);

export { BaseLayout };

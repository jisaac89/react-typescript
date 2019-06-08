import React, { FunctionComponent } from 'react';
// import { GlobalStyles } from '../../styles/globalStyles';k
import { AppProvider } from '../../contexts/appContext';
// import { PageProvider } from '../../contexts/pageContext';
// import { CollectionProvider } from '../../contexts/collectionContext';

// const Providers = [<AppProvider />, <PageProvider />, <CollectionProvider />];

const BaseLayout: FunctionComponent = ({ children }) => (
  <>
    <AppProvider>
      <>{children}</>
    </AppProvider>
    {/* <GlobalStyles /> */}
  </>
);

export { BaseLayout };

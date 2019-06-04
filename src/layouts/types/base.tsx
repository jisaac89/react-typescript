import React, { FunctionComponent } from 'react';
import { GlobalStyles } from '../../styles/globalStyles';
import { AppProvider } from '../../contexts/appContext';
import { CombinedContextProvider } from '../../providers/_combinedProviders';
import { PageProvider } from '../../contexts/pageContext';
import { CollectionProvider } from '../../contexts/collectionContext';

interface IBase {}

const Providers = [<AppProvider />, <PageProvider />, <CollectionProvider />];

const BaseLayout: FunctionComponent<IBase> = ({ children }) => {
  return (
    <>
      <React.StrictMode>
        <CombinedContextProvider arrOfProviders={Providers}>
          <>{children}</>
        </CombinedContextProvider>
      </React.StrictMode>
      <GlobalStyles />
    </>
  );
};

export { BaseLayout };

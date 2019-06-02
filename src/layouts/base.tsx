import React, { FunctionComponent } from 'react';
import { GlobalStyles } from '../styles/globalStyles';
// import { CombinedContextProvider } from '../providers/_combinedProviders';
import { AppProvider } from '../contexts/appContext';

interface IBase {}

// const Providers = [<AppProvider />];

const Base: FunctionComponent<IBase> = ({ children }) => {
  return (
    <>
      <React.StrictMode>
        <AppProvider>
          <>{children}</>
        </AppProvider>
      </React.StrictMode>
      <GlobalStyles />
    </>
  );
};

export { Base };

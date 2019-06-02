import React, { FunctionComponent } from 'react';
import { GlobalStyles } from '../styles/globalStyles';
import { CombinedContextProvider } from '../providers/_combinedProviders';
import { AppProvider } from '../providers/appProvider';
import { MenuProvider } from '../providers/menuProvider';

interface IBase {}

const Providers = [<AppProvider />, <MenuProvider />];

const Base: FunctionComponent<IBase> = ({ children }) => {
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

export { Base };

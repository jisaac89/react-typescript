import React, { FunctionComponent } from 'react';
import { gotoRoute } from '../utils/helpers';
import { config } from '../config';
import { Nav, NavHeader } from './styles';
import { GlobalStyles } from '../styles/globalStyles';
import { CombinedContextProvider } from '../providers/combinedProviders';
import { AppProvider, AppStoreConsumer } from '../providers/appProvider';

interface ILayout {}

const Layout: FunctionComponent<ILayout> = ({ children }) => {
  return (
    <>
      <React.StrictMode>
        <CombinedContextProvider arrOfProviders={[<AppProvider />]}>
          <AppStoreConsumer>
            {({ isNightMode }) => {
              console.log(isNightMode);

              return (
                <>
                  <Nav>
                    <NavHeader>
                      <h1>Layout</h1>
                      <nav>
                        <button onClick={gotoRoute(config.routes.dashboardActive)}>Dashboard - Active</button>
                        <br />
                        <button onClick={gotoRoute(config.routes.dashboardArchived)}>Dashboard - Inactive</button>
                      </nav>
                    </NavHeader>
                  </Nav>
                  {children}
                </>
              );
            }}
          </AppStoreConsumer>
        </CombinedContextProvider>
      </React.StrictMode>
      <GlobalStyles />
    </>
  );
};

export { Layout };

import React, { FunctionComponent } from 'react';
import { gotoRoute } from '../utils/helpers';
import { config } from '../config';
import { Nav, NavHeader } from './styles';
import { GlobalStyles } from '../styles/globalStyles';
import { CombinedContextProvider } from '../providers/_combinedProviders';
import { AppProvider, AppStoreConsumer } from '../providers/appProvider';
import { MenuProvider, MenuStoreConsumer } from '../providers/menuProvider';

interface ILayout {}

const Providers = [<AppProvider />, <MenuProvider />];

const Layout: FunctionComponent<ILayout> = ({ children }) => {
  return (
    <>
      <React.StrictMode>
        <CombinedContextProvider arrOfProviders={Providers}>
          <AppStoreConsumer>
            {({ isNightMode, toggleNightmode }) => {
              console.log('nightmode is ' + isNightMode);
              return (
                <>
                  <Nav>
                    <MenuStoreConsumer>
                      {({ isOpen, toggleMenu }) => {
                        console.log('dashboard is ' + isOpen);
                        return (
                          <NavHeader>
                            <h1 onClick={() => toggleNightmode(!isNightMode)}>Layout</h1>
                            <nav>
                              <button onClick={gotoRoute(config.routes.dashboardActive)}>Dashboard - Active</button>
                              <br />
                              <button onClick={() => toggleMenu(!isOpen)}>Dashboard - Inactive</button>
                            </nav>
                          </NavHeader>
                        );
                      }}
                    </MenuStoreConsumer>
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

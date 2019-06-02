import React, { FunctionComponent } from 'react';
import { gotoRoute } from '../utils/helpers';
import { config } from '../config';
import { Nav, NavHeader } from './styles';
import { GlobalStyles } from '../styles/globalStyles';

interface ILayout {}

const Layout: FunctionComponent<ILayout> = ({ children }) => {
  return (
    <>
      <React.StrictMode>
        <>
          <Nav>
            <NavHeader>
              <h1>Layout</h1>
              <nav>
                <a onClick={gotoRoute(config.routes.dashboardActive)}>Dashboard - Active</a>
                <br />
                <a onClick={gotoRoute(config.routes.dashboardArchived)}>Dashboard - Inactive</a>
              </nav>
            </NavHeader>
          </Nav>
          {children}
        </>
      </React.StrictMode>
      <GlobalStyles />
    </>
  );
};

export { Layout };

import React, { FunctionComponent } from 'react';
import { gotoRoute } from '../../utils/helpers';
import { config } from '../../config';
import { Nav, NavHeader } from './styles';
import { useAppStore } from '../../hooks/useAppStore';

interface IHeader {}

const Header: FunctionComponent<IHeader> = ({ children }) => {
  const { toggleNightmode, isNightMode } = useAppStore();
  return (
    <Nav>
      <NavHeader>
        <h1 onClick={() => toggleNightmode()}>Layout - {isNightMode.toString()}</h1>
        <nav>
          <button onClick={gotoRoute(config.routes.dashboardActive)}>Dashboard - Active</button>
          <br />
          <button>Dashboard - Inactive</button>
        </nav>
      </NavHeader>
    </Nav>
  );
};

export { Header };

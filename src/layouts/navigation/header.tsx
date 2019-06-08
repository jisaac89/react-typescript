import React, { FunctionComponent } from 'react';
import { gotoRoute } from '../../utils/helpers';
import { config } from '../../config';
import { HeaderStyle } from './styles';
import { useAppStore } from '../../hooks/useAppStore';

const Header: FunctionComponent = ({ children }) => {
  const { toggleNightmode, isNightMode } = useAppStore();
  return (
    <HeaderStyle>
      <h1 onClick={toggleNightmode}>Layout - {isNightMode.toString()}</h1>
      <nav>
        <button onClick={gotoRoute(config.routes.dashboardActive)}>Dashboard - Active</button>
        <br />
        <button onClick={gotoRoute(config.routes.dashboardArchived)}>Dashboard - Inactive</button>
      </nav>
    </HeaderStyle>
  );
};

export { Header };

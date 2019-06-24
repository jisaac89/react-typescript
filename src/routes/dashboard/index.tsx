import React, { FunctionComponent } from 'react';
import { Layer } from '../../components/Layer/Layer';
import { RouteButton } from '../../components/atoms';

const Dashboard = () => (
  <Layer fill>
    <RouteButton title={'home'} to={'/'} />
  </Layer>
);

export { Dashboard };

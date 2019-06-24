import React, { FunctionComponent } from 'react';
import { Layer } from '../../components/Layer/Layer';
import { RouteButton } from '../../components/atoms';

const Home: FunctionComponent = () => {
  return (
    <Layer fill flex={'row'}>
      <RouteButton to={'/'} title={'Home'} />
      <RouteButton to={'/dashboard'} title={'Dashboard'} />
    </Layer>
  );
};

export { Home };

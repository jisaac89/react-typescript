import React, { FunctionComponent } from 'react';
import { Button } from 'react-native';
import { IReactNavigationPage } from '../../navigation/IReactNavigationPage';
import { Layer } from '../../components/Layer/Layer';

const Home: FunctionComponent<IReactNavigationPage> = ({ navigation }) => {
  return (
    <Layer fill flex="row">
      <Layer flexCenter fill>
        <Button onPress={() => navigation.navigate('Dashboard')} title={'Hello World'} />
      </Layer>
      <Layer flexCenter fill>
        <Button onPress={() => navigation.navigate('Dashboard')} title={'Hello World'} />
      </Layer>
    </Layer>
  );
};

export { Home };

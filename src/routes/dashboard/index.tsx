import React, { FunctionComponent } from 'react';
import { Button } from 'react-native';
import { IReactNavigationPage } from '../../navigation/IReactNavigationPage';
import { Layer } from '../../components/Layer/Layer';

const Dashboard: FunctionComponent<IReactNavigationPage> = ({ children, navigation }) => (
  <Layer fill>
    <Button onPress={() => navigation.navigate('Home')} title={'Dashboard'} />
  </Layer>
);

export { Dashboard };

import React, { FunctionComponent, useState } from 'react';
import { DefaultLayout } from './layouts/types/default';
import { AppLoading } from 'expo';
import { AppNavigation } from './navigation/MainTabNavigator';
import { Platform, StatusBar } from 'react-native';
import { Visible } from './components/atoms';
import { config } from './config';
import { Asset } from 'expo-asset';
import { Font } from 'expo';
import { createStackNavigator } from 'react-navigation';

// const assetArray = [Asset.loadAsync(config.assets.images), Font.loadAsync(config.assets.fonts)];

// const AppContainer = createStackNavigator(AppNavigation);

const App: FunctionComponent<{ skipLoadingScreen: boolean }> = ({ skipLoadingScreen }) => {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  const loadResourcesAsync = async () => {
    // Promise.all(assetArray);
  };

  const onError = (error: Error) => {
    console.warn(error);
  };

  const onFinish = () => {
    setLoadingComplete(true);
  };

  const appLoading = <AppLoading startAsync={loadResourcesAsync} onError={onError} onFinish={onFinish} />;
  const isLoading = isLoadingComplete && skipLoadingScreen;

  return (
    // put back in strict mode once legacy context api is updated for rn and rnw components
    <Visible isVisible={true} elseRender={appLoading}>
      <DefaultLayout>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigation />
      </DefaultLayout>
    </Visible>
  );
};

export { App };

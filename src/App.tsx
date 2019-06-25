import React, { FunctionComponent, useState } from 'react';
import { DefaultLayout } from './layouts/types/default';
import { AppLoading } from 'expo';
import { Navigator } from './navigation/MainTabNavigator';
import { Visible } from './components/atoms';

const App: FunctionComponent<{ skipLoadingScreen?: boolean }> = ({ skipLoadingScreen }) => {
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
    <Visible isVisible={isLoadingComplete} elseRender={appLoading}>
      <DefaultLayout>
        <Navigator />
      </DefaultLayout>
    </Visible>
  );
};

export { App };

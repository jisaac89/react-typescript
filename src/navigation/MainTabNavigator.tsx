// import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import React from 'react';
import { Home } from '../routes/home';
import { Dashboard } from '../routes/dashboard';
import { View } from 'react-native';
import { Route, Router } from '../routing/';

const Navigator = () => (
  <Router>
    <View>
      <Route exact path="/" component={Home} />
      <Route path="/Dashboard" component={Dashboard} />
    </View>
  </Router>
);

export { Navigator };

import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Home } from '../routes/home';
import { Dashboard } from '../routes/dashboard';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  Dahboard: {
    screen: Dashboard
  }
});

export const AppNavigation = createAppContainer(AppNavigator);

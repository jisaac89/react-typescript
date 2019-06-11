import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Home } from '../routes/home';
import { Dashboard } from '../routes/dashboard';

const AppNavigator = createSwitchNavigator(
  {
    Home: Home,
    Dashboard: Dashboard
  },
  {
    initialRouteName: 'Home'
  }
);

export const AppNavigation = createAppContainer(AppNavigator);

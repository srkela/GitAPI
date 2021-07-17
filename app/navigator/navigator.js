import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from '../components/screens/Home';

const screens = {
  Home,
};

const navigatorProps = {
  initialRouteParams: Home,
  // TODO: add navigation props
};

const AppNavigator = createStackNavigator(screens, navigatorProps);

export default createAppContainer(AppNavigator);

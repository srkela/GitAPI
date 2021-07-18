import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {navigatorConfig} from './navigatorConfig';

import Home from '../components/screens/Home';
import CommitList from '../components/screens/CommitList';

const screens = {
  Home,
  CommitList,
};

const navigatorProps = {
  initialRouteParams: Home,
  navigatorConfig,
};

const AppNavigator = createStackNavigator(screens, navigatorProps);

export default createAppContainer(AppNavigator);

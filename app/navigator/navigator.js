import React from 'react';
import Text from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {navigatorConfig} from './navigatorConfig';

import Home from '../components/screens/Home';

const screens = {
  Home,
};

const navigatorProps = {
  initialRouteParams: Home,
  navigatorConfig,
};

const AppNavigator = createStackNavigator(screens, navigatorProps);

export default createAppContainer(AppNavigator);

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import AppNavigation from './app/navigator/navigator';

import 'react-native-gesture-handler';

const App: () => Node = () => {
  return <AppNavigation />;
};

export default App;

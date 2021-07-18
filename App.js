/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {Provider} from 'react-redux';
import AppNavigation from './app/navigator/navigator';

import 'react-native-gesture-handler';
import store from './app/redux/store';
import {
  setActiveScreen,
  setTopLevelNavigator,
} from './app/redux/nav/navActions';

function getActiveRouteName(navigationState) {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.routes) {
    return getActiveRouteName(route);
  }
  return route.routeName;
}

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <AppNavigation
        onNavigationStateChange={(prevState, currentState) => {
          const currentScreen = getActiveRouteName(currentState);
          const prevScreen = getActiveRouteName(prevState);

          if (prevScreen !== currentScreen) {
            store.dispatch(setActiveScreen(currentScreen));
          }
        }}
        ref={navigatorRef => setTopLevelNavigator(navigatorRef)}
      />
    </Provider>
  );
};

export default App;

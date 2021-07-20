import React from 'react';
import mock from 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-gesture-handler', () => {
  return mock;
});

jest.mock('react-navigation-stack', () => {
  return {
    createAppContainer: jest
      .fn()
      .mockReturnValue(function NavigationContainer(props) {
        return null;
      }),
    createStackNavigator: jest.fn().mockImplementation(nav => {
      return {};
    }),
  };
});

jest.mock('react-navigation', () => {
  return {
    createAppContainer: jest
      .fn()
      .mockReturnValue(function NavigationContainer(props) {
        return null;
      }),
    createDrawerNavigator: jest.fn().mockImplementation(nav => {
      return {};
    }),
    createMaterialTopTabNavigator: jest.fn(),
    createStackNavigator: jest.fn().mockImplementation(nav => {
      return {};
    }),
    createSwitchNavigator: jest.fn().mockImplementation(nav => {
      return {};
    }),
    createBottomTabNavigator: jest.fn(),
    withNavigation: jest.fn().mockImplementation(component => component),
    StackActions: {
      push: jest
        .fn()
        .mockImplementation(x => ({...x, type: 'Navigation/PUSH'})),
      replace: jest
        .fn()
        .mockImplementation(x => ({...x, type: 'Navigation/REPLACE'})),
    },
    NavigationActions: {
      navigate: jest.fn().mockImplementation(x => x),
    },
    ThemeColors: {
      light: {
        bodyContent: '',
      },
      dark: {
        bodyContent: '',
      },
    },
  };
});

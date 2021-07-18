import {NavigationActions, StackActions} from 'react-navigation';
import ACTIONS from '../../constants/ACTIONS';

let _navigator;

export {navigateTo, setTopLevelNavigator, setActiveScreen, resetToScreen};

function setActiveScreen(screenName) {
  return dispatch => {
    dispatch({type: ACTIONS.SET_ACTIVE_SCREEN, payload: {screenName}});
  };
}

/**
 * Sets _navigator
 * @param {Object} navigatorRef
 */
function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

/**
 * Navigates to a screen
 * @param {string} routeName - name of the screen
 * @param {Object} params - parameters for the next screen
 */
function navigateTo(routeName, params) {
  return () => {
    if (!_navigator) {
      return;
    }
    _navigator.dispatch(
      NavigationActions.navigate({
        routeName,
        params,
      }),
    );
  };
}

/**
 * Resets stack, index = 0
 *
 * @param flow
 * @param params
 * @returns {Function}
 */

function resetToScreen(screenName, params) {
  return () => {
    if (!_navigator) {
      return;
    }
    _navigator.dispatch(
      StackActions.reset({
        index: 0,
        key: undefined,
        actions: [NavigationActions.navigate({routeName: screenName, params})],
      }),
    );
  };
}

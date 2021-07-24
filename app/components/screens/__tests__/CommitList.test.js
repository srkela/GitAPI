import React from 'react';
import {render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import CommitList from '../CommitList';
import store from '../../../redux/store';

const getParamMock = jest
  .fn()
  .mockReturnValueOnce('srkela')
  .mockReturnValueOnce('GitAPI')
  .mockReturnValueOnce(25);

describe('CommitList', () => {
  test('should render', () => {
    const navigation = {
      getParam: getParamMock,
    };
    render(
      <Provider store={store}>
        <CommitList
          navigation={navigation}
          // commitsList={initialState.commitsList}
          actions={{getCommitList: jest.fn()}}
        />
      </Provider>,
    );
  });
});

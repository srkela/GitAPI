import React from 'react';
import {render} from '@testing-library/react-native';
import _ from 'lodash';
import CommitList from '../CommitList';
import store from '../../../redux/store';
import mockCommitList from '../../../../mocks/mockCommitList';

jest.mock('../../../redux/store', () => ({
  getState: jest.fn(),
}));

let mockState;
store.getState = () => mockState;

const initialState = {
  commitsList: mockCommitList.commits.commitsList,
};

beforeEach(() => {
  mockState = _.cloneDeep(initialState);
});
afterEach(() => {
  mockState = _.cloneDeep(initialState);
});
describe('CommitList', () => {
  it('should render', () => {
    render(<CommitList commitsList={initialState} />);
  });
});

import ACTIONS from '../../constants/ACTIONS';

const initialState = {
  commitsList: {},
};

export default function commitsReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.GET_COMMITS_LIST:
      return {
        ...state,
        commitsList: action.commitsList,
      };

    default:
      return {...state};
  }
}

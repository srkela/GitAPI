import {Octokit} from '@octokit/core';
import constants from '../../../constants/accessToken';
import ACTIONS from '../../constants/ACTIONS';

const {ACCESS_TOKEN} = constants;

export {getCommitList};

function getCommitList(owner, repo, perPage) {
  const octokit = new Octokit({auth: ACCESS_TOKEN});
  return async dispatch => {
    try {
      const mostRecentCommits = await octokit.request(
        'GET /repos/{owner}/{repo}/commits',
        {owner, repo, per_page: perPage},
      );
      dispatch({
        type: ACTIONS.GET_COMMITS_LIST,
        commitsList: mostRecentCommits.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

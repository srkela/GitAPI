import {Octokit} from '@octokit/core';
import constants from '../../../constants/accessToken';
import ACTIONS from '../../constants/ACTIONS';

const {ACCESS_TOKEN} = constants;

export {getCommitList};

function getCommitList() {
  const octokit = new Octokit({auth: ACCESS_TOKEN});
  const owner = 'srkela';
  const repo = 'GitAPI';
  const perPage = 25;
  return async dispatch => {
    try {
      const mostRecentCommits = await octokit.request(
        'GET /repos/{owner}/{repo}/commits',
        {owner, repo, per_page: perPage},
      );
      console.log({mostRecentCommits});
      dispatch({
        type: ACTIONS.GET_COMMITS_LIST,
        commitsList: mostRecentCommits.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

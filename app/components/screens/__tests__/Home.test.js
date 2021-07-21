import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import HomeWrapper from '../Home';

describe('HomeWrapper', () => {
  it('renders default elements', () => {
    const {getByPlaceholderText, getByTestId} = render(<HomeWrapper />);
    getByPlaceholderText('Owner');
    getByPlaceholderText('Repo');
    getByPlaceholderText('Number of Commits');
    getByTestId('button');
  });

  it('should set owner, repo and number of commits to state', () => {
    const {getByPlaceholderText, getByTestId, getByA11yState} = render(<HomeWrapper />);
    const ownerInput = getByPlaceholderText('Owner');
    const repoInput = getByPlaceholderText('Repo');
    const numberOfCommits = getByPlaceholderText('Number of Commits');
    const button = getByTestId('button');

    fireEvent.changeText(ownerInput, 'JohnDoe');
    fireEvent.changeText(repoInput, 'SomeRepo');
    fireEvent.changeText(numberOfCommits, 25);
    fireEvent.press(button);

    // getByA11yState({owner: 'JohnDoe'});
    // getByA11yState({repo: 'SomeRepo'});
    // getByA11yState({numberOfCommits: 25});
  });
});

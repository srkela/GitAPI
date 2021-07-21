import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {Provider} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as appActions from '../../redux/actions';
import store from '../../redux/store';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  listItem: {
    paddingVertical: 3,
    borderColor: 'gray',
    borderWidth: 0.5,
  },
});

@connect(
  state => ({
    commitsList: state.commits.commitsList,
  }),
  dispatch => ({actions: bindActionCreators(appActions, dispatch)}),
)
class CommitList extends React.Component {
  static navigationOptions = () => ({
    title: 'CommitList',
  });
  componentDidMount() {
    const {actions, navigation} = this.props;
    const owner = navigation.getParam('owner');
    const repo = navigation.getParam('repo');
    const numOfCommits = navigation.getParam('numberOfCommits');
    actions.getCommitList(owner, repo, numOfCommits);
  }

  render() {
    const {commitsList} = this.props;
    console.log({commitsList});
    return (
      <View style={styles.mainContainer}>
        <FlatList
          data={commitsList}
          renderItem={({item}) => {
            return (
              <View style={styles.listItem}>
                <Text>Author name: {item.commit.author.name}</Text>
                <Text>Commit hash: {item.sha}</Text>
                <Text>Commit message: {item.commit.message}</Text>
              </View>
            );
          }}
        />
      </View>
    );
  }
}

export default connect(
  state => ({
    commitsList: state.commits.commitsList,
  }),
  dispatch => ({actions: bindActionCreators(appActions, dispatch)}),
)(CommitList);

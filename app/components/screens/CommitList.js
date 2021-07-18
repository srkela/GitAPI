import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as appActions from '../../redux/actions';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    title: 'Commit CommitList',
  });
  componentDidMount() {
    const {actions} = this.props;

    actions.getCommitList();
  }

  render() {
    const {actions, commitsList} = this.props;
    console.log({commitsList});
    return (
      <View style={styles.mainContainer}>
        <TouchableOpacity
          onPress={() => {
            actions.navigateTo('Home');
          }}>
          <Text>Details Something</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default CommitList;

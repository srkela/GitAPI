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
  () => ({}),
  dispatch => ({actions: bindActionCreators(appActions, dispatch)}),
)
class Home extends React.Component {
  static navigationOptions = () => ({
    title: 'Commits List',
  });

  render() {
    const {actions} = this.props;
    return (
      <View style={styles.mainContainer}>
        <TouchableOpacity
          onPress={() => {
            actions.navigateTo('Details');
          }}>
          <Text>Home Something</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Home;

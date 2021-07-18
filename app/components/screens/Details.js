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
class Details extends React.Component {
  static navigationOptions = () => ({
    title: 'Commit Details',
  });

  render() {
    const {actions} = this.props;
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

export default Details;

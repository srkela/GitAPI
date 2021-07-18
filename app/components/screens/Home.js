import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as appActions from '../../redux/actions';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50,
  },
  button: {
    width: 120,
    height: 40,
    borderColor: 'black',
    borderRadius: 4,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
});

@connect(
  () => {},
  dispatch => ({actions: bindActionCreators(appActions, dispatch)}),
)
class Home extends React.Component {
  static navigationOptions = () => ({
    title: 'Welcome!',
  });

  render() {
    const {actions} = this.props;
    return (
      <View style={styles.mainContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            actions.navigateTo('CommitList');
          }}>
          <Text style={styles.text}>Get Commits</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Home;

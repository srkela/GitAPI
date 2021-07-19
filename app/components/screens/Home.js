import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
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
  textInput: {
    height: 40,
    width: 150,
    margin: 12,
    borderWidth: 1,
  },
});

@connect(
  () => ({}),
  dispatch => ({actions: bindActionCreators(appActions, dispatch)}),
)
class Home extends React.Component {
  static navigationOptions = () => ({
    title: 'Welcome!',
  });

  constructor(props) {
    super(props);

    this.state = {
      owner: '',
      repo: '',
      numberOfCommits: 0,
    };
  }

  render() {
    const {actions} = this.props;
    const {owner, repo, numberOfCommits} = this.state;
    return (
      <View style={styles.mainContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={text =>
            this.setState({
              owner: text,
            })
          }
          placeholder="Owner"
        />
        <TextInput
          style={styles.textInput}
          onChangeText={text =>
            this.setState({
              repo: text,
            })
          }
          placeholder="Repo"
        />
        <TextInput
          style={styles.textInput}
          onChangeText={num =>
            this.setState({
              numberOfCommits: num,
            })
          }
          placeholder="Number of Commits"
          keyboardType="numeric"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            actions.navigateTo('CommitList', {
              owner,
              repo,
              numberOfCommits,
            });
          }}>
          <Text style={styles.text}>Get Commits</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Home;

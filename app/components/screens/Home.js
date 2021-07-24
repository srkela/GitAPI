import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, Provider} from 'react-redux';
import * as appActions from '../../redux/actions';
import store from '../../redux/store';

const Home = () => {
  const [owner, setOwner] = useState('');
  const [repo, setRepo] = useState('');
  const [numberOfCommits, setNumberOfCommits] = useState(null);
  const dispatch = useDispatch();

  return (
    <View style={styles.mainContainer}>
      <Text>Please enter owner, repo and number of commits</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={text => setOwner(text)}
        placeholder="Owner"
      />
      <TextInput
        style={styles.textInput}
        onChangeText={text => setRepo(text)}
        placeholder="Repo"
      />
      <TextInput
        style={styles.textInput}
        onChangeText={num => setNumberOfCommits(num)}
        placeholder="Number of Commits"
        keyboardType="numeric"
      />
      <TouchableOpacity
        style={styles.button}
        testID={'button'}
        onPress={() => {
          dispatch(
            appActions.navigateTo('CommitList', {
              owner,
              repo,
              numberOfCommits,
            }),
          );
        }}>
        <Text style={styles.text}>Get Commits</Text>
      </TouchableOpacity>
    </View>
  );
};

const HomeWrapper = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

HomeWrapper.navigationOptions = () => {
  return {
    title: 'Welcome!',
  };
};

export default HomeWrapper;

export const styles = StyleSheet.create({
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

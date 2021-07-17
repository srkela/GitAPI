import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Home = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>Something</Text>
    </View>
  );
};

export default Home;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <StartGameScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

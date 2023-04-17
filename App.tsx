/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, ImageBackground} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import LinearGradient from 'react-native-linear-gradient';
import GameScreen from './screens/GameScreen';

function App(): JSX.Element {
  const [pickedNum, setPickedNum] = useState();
  let screen = <StartGameScreen onPickedNumber={setPickedNum} />;
  if (pickedNum) {
    screen = <GameScreen />;
  }
  return (
    <LinearGradient style={styles.container} colors={['#4c0629', '#ddb52f']}>
      <ImageBackground
        style={styles.container}
        imageStyle={styles.imgstyle}
        resizeMode="cover"
        source={require('./assets/images/dice.jpg')}>
        <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgstyle: {
    opacity: 0.15,
  },
});

export default App;

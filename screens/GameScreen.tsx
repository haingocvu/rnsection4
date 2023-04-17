import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Title from '../components/Title';

const GameScreen = () => {
  return (
    <View style={style.screen}>
      <Title>Opponent's Guess</Title>
      <Text>GUESS</Text>
      <View>
        <Text>Higher or Lower?</Text>
        <Text>+-</Text>
      </View>
      <View>
        <Text>Log rounds</Text>
      </View>
    </View>
  );
};

export default GameScreen;

const style = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
  },
});

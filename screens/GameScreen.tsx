import React, {FC, PropsWithChildren, useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import {randomNum} from '../utils/randomNum';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

interface IProps extends PropsWithChildren<unknown> {
  pickedNum: number;
  onGameOver: () => void;
}

let minBoundary = 1;
let maxBoundary = 99;

const GameScreen: FC<IProps> = props => {
  const {pickedNum, onGameOver} = props;
  const _random = randomNum(minBoundary, maxBoundary, pickedNum);
  const [guessNum, setGuessNum] = useState(_random);

  function actionHandler(direction: 'lower' | 'higher') {
    if (
      (guessNum > pickedNum && direction === 'higher') ||
      (guessNum < pickedNum && direction === 'lower')
    ) {
      Alert.alert('dont lie!', 'You know that this is', [
        {text: 'Okay', style: 'cancel'},
      ]);
      return;
    }

    if (direction === 'higher') {
      minBoundary = guessNum + 1;
    } else {
      maxBoundary = guessNum;
    }
    console.log(minBoundary, maxBoundary);
    const _ranNum = randomNum(minBoundary, maxBoundary, guessNum);
    if (_ranNum === pickedNum) {
      onGameOver();
    }
    setGuessNum(_ranNum);
  }

  return (
    <View style={style.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{guessNum}</NumberContainer>
      <Card>
        <InstructionText style={style.InstructionText}>
          Higher or Lower?
        </InstructionText>
        <View style={style.btnGroup}>
          <View style={style.btn}>
            <PrimaryButton onPress={actionHandler.bind(this, 'higher')}>
              <Icon name="add" size={20} color="white" />
            </PrimaryButton>
          </View>
          <View style={style.btn}>
            <PrimaryButton onPress={actionHandler.bind(this, 'lower')}>
              <Icon name="remove" size={20} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View>{/* <Text>Log rounds</Text> */}</View>
    </View>
  );
};

export default GameScreen;

const style = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
  },
  btnGroup: {
    flexDirection: 'row',
  },
  btn: {
    flex: 1,
  },
  InstructionText: {
    marginBottom: 24,
  },
});

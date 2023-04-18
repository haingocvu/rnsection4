import React, {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useState,
} from 'react';
import {View, TextInput, StyleSheet, Alert} from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import {colors} from '../constants/constants';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

interface IProps extends PropsWithChildren<unknown> {
  onPickedNumber:
    | ((pickedNumber: number) => void)
    | Dispatch<SetStateAction<any>>;
}

const StartGameScreen: FC<IProps> = props => {
  const {onPickedNumber} = props;
  const [inputValue, setInputValue] = useState('');
  const resetHandler = () => setInputValue('');
  const confirmHandler = () => {
    const choosenNum = parseInt(inputValue, 10);
    if (isNaN(choosenNum) || choosenNum < 1 || choosenNum > 99) {
      Alert.alert(
        'Invalid Num!',
        'Number mus be greater than 0 or less than 100!',
        [{text: 'Okay', style: 'destructive', onPress: resetHandler}],
      );
      return;
    }
    onPickedNumber(choosenNum);
  };
  return (
    <View style={style.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a number</InstructionText>
        <TextInput
          style={style.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={inputValue}
          onChangeText={setInputValue}
        />
        <View style={style.btnContainer}>
          <View style={style.btn}>
            <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
          </View>
          <View style={style.btn}>
            <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const style = StyleSheet.create({
  rootContainer: {
    alignItems: 'center',
    flex: 1,
  },
  numberInput: {
    height: 65,
    width: 50,
    marginVertical: 16,
    borderBottomColor: colors.secondary500,
    borderBottomWidth: 2,
    color: colors.secondary500,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 32,
  },
  btnContainer: {
    flexDirection: 'row',
  },
  btn: {
    flex: 1,
  },
});

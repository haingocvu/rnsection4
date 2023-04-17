import React, {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useState,
} from 'react';
import {View, TextInput, StyleSheet, Alert} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import {colors} from '../constants/constants';

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
    <View style={style.container}>
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
        <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
        <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
      </View>
    </View>
  );
};

export default StartGameScreen;

const style = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 16,
    marginHorizontal: 16,
    backgroundColor: colors.primary600,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.25,
    alignItems: 'center',
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
});

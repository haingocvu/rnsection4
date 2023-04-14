import React, {FC, PropsWithChildren} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

interface IProps extends PropsWithChildren<unknown> {}

const StartGameScreen: FC<IProps> = () => {
  return (
    <View style={style.container}>
      <TextInput />
      <PrimaryButton>Confirm</PrimaryButton>
      <PrimaryButton>Reset</PrimaryButton>
    </View>
  );
};

export default StartGameScreen;

const style = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 16,
    marginHorizontal: 16,
    backgroundColor: '#72063c',
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});

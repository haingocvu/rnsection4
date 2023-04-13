import React, {FC, PropsWithChildren} from 'react';
import {View, TextInput} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

interface IProps extends PropsWithChildren<unknown> {}

const StartGameScreen: FC<IProps> = () => {
  return (
    <View>
      <TextInput />
      <PrimaryButton>Confirm</PrimaryButton>
      <PrimaryButton>Reset</PrimaryButton>
    </View>
  );
};

export default StartGameScreen;

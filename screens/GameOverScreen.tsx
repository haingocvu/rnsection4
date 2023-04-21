import {Image, StyleSheet, Text, View} from 'react-native';
import Title from '../components/ui/Title';
import {colors} from '../constants/constants';
import PrimaryButton from '../components/ui/PrimaryButton';
import {FC, PropsWithChildren} from 'react';

interface IProps extends PropsWithChildren<any> {
  totalRounds?: number;
  userPickNumber?: number;
  onStartNewGame?: () => void;
}

const GameOverScreen: FC<IProps> = props => {
  const {onStartNewGame, totalRounds, userPickNumber} = props;
  return (
    <View style={styles.wrapper}>
      <Title>Game over</Title>
      <View style={styles.imgWrapper}>
        <Image source={require('../assets/images/success.png')} alt="success" />
      </View>
      <Text style={styles.summaryText}>
        Your phone needs <Text style={styles.highlight}>{totalRounds}</Text>{' '}
        rounds to guess the number{' '}
        <Text style={styles.highlight}>{userPickNumber}</Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start new game</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 26,
    marginTop: 39,
  },
  imgWrapper: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 5,
    overflow: 'hidden',
    borderColor: colors.primary500,
  },
  img: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 24,
    textAlign: 'center',
  },
  highlight: {
    fontFamily: 'OpenSans-Bold',
  },
});

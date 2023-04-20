import {Image, StyleSheet, Text, View} from 'react-native';
import Title from '../components/ui/Title';
import {colors} from '../constants/constants';

const GameOverScreen = () => {
  return (
    <View style={styles.wrapper}>
      <Title>Game over</Title>
      <View style={styles.imgWrapper}>
        <Image source={require('../assets/images/success.png')} alt="success" />
      </View>
      <Text>Your phone needs x rounds to guess the number Y</Text>
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
});

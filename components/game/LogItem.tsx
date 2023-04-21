import {FC, PropsWithoutRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../../constants/constants';

interface IProps extends PropsWithoutRef<any> {
  roundIndex: number;
  guessNum: number;
}

const LogItem: FC<IProps> = props => {
  const {roundIndex, guessNum} = props;
  return (
    <View style={styles.logItem}>
      <Text># {roundIndex}</Text>
      <Text>{guessNum}</Text>
    </View>
  );
};

export default LogItem;

const styles = StyleSheet.create({
  logItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: colors.primary600,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: colors.secondary500,
    width: '100%',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  text: {
    fontFamily: 'OpenSans-Regular',
  },
});

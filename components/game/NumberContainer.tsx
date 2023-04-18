import {FC, PropsWithChildren} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../constants/constants';

interface IProps extends PropsWithChildren<unknown> {}
const NumberContainer: FC<IProps> = props => {
  const {children} = props;
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 4,
    borderColor: colors.secondary500,
    padding: 24,
    borderRadius: 8,
    margin: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.secondary500,
    fontSize: 36,
    fontWeight: 'bold',
  },
});

import {FC, PropsWithChildren} from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from '../../constants/constants';

const Card: FC<PropsWithChildren<unknown>> = props => {
  return <View style={style.inputContainer}>{props.children}</View>;
};

export default Card;

const style = StyleSheet.create({
  inputContainer: {
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
    justifyContent: 'center',
  },
});

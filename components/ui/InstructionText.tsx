import {Text, StyleSheet, TextStyle} from 'react-native';
import {colors} from '../../constants/constants';
import {FC, PropsWithChildren} from 'react';

interface IProps extends PropsWithChildren<unknown> {
  style?: TextStyle;
}

const InstructionText: FC<IProps> = props => {
  const {children, style} = props;
  return <Text style={[styles.desc, style]}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  desc: {
    fontSize: 24,
    fontFamily: 'OpenSans-Bold',
    color: colors.secondary500,
  },
});

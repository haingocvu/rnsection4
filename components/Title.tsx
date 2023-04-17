import React, {FC, PropsWithChildren} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../constants/constants';

interface IProps extends PropsWithChildren<unknown> {}

const Title: FC<IProps> = props => {
  const {children} = props;
  return (
    <View>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    color: colors.secondary500,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    borderColor: colors.secondary500,
    borderWidth: 4,
    padding: 12,
  },
});

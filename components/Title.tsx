import React, {FC, PropsWithChildren} from 'react';
import {StyleSheet, Text, View} from 'react-native';

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
    color: '#ddb52f',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    borderColor: '#ddb52f',
    borderWidth: 4,
    padding: 12,
  },
});

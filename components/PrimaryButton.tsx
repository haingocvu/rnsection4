import {FC, PropsWithChildren} from 'react';
import {View, Text} from 'react-native';

interface IProps extends PropsWithChildren<unknown> {}

const PrimaryButton: FC<IProps> = props => {
  const {children} = props;
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};

export default PrimaryButton;

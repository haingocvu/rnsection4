import {FC, PropsWithChildren} from 'react';
import {Text, Pressable, StyleSheet, View} from 'react-native';
import {colors} from '../../constants/constants';

interface IProps extends PropsWithChildren<unknown> {
  onPress?: () => void;
}

const PrimaryButton: FC<IProps> = props => {
  const {children, onPress} = props;
  return (
    <View style={style.btnOuter}>
      <Pressable
        onPress={onPress}
        android_ripple={{color: '#b67d99'}}
        style={({pressed}) =>
          pressed ? [style.btnInner, style.pressed] : style.btnInner
        }>
        <Text style={style.btnText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const style = StyleSheet.create({
  btnOuter: {
    borderRadius: 28,
    elevation: 4,
    margin: 4,
    overflow: 'hidden',
  },
  btnInner: {
    backgroundColor: colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    minWidth: 60,
  },
  pressed: {
    opacity: 0.75,
  },
});

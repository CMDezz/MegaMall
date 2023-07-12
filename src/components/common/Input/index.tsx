import React from 'react';
import {
  KeyboardAvoidingView,
  View,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';
import MaskedTextInput, {MaskInputProps} from 'react-native-mask-input';
import Text from '../Text';
import {Color, Layout} from '@controls/Theme';
import {TouchableOpacity} from 'react-native-gesture-handler';

type Props = MaskInputProps & {
  type?: 'text' | 'number' | 'phone';
  icon?: JSX.Element;
  iconPosition?: 'left' | 'right';
  onIconClick?: () => void;
  label?: string;
  labelStyle?: TextStyle;
  inputStyle?: ViewStyle;
  containerStyle?: ViewStyle;
};

const IconContainer = ({
  icon,
  onIconClick,
}: {
  icon: JSX.Element;
  onIconClick?: () => void;
}): JSX.Element => {
  return (
    <TouchableOpacity style={{}} onPress={onIconClick}>
      {icon}
    </TouchableOpacity>
  );
};

type InputContainerProps = Props & {};

const InputContainer = (props: InputContainerProps): JSX.Element => {
  const {onIconClick, iconPosition, icon, inputStyle, ...otherProps} = props;
  return (
    <View style={styles.inputContainer}>
      {iconPosition === 'left' && icon && (
        <IconContainer icon={icon} onIconClick={onIconClick} />
      )}
      <MaskedTextInput
        {...otherProps}
        placeholderTextColor={Color.Neutral[1]}
        style={[styles.defaultInputStyle, inputStyle] as TextStyle}
      />
      {iconPosition === 'right' && icon && (
        <IconContainer icon={icon} onIconClick={onIconClick} />
      )}
    </View>
  );
};

const Input = (props: Props) => {
  const {
    type = 'text',
    iconPosition = 'right',
    onIconClick,
    label,
    labelStyle = {},
    inputStyle = {},
    containerStyle = {},
    ...otherProps
  } = props;
  return (
    <KeyboardAvoidingView style={containerStyle}>
      {label && (
        <Text
          preset="NormalText"
          style={[styles.defaultLabelStyle, labelStyle]}>
          {label}
        </Text>
      )}
      <InputContainer
        {...otherProps}
        iconPosition={iconPosition}
        onIconClick={onIconClick}
        inputStyle={inputStyle}
        type={type}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  defaultLabelStyle: {
    paddingBottom: 20,
    textAlign: 'left',
  },
  defaultInputStyle: {
    flex: 1,
    fontWeight: Layout.Text.Weight.medium,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Color.Neutral[4],
    borderRadius: 10,
    paddingHorizontal: 20,
  },
});

export default Input;
